import createHttpError from 'http-errors';
import { contactCreateSchema } from '../validation/contacts.js';

export const validateBody = (schema) => {
  const func = async (req, res, next) => {
    try {
      await contactCreateSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      next(createHttpError(400, error.message));
    }
  };
  return func;
};
