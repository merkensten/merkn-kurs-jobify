// external imports
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRouter.js';
import jobsRouter from './routes/jobsRouter.js';

//middlewares
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// egna middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5050;

const start = async () => {
  try {
    const url = process.env.MONGO_DB_URL;

    await connectDB(url);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
