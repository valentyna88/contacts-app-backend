import Joi from 'joi';
import { typeList } from '../constants/contacts.js';

export const contactCreateSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.number().integer().min(6).required(),
  email: Joi.string().min(3).max(20).required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...typeList),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number().integer().min(6),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...typeList),
});
