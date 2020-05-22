import { Application } from 'https://deno.land/x/oak/mod.ts'
const port = 5000
import router from './routes.ts'
const app = new Application()



app.use(router.routes())
app.use(router.allowedMethods())



console.log(`DENO RUNNING ON PORT ${port}`)

await app.listen({ port })