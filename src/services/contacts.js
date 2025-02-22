import { ContactsCollection } from '../db/models/contact.js';

import { calcPaginationData } from '../utils/calcPaginationData.js';

export const getAllContacts = async (
  userId,
  { page = 1, perPage = 10, sortBy = 'name', sortOrder = 'asc', filter = {} },
) => {
  const limit = perPage;
  const skip = (page - 1) * limit;

  const query = ContactsCollection.find({ userId });

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

export const getContactById = (contactId, userId) =>
  ContactsCollection.findOne({ _id: contactId, userId });

export const getContact = (filter) => ContactsCollection.findOne(filter);

export const createContact = (userId, payload) =>
  ContactsCollection.create({
    userId,
    ...payload,
  });

export const updateContact = async (
  contactId,
  userId,
  payload,
  options = {},
) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!result || !result.value) return null;

  return result.value;
};

export const deleteContact = (filter) =>
  ContactsCollection.findOneAndDelete(filter);
