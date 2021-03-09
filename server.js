const express = require('express')
const morgan = require('morgan')
const MOVIEDEX = require('./moviedex.json')

const app = express()

app.use(morgan('dev'))

app.get('/movie', function handleGetMovies(req, res) {
    let response = MOVIEDEX.movie
    console.log(response)
    res.json(response)
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})