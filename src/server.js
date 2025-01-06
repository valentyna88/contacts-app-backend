import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { UPLOAD_DIR } from './constants/index.js';

// import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

import authRouter from './routers/auth.js';
import contactsRouter from './routers/contacts.js';

import { env } from './utils/env.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  // app.use(logger);
  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome!',
    });
  });
  app.use('/auth', authRouter);
  app.use('/contacts', contactsRouter);
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use(notFoundHandler);

  app.use(errorHandler);

  const port = Number(env('PORT', 3000));

  app.listen(port, () => {
    console.log(`Server is running on ${port} port `);
  });
};
