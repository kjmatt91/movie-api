const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByDirector, getMovieByTitle, saveNewMovie } = require('./controllers/movies')

const app = express()
const port = 8000

app.get('/movies', getAllMovies)

app.get('/movies/:title', getMovieByTitle ? getMovieByTitle : getMovieByDirector)

app.get('/movies/directors/:directors', getMovieByDirector)

app.post('/movies', bodyParser.json(), saveNewMovie)

app.listen(port, () => {
  console.log('Listening on port ' + port) // eslint-disable-line no-console
})
