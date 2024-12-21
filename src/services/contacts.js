import { ContactsCollection } from '../db/models/contact.js';

import { calcPaginationdata } from '../utils/calcPaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = 'asc',
}) => {
  const limit = perPage;
  const skip = (page - 1) * limit;
  const data = await ContactsCollection.find()
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder });
  const totalItems = await ContactsCollection.countDocuments();

  const paginationData = calcPaginationdata({ totalItems, page, perPage });

  return {
    data,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};

export const getContactById = (contactId) =>
  ContactsCollection.findById(contactId);

export const createContact = (payload) => ContactsCollection.create(payload);

export const updateContact = async (contactId, payload, options = {}) => {
  const { upsert = false } = options;
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      upsert,
      includeResultMetadata: true,
    },
  );

  if (!result || !result.value) return null;

  const isNew = Boolean(result.lastErrorObject.upserted);

  return {
    isNew,
    data: result.value,
  };
};

export const deleteContact = (filter) =>
  ContactsCollection.findOneAndDelete(filter);
