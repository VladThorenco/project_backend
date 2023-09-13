import express from "express";
import { EHTTP_STATUSES } from "../../constans";
import { authControllers } from "../../controllers";
import { loginValidation } from "./validation";
import { validationResult } from "express-validator";


export const getAuthRoutes = () => {
  const router = express.Router();

  router.post("/registration", loginValidation, (req: any, res: any) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.send({ errors: result.array() });
    }
    const createdCourse = authControllers.creteUser(req.body.title);
    return res.status(EHTTP_STATUSES.CREATED).json(createdCourse)
  });

  return router;
}


