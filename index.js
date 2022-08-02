require('dotenv').config();
const express = require('express');
const {apiRouter, authRouter} = require('./routes/routes');
const db = require("./db");
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use('/api', apiRouter);
app.use('/auth', authRouter);

const start = () => {
    try {
        app.listen(PORT, ()=>{console.log(`server started on port ${PORT}`)});
    } 
    catch (error) {
        console.log(error)
        db.end();
    }
}

start();