const { Schema, model } = require('mongoose')

const { modelNames, schemaOptions } = require('./model-config')

const author = {
  type: String,
  required: true,

  minlength: 1,
  maxlength: 128
}

const title = {
  type: String,
  required: true,

  minlength: 1,
  maxlength: 256
}

const year = {
  type: {},
  default: undefined,

  validate: {
    validator: (year) => Number.isInteger(Number(year)) || year === undefined,
    message: 'Year must be an integer, or undefined'
  }
}

const isActive = {
  type: Boolean,
  default: false
}

const song = {
  author,
  title,
  year,
  isActive
}

const songSchema = new Schema(song, schemaOptions)
const Song = model(modelNames.song, songSchema)

module.exports = Song
