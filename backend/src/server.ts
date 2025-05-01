import express from 'express';
import cors, { CorsOptions } from 'cors';
import router from './routers/index.router';
import notFoundHandler from './middlewares/notFoundHandler';
import errorHandler from './middlewares/errorHandler';

const corsConfig: CorsOptions = {
  origin: (origin, cb) => {
    const allowedOrigins = ['http://localhost:3000'];
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.use('/api/meals', router);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
