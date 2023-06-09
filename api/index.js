import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';
import cors from 'cors';

const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
