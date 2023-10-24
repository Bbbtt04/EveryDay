const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

app.use(async (ctx) => {
  console.log("ctx", ctx.request, ctx.response)
  const content = await fs.promises.readFile(path.resolve(__dirname, 'index.html'))
  console.log('content', content.toString())
  ctx.response.set('Content-Type', 'text/html')
  ctx.response.body = content
})

app.listen(5173, () => {
  console.log("vite dev serve listen on 5173");
})
