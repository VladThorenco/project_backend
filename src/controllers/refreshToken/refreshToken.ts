import { EHTTP_STATUSES } from "../../constans";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyRefreshToken } from "../../utils/verifyRefreshToken";
import { UserToken } from "../../models/token/token";

/* todo add types to  refreshTokenControllers */
export const refreshTokenControllers = {
  refreshToken: async (req: Request, res: Response) => {
    verifyRefreshToken(req.body.refreshToken)
      .then(({ tokenDetails }: any) => {
        const payload = { email: tokenDetails.email };
        const accessToken = jwt.sign(
          payload,
          process.env.ACCESS_TOKEN_PRIVATE_KEY ?? '',
          { expiresIn: "14m" }
        );
        res.status(EHTTP_STATUSES.OK).json({
          error: false,
          accessToken,
          message: "Access token created successfully",
        });
      })
      .catch((err) => res.status(EHTTP_STATUSES.BAD_REQUEST).json(err));
  },
  logout: async (req: Request, res: Response) => {
    try {
      const userToken = await UserToken.findOne({ token: req.body.refreshToken });

      if (!userToken)
        return res
          .status(200)
          .json({ error: false, message: "Logged Out Sucessfully" });

      await userToken.deleteOne();
      res.status(EHTTP_STATUSES.OK).json({ error: false, message: "Logged Out Sucessfully" });
    } catch (err) {
      console.log(err);
      res.status(EHTTP_STATUSES.ERROR_SERVER).json({ error: true, message: "Internal Server Error" });
    }
  },
}
