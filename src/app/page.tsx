import Image from "next/image";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" type="text" placeholder="Enter your name" />
        <Textarea name="message" placeholder="Enter your message" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
