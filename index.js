const express = require('espress')
const { getAllMovies } = require('./controllers/movies')

const app = express()
const port = 7500

app.get('/', getAllMovies)

app.listen(port, () => {
  console.log('Listening on port ' + port) // eslint-disable-line no-console
})
