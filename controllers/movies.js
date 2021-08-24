/* eslint-disable no-console */
const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByDirector = (request, response) => {
  console.log('directors', request.params.directors)
  const directorFound = request.params.directors.toLowerCase()

  let foundMovie = movies.filter((movie) => movie.directors.some(director => {
    return director.toLowerCase().includes(directorFound)
  }))

  console.log(directorFound)
  console.log(foundMovie)

  return response.send(foundMovie)
}

const getMovieByTitle = (request, response) => {
  console.log(request.params.title)
  const query = request.params.title.toLowerCase()

  const foundTitle = movies.filter(movie => movie.title.toLowerCase().includes(query))

  return response.send(foundTitle)
}

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('Missing some required fields.')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMovieByDirector, getMovieByTitle, saveNewMovie }
