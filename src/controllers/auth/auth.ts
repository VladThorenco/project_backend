import { EHTTP_STATUSES } from '../../constans';
import { Response } from 'express';
import bcrypt from 'bcrypt';
import generateTokens from '../../utils/generateTokens';
import { User } from '../../models/users/users';
import { RequestBody } from '../../types';
import { IUser } from './type';

export const authControllers = {
  registration: async (req: RequestBody<IUser>, res: Response) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user)
        return res.status(EHTTP_STATUSES.BAD_REQUEST).json({
          error: true,
          message: 'User with given email already exist',
        });

      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      await new User({ ...req.body, password: hashPassword }).save();
      res
        .status(EHTTP_STATUSES.CREATED)
        .json({ error: false, message: 'Account created sucessfully' });
    } catch (err) {
      res
        .status(EHTTP_STATUSES.ERROR_SERVER)
        .json({ error: true, message: 'Internal Server Error' });
    }
  },
  login: async (req: RequestBody<IUser>, res: Response) => {
    try {
      const user: IUser | null = await User.findOne({ email: req.body.email });
      if (!user)
        return res
          .status(EHTTP_STATUSES.NOT_AUTHORIZED)
          .json({ error: true, message: 'Invalid email or password' });

      if (user && user.password) {
        const verifiedPassword = await bcrypt.compare(req.body.password, user.password);

        if (!verifiedPassword)
          return res
            .status(EHTTP_STATUSES.NOT_AUTHORIZED)
            .json({ error: true, message: 'Invalid email or password' });
      }

      const { accessToken, refreshToken } = await generateTokens(user);

      res.status(EHTTP_STATUSES.OK).json({
        error: false,
        accessToken,
        refreshToken,
        message: 'Logged in sucessfully',
      });
    } catch (err) {
      console.log(err);
      res
        .status(EHTTP_STATUSES.ERROR_SERVER)
        .json({ error: true, message: 'Internal Server Error' });
    }
  },
};
