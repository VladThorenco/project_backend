import mongoose from "mongoose";
import express from "express";
import { getAuthRoutes, getMoviesRoutes } from "./router";

require("dotenv").config()

export const app = express()
export const port = process.env.PORT || 3000
const URL_DB = "mongodb://localhost:27017/englishBox"

export const connectToDataBase = async () => {
  try {
    await mongoose.connect(URL_DB)
  } catch (error) {
    console.log("===> DB connection error <===", error);
  }
}

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware);

app.use("/api/auth", getAuthRoutes())
app.use("/api/movies", getMoviesRoutes())

