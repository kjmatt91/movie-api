const express = require('express')
const { getAllMovies, getMovieByDirector, getMovieByTitle } = require('./controllers/movies')

const app = express()
const port = 8000

app.get('/', getAllMovies)

app.get('/:movieName', getMovieByDirector)

app.get('/:titleName', getMovieByTitle)

app.listen(port, () => {
  console.log('Listening on port ' + port) // eslint-disable-line no-console
})
