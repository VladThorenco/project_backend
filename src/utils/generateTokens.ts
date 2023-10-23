import { UserToken } from "../models/refreshToken/token";
import jwt from "jsonwebtoken";
import { ISchemaUser } from "../models/auth/type";


const generateTokens = async (user: ISchemaUser) => {
  try {
    const payload = { email: user.email };

    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY ?? '',
      { expiresIn: "14m" }
    );
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY ?? '',
      { expiresIn: "30d" }
    );

    const userToken = await UserToken.findOne({ email: user.email });
    if (userToken) await userToken.deleteOne({ userId: userToken._id });

    await new UserToken({ token: refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default generateTokens;
