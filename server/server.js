const http = require('http')

const app = require('../app/app')

const server = http.createServer(app)
const PORT = parseInt(process.env.PORT) || 8000
const logFun = () => console.log(`Server listening to port ${PORT}`)

const initialize = () => server.listen(PORT, logFun)

module.exports = {
  initialize
}
