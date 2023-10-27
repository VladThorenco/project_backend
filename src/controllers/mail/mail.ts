import { Response } from 'express';
import { sendMail } from '../../services/mail/mailServices';
import { EHTTP_STATUSES } from '../../constans';
import { RequestBody } from '../../types';
import { IMail } from '../../services/mail/type';

export const mailController = {
  send: async (req: RequestBody<IMail>, res: Response) => {
    try {
      const response = await sendMail(req, res);
      res.status(EHTTP_STATUSES.OK).json({
        status: 'success',
        message: 'Email sent successfully',
        data: response,
      });
    } catch (error) {
      res.status(EHTTP_STATUSES.BAD_REQUEST).json({
        status: 'error',
        message: 'Email not sent',
      });
    }
  },
};
