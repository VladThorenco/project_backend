import { checkSchema } from "express-validator";

export const registrationValidation = checkSchema({
  email: {
    isEmail: true,
    errorMessage: "Email should me email address",
  },
  password: {
    isString: true,
    errorMessage: "Password should be string",
    isLength: {
      options: {min: 8, max: 50},
      errorMessage: "Password should be at min 8 and max 50 chars",
    },
  },
  remember: {
    isBoolean: true,
    optional: true,
    errorMessage: "Remember is not boolean",
  },
});
