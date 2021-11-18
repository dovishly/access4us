import express from 'express';
import places from './routes/places'
import bodyParser from 'body-parser';
import client from './db/connection'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

client.connect()
.then(r => {
  console.log("SUCCESS DB CONNECT")
})
.catch(e => {
  console.log("FAILED CONNECTION")
})

app.use('/', places);

app.listen(port, () => {
  console.log(`Access4Us is running on port ${port}.`);
});
