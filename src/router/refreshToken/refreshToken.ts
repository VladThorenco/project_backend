import express from "express";
import { refreshTokenControllers } from "../../controllers/refreshToken/refreshToken";
import { refreshTokenValidation } from "../../models/token/validation";

export const getRefreshTokenRoutes = () => {
  const router = express.Router();

  router.post("/", refreshTokenValidation, refreshTokenControllers.refreshToken);
  router.delete("/", refreshTokenValidation, refreshTokenControllers.logout);

  return router;
}


