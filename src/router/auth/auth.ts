import express from "express";
import { validationMiddleware } from "../../middleware/validation";
import { authControllers } from "../../controllers";
import { registrationValidation } from "../../models/users/validation";


export const getAuthRoutes = () => {
  const router = express.Router();

  router.post("/registration", registrationValidation, [validationMiddleware ], authControllers.registration);
  router.post("/login", registrationValidation, [validationMiddleware ], authControllers.login);

  return router;
}


