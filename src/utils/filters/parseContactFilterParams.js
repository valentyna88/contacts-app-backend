import { typeList } from '../../constants/contacts.js';

const parseType = (contactType) => {
  if (typeof contactType !== 'string') return;

  if (typeList.includes(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite === 'boolean') {
    return isFavourite;
  }
  if (typeof isFavourite === 'string') {
    return isFavourite.toLowerCase() === 'true';
  }
  return;
};

export const parseContactFilterParams = (query) => {
  const { isFavourite, type } = query;
  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
