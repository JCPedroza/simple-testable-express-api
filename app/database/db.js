const { connect } = require('mongoose')

const { dbOptions } = require('./db-config')

const initialize = () => {
  const { DBURL } = process.env
  const logFun = () => console.log(`DB connected to ${DBURL}`)
  connect(DBURL, dbOptions, logFun)
}

module.exports = {
  initialize
}
