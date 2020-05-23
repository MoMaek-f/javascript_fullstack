const express = require('express')
const router = require('./router/index')
const app = express()

app.use('/',router)

const server = app.listen(3366,() => {
  const {address,port} = server.address()
  console.log("http server in runnning on htpp://%s:%s",address,port)
})
