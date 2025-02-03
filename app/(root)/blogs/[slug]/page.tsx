import { Button } from "@/components/ui/button";
import { content } from "@/constants";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Facebook,
  Link2,
  Linkedin,
  Minus,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { getDetailedBlog } from "@/service/blog.service";
import { getReadingTime } from "@/lib/utils";
import { format } from "date-fns";

async function SlugPage({ params }: { params: { slug: string } }) {
  const blog = await getDetailedBlog(params.slug);

  return (
    <div className="mx-auto max-w-5xl pt-[15vh]">
      <h1 className="font-creteRound text-4xl md:text-5xl lg:text-6xl">
        {blog.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 max-md:justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={blog.author.image.url}
            alt="author"
            width={30}
            height={30}
            className="rounded-sm object-cover"
          />
          <p>by {blog.author.name}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <p>{getReadingTime(blog.content.html)} min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          <p>{format(new Date(blog.createdAt), "MMM dd, yyy")}</p>
        </div>
      </div>

      <Image
        src={blog.image.url}
        alt={blog.title}
        width={`1120`}
        height={`595`}
        className="mt-4 rounded-md"
      />

      <div className="relative mt-12 flex max-md:flex-col-reverse md:gap-12">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground">Share</p>
            <div className="mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3">
              <Button size={"icon"} variant={"outline"}>
                <Twitter />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Facebook />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Linkedin />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Send />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Link2 />
              </Button>
            </div>
          </div>
        </div>
        <div className="prose flex-1 dark:prose-invert">
          {parse(blog.content.html)}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6 max-md:flex-col">
        <Image
          src={blog.author.image.url}
          alt={blog.author.name}
          width="155"
          height="155"
          className="rounded-md max-md:self-start"
        />
        <div className="flex flex-1 flex-col space-y-4">
          <h2 className="font-creteRound text-3xl">{blog.author.name}</h2>
          <p className="line-clamp-2 text-muted-foreground">
            {blog.author.bio}
          </p>
          <Link
            href={`/author/${blog.author.id}`}
            className="flex items-center gap-2 underline transition-colors hover:text-blue-500"
          >
            <span>See all posts by this author</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlugPage;
