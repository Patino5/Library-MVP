const express = require('express')
const {Pool} = require('pg')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const dbString = process.env.DATABASE_URL
const PORT = process.env.PORT

const pool = new Pool ({
    connectionString: dbString
})

const app = express()

// middleware
app.use(express.cors())
app.use(express.json())
app.use(express.static('public'))


// Listener
app.listen(process.env.PORT, () => {
    console.log(`Working on ${PORT}`);
})