import express from 'express';
import { mailController } from '../../controllers/mail/mail';

export const getMailRoutes = () => {
  const router = express.Router();

  router.post('/', mailController.send);

  return router;
};
