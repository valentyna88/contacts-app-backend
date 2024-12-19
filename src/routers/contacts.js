import { Router } from 'express';

import * as contactsController from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(contactsController.getContactsController));

contactsRouter.get(
  '/:contactId',
  ctrlWrapper(contactsController.getContactByIdController),
);

contactsRouter.post(
  '/',
  ctrlWrapper(contactsController.createContactController),
);

contactsRouter.patch(
  '/:contactId',
  ctrlWrapper(contactsController.patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  ctrlWrapper(contactsController.deleteContactController),
);

export default contactsRouter;
