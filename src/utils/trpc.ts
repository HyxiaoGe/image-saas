import { initTRPC, TRPCError } from '@trpc/server'
import { createCallerFactory } from '@trpc/server/unstable-core-do-not-import'
import { getServerSession } from 'next-auth'

export async function createTRPCContextAsync () {
    const session = await getServerSession()
            
            if (session?.user) {
                throw new TRPCError({ code: 'FORBIDDEN' })
            }
            return {
                session
            }
}

const t = initTRPC.context<typeof createTRPCContextAsync>().create()

const { router, procedure } = t

const middleware = t.middleware(async ({ ctx, next }) => {
    const start = Date.now()
    const result = await next()

    return result
})

const checkLoginMiddleware = t.middleware(async ({ ctx, next }) => {
    if (!ctx.session?.user) {
        throw new TRPCError({ code: 'FORBIDDEN' })
    }
    return next()
})

const protectedProcedure = procedure.use(middleware)

export const appRouter = router({
    hello: protectedProcedure.query(async ({ ctx }) => {
        return {
            hello: 'world'
        }
    })
})

export type AppRouter = typeof appRouter

export const serverCaller = createCallerFactory()(appRouter)