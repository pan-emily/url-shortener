import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
dotenv.config({path: '.config/.env'});

const app = express();
// Connect to DB 
connectDB();

import urlsRouter from './routes/urls.js';
import indexRouter from './routes/index.js'

// Parse body 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

// Server Setup 
const PORT = 3333;
// starts UNIX socket on PORT 
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});