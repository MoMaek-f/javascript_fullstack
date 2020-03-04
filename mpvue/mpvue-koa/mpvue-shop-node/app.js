const koa = require('koa')
const Router =require('koa-router')
const config =require('./config')

const app = new koa()
const router = new Router()

router.get('/index',(ctx,next) => {
  ctx.body = 'Hello World'
})

app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is start at port ${config.port}`)
})