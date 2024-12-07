import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import contactsRouter from './routers/contacts.js';

import { env } from './utils/env.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome!',
    });
  });

  app.use(contactsRouter);

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  });

  const port = Number(env('PORT', 3000));

  app.listen(port, () => {
    console.log(`Server is running on ${port} port `);
  });
};
