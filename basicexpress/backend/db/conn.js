require('dotenv').config()
const {MONGODBURI} = process.env
const mongoose = require('mongoose')
const config = {useNewUrlParser: true, useUnifiedTopology: true}

// connect to mongo
mongoose.connect(MONGODBURI, config)

// events
mongoose.connection
.on('open', () => console.log('you are connected to mongo'))
.on('close', () => console.log('you are disconnected to mongo'))
.on('error', () => console.log(error))

module.exports= mongoose