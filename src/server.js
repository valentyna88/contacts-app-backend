import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';

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

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  });

  const port = Number(getEnvVar('PORT', 3000));

  app.listen(port, () => {
    console.log(`Server is running on ${port} port `);
  });
};
