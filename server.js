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



// Get all books
app.get('api/books', async (req, res) => {
    try {
        const { rows } = await pool.query(`SELECT * FROM books;`)
        res.send({rows}).status(200)
    } catch {
        console.error(error.message)
        res.status(500).json({error: error.message})    }
})

// Get one book 
app.get('api/books/:id', async (req, res) => {
    try{
        const { id } = req.params
        const { rows } = await pool.query(`SELECT * FROM books WHERE id = ${id}`)

        if(rows.length === 1) {
            res.send({rows}).status(200)
        } else {
            res.send('Not Found').status(404)
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
})

// Create one 

// Update one 

// Delete one 

// Listener
app.listen(process.env.PORT, () => {
    console.log(`Working on ${PORT}`);
})