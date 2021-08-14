const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByDirector, getMovieByTitle, saveNewMovie } = require('./controllers/movies')

const app = express()
const port = 8000

app.get('/', getAllMovies)

app.get('/:movieName', getMovieByDirector)

app.get('/movies/:title', getMovieByTitle)

app.post('/', bodyParser.json(), saveNewMovie)

app.listen(port, () => {
  console.log('Listening on port ' + port) // eslint-disable-line no-console
})
