import { model, Schema } from 'mongoose';

import { handleSaveError, setUpdateSettings } from './hooks.js';

import { typeList } from '../../constants/contacts.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: typeList,
      default: 'personal',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

contactSchema.post('save', handleSaveError);

contactSchema.pre('findOneAndUpdate', setUpdateSettings);

contactSchema.post('findOneAndUpdate', handleSaveError);

export const ContactsCollection = model('contacts', contactSchema);
