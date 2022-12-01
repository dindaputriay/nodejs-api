//(1)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

//(3) koneksi ke mongodp
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true})
let dp = mongoose.connection

//jika error
dp.on('error', console.error.bind(console,'Error establishing a database connection'))

//jika succes
dp.once('open', () => {
    console.log('Database is connected');
})

//(2) listen pbrt
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}`);
    console.log(`Server running on ${process.env.PORT}`);
    console.log(`Server running on ${process.env.PORT}`);
})
