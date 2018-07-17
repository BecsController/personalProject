const server = require('./server')
require('dotenv').config()
const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Listening on port', port)
})
