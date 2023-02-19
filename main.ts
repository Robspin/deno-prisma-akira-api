import { PrismaClient } from './generated/client/deno/edge.ts'
import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts"
import { running } from "./handlers/running-art.ts"
import { createGetResponse } from "./handlers/response-handlers.ts"

const env = await load()

const prisma = new PrismaClient({ datasources: { db: { url: env.DATABASE_URL } }})

const app = new Application()
const router = new Router()

router.get('/', ctx => ctx.response.body = running)

router.get('/pageviews', async (ctx) => {
    const data = await prisma.pageViews.findMany()
    createGetResponse(ctx, data)
})

router.get('/pageviews/:pageKey', async (ctx) => {
    const { pageKey } = ctx.params
    const pageView = await prisma.pageViews.findUnique({ where: { pageKey }})
    createGetResponse(ctx, pageView)
})

router.put('/pageviews/:pageKey', async (ctx) => {
    const { pageKey } = ctx.params
    const pageView = await prisma.pageViews.update({
        where: { pageKey },
        data: { views: { increment: 1 } }
    })
    createGetResponse(ctx, pageView)
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 3000 })
