import { PrismaClient } from './generated/client/deno/edge.ts'
import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts"

const env = await load()

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: env.DATABASE_URL
        }
    }
})

console.log(prisma)
