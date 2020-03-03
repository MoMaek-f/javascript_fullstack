const koa = require('koa')
const Router =require('koa-router')

const app = new koa()
const router = new Router()

router.get('*',(ctx,next) => {
  ctx.body = 'Hello World'
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is start at port 3000')
})