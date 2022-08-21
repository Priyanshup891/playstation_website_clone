import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from 'body-parser';
dotenv.config()
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

const mongoDbUrl = process.env.MONGO_URL;

Connection(mongoDbUrl);

app.listen(process.env.PORT, () => {
    console.log(`Server is Started Successfully at ${process.env.PORT}`);
});

DefaultData();