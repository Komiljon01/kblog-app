import { cn } from "@/lib/utils";
import { IBlog } from "@/types";
import { CalendarDays, Clock, Dot, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props extends IBlog {
  isVertical?: boolean;
}

function BlogCard(blog: Props) {
  return (
    <Link
      href={"/"}
      className={cn(
        "group grid gap-4",
        blog.isVertical ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2",
      )}
    >
      <div className="relative rounded-md bg-secondary">
        <Image
          width={650}
          height={335}
          src={blog.image}
          alt={blog.title}
          className="-translate-y-6 rounded-md object-cover px-2 grayscale transition-all group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7"
        />
      </div>
      <div className="flex flex-col space-y-4">
        {/* Time info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            <p>{blog.date}</p>
          </div>
          <Minus />
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <p>01 min read</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-creteRound text-3xl transition-colors group-hover:text-blue-500 max-md:text-2xl">
          {blog.title}
        </h2>
        <p className="line-clamp-3 text-muted-foreground">{blog.description}</p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={"/author/chris-impey.jpg"}
              alt="author"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <p>by {blog.author}</p>
          </div>
          <Dot />
          <div className="flex items-center gap-2">
            <Badge variant={"secondary"}>Machine learning</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
