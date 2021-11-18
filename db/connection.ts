import { MongoClient } from "mongodb";

require('dotenv').config()
const connectionString = process.env.DBCREDS;
const client = new MongoClient(connectionString)

export = client

