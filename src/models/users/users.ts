import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  rememberMe: {
    type: Boolean,
    require: false
  },
})

export const User = model('User', UserSchema);


