// let http = require('http')

// let server = http.createServer((req, res) => {
//   let path = req.url
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('服务跑起来了')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world!!!'
// })

// app.listen(3000)


let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx,next) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.response.url)
  // console.log(ctx.url)
  // console.log(ctx.path)
  ctx.body = {
    name: 'wn',
    age: 19
  }
  next()
  console.log(ctx.body)
}),

app.use((ctx,next) => {
  console.log(1)
  next()
})

app.listen(3000)

