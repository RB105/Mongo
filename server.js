const mongoose = require('mongoose');
const express = require('express');
const UserRouter = require('./routes/user_router');

const PORT = 4000;
const HOST = "172.20.10.4";

const app = express();

app.use(express.json());
app.use('/', UserRouter);

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/users');

mongoose.connection.on('open', () => {
    console.log('MongoDB activated!!!');
});

mongoose.connection.on('error', () => {
    console.log('MongoDB failed');
});

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
})