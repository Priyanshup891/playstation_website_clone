import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import Connection from './database/db.js';
import DefaultData from './default.js';
const app = express();

const mongoDbUrl = process.env.MONGO_URL;

Connection(mongoDbUrl);

app.listen(process.env.PORT, () => {
    console.log(`Server is Started Successfully at ${process.env.PORT}`);
});

DefaultData();