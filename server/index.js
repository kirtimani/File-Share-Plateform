import express from 'express';
import route from '../client/src/services/routes/route.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();
app.use(cors());
app.use('/', route);


const PORT = 8000;
DBConnection();



app.listen(PORT, () => console.log(`server is running on Port ${PORT}`))