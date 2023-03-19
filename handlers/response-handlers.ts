import { RouteParams, RouterContext } from "https://deno.land/x/oak@v11.1.0/router.ts"

type Context = RouterContext<string, RouteParams<any>, any>

export const createResponse = (ctx: any, data: any) => {
    if (data) {
        ctx.response.body = {
            message: 'success',
            data
        }
    } else {
        ctx.response.status = 500
        ctx.response.body = {
            message: 'something went wrong'
        }
    }
}

export const createPutResponse = (ctx: Context, data: any) => {
    if (data) {
        ctx.response.body = {
            message: 'success'
        }
    } else {
        ctx.response.status = 500
        ctx.response.body = {
            message: 'something went wrong'
        }
    }
}
