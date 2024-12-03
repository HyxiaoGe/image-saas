import Image from "next/image";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { db } from "@/server/db/db";
import { Users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {

  // const users = await db.query.Users.findMany();
  const users = await db.select().from(Users).where(eq(Users.name, "Sean"));

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" type="text" placeholder="Enter your name" />
        <Textarea name="message" placeholder="Enter your message" />
        <Button type="submit">Submit</Button>
      </form>
      {
        users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))
      }
    </div>
  );
}
