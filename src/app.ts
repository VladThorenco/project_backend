import { getCoursesRoutes } from "./router/courses/courses";
import express from "express";
import { db } from "./db";

require('dotenv').config()

export const app = express()
export const port = process.env.PORT || 3000

// middleware call before action handler
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware);

app.use('/courses', getCoursesRoutes(db))

