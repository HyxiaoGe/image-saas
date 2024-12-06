import { httpBatchLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "./trpc"

export const trpcClientReact = createTRPCReact<AppRouter>()

export const trpcClient = trpcClientReact.createClient({
    links: [httpBatchLink({ url: '/api/trpc' })]
})