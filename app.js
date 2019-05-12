const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

logger.info('Connecting to', config.PORT)


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => logger.info('Connected to MongoDB'))
  .catch(error => {
    logger.info('Error connecting to MongoDB:', error.message)
  })

app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)

app.use('/api/login', loginRouter)
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app