import { checkSchema } from 'express-validator';

export const refreshTokenValidation = checkSchema({
  refreshToken: {
    isString: true,
    errorMessage: 'Refresh token should string',
  },
});
