const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByDirector = (request, response) => {
  const { movieName } = request.params

  const foundMovie = movies.filter((movie) => movie.directors === movieName)

  return response.send(foundMovie)
}

const getMovieByTitle = (request, response) => {
  const { titleName } = request.params

  const foundTitle = movies.filter((movie) => movie.title === titleName)

  return response.send(foundTitle)
}

module.exports = { getAllMovies, getMovieByDirector, getMovieByTitle }
