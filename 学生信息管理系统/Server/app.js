const Koa = require('koa')
const config = require('./config')

const cors = require('koa2-cors')

const body = require('koa-body')
const app = new Koa()

const router = require('./router')
app.use(body())
app.use(cors());
app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is running at port ${config.port}`)
})