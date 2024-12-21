import { typeList } from '../../constants/contacts.js';

const parseType = (type) => {
  if (typeof type !== 'string') return;

  if (typeList.includes(type)) return type;
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

export const parseContactFilterParams = ({ type, isFavourite }) => {
  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
