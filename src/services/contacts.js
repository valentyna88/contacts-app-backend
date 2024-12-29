import { ContactsCollection } from '../db/models/contact.js';

import { calcPaginationData } from '../utils/calcPaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = 'asc',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * limit;

  const query = ContactsCollection.find();

  if (filter.contactType) {
    query.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite !== undefined) {
    query.where('isFavourite').equals(filter.isFavourite);
  }
  if (filter.userId) {
    query.where('userId').equals(filter.userId);
  }

  const totalItems = await ContactsCollection.find()
    .merge(query)
    .countDocuments();

  const data = await query
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calcPaginationData({ totalItems, page, perPage });

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

export const getContact = (filter) => ContactsCollection.findOne(filter);

export const createContact = (payload) => ContactsCollection.create(payload);

export const updateContact = async (filter, payload, options = {}) => {
  const { upsert = false } = options;
  const result = await ContactsCollection.findOneAndUpdate(filter, payload, {
    upsert,
    includeResultMetadata: true,
  });

  if (!result || !result.value) return null;

  const isNew = Boolean(result.lastErrorObject.upserted);

  return {
    isNew,
    data: result.value,
  };
};

export const deleteContact = (filter) =>
  ContactsCollection.findOneAndDelete(filter);
