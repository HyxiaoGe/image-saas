import { db } from "@/server/db/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { AuthOptions, getServerSession as nextAuthGetServerSession } from "next-auth"
import GitlabProvider from "next-auth/providers/gitlab"

export const authOptions: AuthOptions = {
    adapter: DrizzleAdapter(db),
    providers: [
        GitlabProvider({
            clientId: "",
            clientSecret: "gloas-xxx",
        })
    ],
}

export function getServerSession() {
    return nextAuthGetServerSession(authOptions)
}