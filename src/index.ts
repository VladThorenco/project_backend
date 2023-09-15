import { app, pathDataBase, port } from "./app";
import mongoose from "mongoose";

const connectDataBase = async () => {
  try {
    await mongoose.connect(pathDataBase)
  } catch (error) {
    console.log("===> Connected Mongoose Error <===", error)
  }
}
connectDataBase();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
