import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx: Koa.Context) => {
  ctx.body = 'Hello, World!'
})

app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})