import express from "express";
require("dotenv").config()

import { getAuthRoutes, getMoviesRoutes } from "./router";

export const app = express()
export const port = process.env.PORT || 3000
export const pathDataBase = process.env.PATH_DATA_BASE || 'PATH_DATA_BASE';

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware);

app.use("/api/auth", getAuthRoutes())
app.use("/api/movies", getMoviesRoutes())

