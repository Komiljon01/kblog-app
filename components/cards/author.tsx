import { IAuthor } from "@/types";
import Image from "next/image";
import Link from "next/link";

function AuthorCard(author: IAuthor) {
  return (
    <Link
      href={`/author/${author.id}`}
      className="flex w-52 flex-col space-y-2 text-center"
    >
      <div className="relative h-52 w-full">
        <Image
          src={author.image.url}
          alt={author.name}
          fill
          className="rounded-md object-cover grayscale transition-all hover:grayscale-0"
        />
      </div>
      <h2 className="font-creteRound text-2xl">{author.name}</h2>
      <p className="text-muted-foreground">
        <span className="font-bold text-white">{author.blogs.length}</span>{" "}
        Published posts
      </p>
    </Link>
  );
}

export default AuthorCard;
