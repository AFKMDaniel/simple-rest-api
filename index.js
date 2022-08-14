require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 8080

const app = express();
const router = require('./routes/routes');

app.use(express.json())
app.use('/api',router);

app.listen(port,() => {
    console.log(`Сервер запущен на порту ${port}`)
})