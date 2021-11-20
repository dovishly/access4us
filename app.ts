import express from 'express';
require('dotenv').config()

const app = express();
const port = 3000;
const key = process.env.GOOGLE_API_KEY

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${key}.`);
});