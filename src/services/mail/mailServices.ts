import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { Response } from 'express';
import { RequestBody } from '../../types';
import { IMail } from './type';
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'vlad-tkhorenko',
  key: 'd3a92776e8c7a6eaa023d784065e15b3-324e0bb2-1ec06452',
});

export const sendMail = async (req: RequestBody<IMail>, res: Response) => {
  const { toEmail, fromEmail, subject, message } = req.body;
  try {
    await mg.messages.create('sandbox3d1394767c7b4c48bed76708be563d1c.mailgun.org', {
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      text: message,
    });
  } catch (err) {
    console.log(err);
  }
};
