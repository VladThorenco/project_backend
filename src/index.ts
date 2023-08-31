import express, { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config()

const app = express()
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("express")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
