import { appRouter, createTRPCContextAsync } from '@/utils/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

const handler = (request: NextRequest) => {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req: request,
        router: appRouter,
        createContext: createTRPCContextAsync
    })
}

export { handler as GET, handler as POST }
