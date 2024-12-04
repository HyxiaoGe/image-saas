"use client"

import { useSession, SessionProvider as NextAuthProvider } from "next-auth/react"

export default function UserInfo() {
    const { data: session } = useSession()
    return <div>{session?.user?.name}</div>
}

export function SessionProvider(props: any) {
    return <NextAuthProvider {...props} />
}