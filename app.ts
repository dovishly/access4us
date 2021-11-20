import express from 'express';
import places from './routes/places'

const app = express();
const port = 3000;

app.use('/', places);

app.listen(port, () => {
  console.log(`Access4Us is running on port ${port}.`);
});