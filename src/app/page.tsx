import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div>
      Root Page <Button variant="ghost" type="submit">Click me</Button>
    </div>
  );
}
