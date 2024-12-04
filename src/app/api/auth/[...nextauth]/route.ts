import { db } from "@/server/db/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth/next"
import GitlabProvider from "next-auth/providers/gitlab"
import { adapter } from "next/dist/server/web/adapter"

export const authOptions = {
    adapter: DrizzleAdapter(db),
    providers: [
        GitlabProvider({
            clientId: "",
            clientSecret: "gloas-xxxx",
        })
    ],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }