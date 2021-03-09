require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const MOVIEDEX = require('./moviedex.json')

console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

app.get('/movie', function handleGetMovies(req, res) {
    let response = MOVIEDEX
    res.json(response)
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})