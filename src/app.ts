import { getCoursesRoutes } from "./router/courses/courses";
import express from "express";
import { db } from "./db";
import { getAuthRoutes } from "./router/auth/auth";

require('dotenv').config()

export const app = express()
export const port = process.env.PORT || 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware);

app.use('/api/courses', getCoursesRoutes(db))
app.use('/api/auth', getAuthRoutes())

