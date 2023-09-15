import express, { Request, Response } from "express";
import { EHTTP_STATUSES } from "../../constans";
import { authControllers } from "../../controllers";
import { loginValidation } from "./validation";
import { validationMiddleware } from "../../middleware/validation";


export const getAuthRoutes = () => {
  const router = express.Router();

  router.post("/registration", loginValidation, validationMiddleware, (req: Request, res: Response) => {
    const createdCourse = authControllers.creteUser(req.body.login, req.body.password);
    return res.status(EHTTP_STATUSES.CREATED).json(createdCourse)
  });

  router.post("/authorization", loginValidation, validationMiddleware, (req: Request, res: Response) => {
    const createdCourse = authControllers.checkUser(req.body.login, req.body.password);
    return res.status(EHTTP_STATUSES.CREATED).json(createdCourse)
  });

  router.get("/auth-me", loginValidation, validationMiddleware, (req: Request, res: Response) => {
    const createdCourse = authControllers.creteUser(req.body.login, req.body.password);
    return res.status(EHTTP_STATUSES.CREATED).json(createdCourse)
  });

  return router;
}


