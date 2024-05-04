import Koa from "koa"
import router from "@/router/index"
const app = new Koa()



app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
