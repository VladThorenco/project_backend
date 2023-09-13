import { checkSchema } from "express-validator";

export const loginValidation = checkSchema({
  login: {
    isString: true,
    errorMessage: "Invalid login",
  },
  password: {
    isString: true,
    isLength: {
      options: {min: 8, max: 50},
      errorMessage: "Password should be at min 8 and max 50 chars",
    },
  },
});
