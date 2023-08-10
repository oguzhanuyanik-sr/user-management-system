import express from 'express';
import usersRouter from './routes/users.js';
import cors from 'cors';

const port = 5000;
const app = express();

app.use(
  cors({
    origin: 'https://user-management-client1.vercel.app',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
  })
);

app.options('*', cors());
app.use(express.json());

app.use('/', usersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
