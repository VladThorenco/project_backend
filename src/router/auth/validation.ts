import { checkSchema } from "express-validator";

export const loginValidation = checkSchema({
  login: {
    isString: true,
    errorMessage: "Invalid username",
    isEmail: true,
  },
  password: {
    isLength: {
      options: {min: 8},
      errorMessage: "Password should be at least 8 chars",
    },
  },
});
