// Import Dependencies

require("dotenv").config()
const {PORT, NODE_ENV} = process.env
const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const corsOptions = require("./config/cors")


// middleware

app.use(NODE_ENV === 'production' ? cors(corsOptions) : cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('public'))

// Routes

app.get('/', (req, res) => {
    res.send('hello world')
})

// Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})