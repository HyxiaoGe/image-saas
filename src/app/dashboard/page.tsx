import { createTRPCContextAsync } from "@/utils/trpc";
import { serverCaller } from "@/utils/trpc";

export default async function Home() {
  const context = await createTRPCContextAsync()
  const caller = serverCaller(context)

  const hello = await caller.hello()

    return (
    <div className="flex items-center justify-center h-screen">
      Dashboard {hello.hello}
    </div>
  );
}
  