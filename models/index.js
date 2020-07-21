import mongoose from 'mongoose';
import podcastModel from './podcastModel.js';
import dotenv from 'dotenv';

dotenv.config();

const { DB_CONNECTION } = process.env;

const db = {};

db.mongoose = mongoose;
db.url = DB_CONNECTION;
db.podcast = podcastModel(mongoose);

export { db };
