// server.js
import { Express } from 'express'
const jsonServer = require('json-server')
const server = jsonServer.create()
const cors = require('cors')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(cors())
server.listen(3000 || process.env.PORT, () => {
  console.log('JSON Server is running')
  console.log(router)
})
module.exports = server;
