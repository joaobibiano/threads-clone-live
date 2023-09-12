import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NewPost } from "./new-post";
import { Button } from "@/components/ui/button";

export default function HomePost() {
  return (
    <div className="flex justify-between mx-3 items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <NewPost />

      <Button
        disabled
        variant="outline"
        className="rounded-xl text-neutral-500"
      >
        Post
      </Button>
    </div>
  );
}
