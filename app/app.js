require('dotenv').config()

const express = require('express')
const morgan = require('morgan')

const db = require('./database/db')
const songRouter = require('./mcr/routes/song-router')

db.initialize()
const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/songs', songRouter)

module.exports = app
