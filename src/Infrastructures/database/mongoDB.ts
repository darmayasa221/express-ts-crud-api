/**  */
import { config } from 'dotenv';
config();
import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI as string);
const database = client.db('myFirstDatabase');
export default database;