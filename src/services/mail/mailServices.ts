import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { Response } from 'express';
import { RequestBody } from '../../types';
import { IMail } from './type';
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: process.env.MAILGUN_USER_NAME as string,
  key: process.env.MAILGUN_API_KEY as string,
});

export const sendMail = async (req: RequestBody<IMail>, res: Response) => {
  const { toEmail, fromEmail, subject, message } = req.body;
  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN as string, {
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      text: message,
    });
  } catch (err) {
    console.log(err);
  }
};
