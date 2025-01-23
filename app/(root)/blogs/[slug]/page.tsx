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

function SlugPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto max-w-5xl pt-[15vh]">
      <h1 className="font-creteRound text-4xl md:text-5xl lg:text-6xl">
        The AGI hype train is running out of steam
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 max-md:justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={"/author/thomas-macaulay.jpg"}
            alt="author"
            width={30}
            height={30}
            className="rounded-sm object-cover"
          />
          <p>by Komiljon</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <p>01 min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          <p>Dec 5, 2024</p>
        </div>
      </div>

      <Image
        src={"/blogs/02.jpg"}
        alt="alt"
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
        <div className="prose dark:prose-invert flex-1">{parse(content)}</div>
      </div>

      <div className="mt-6 flex items-center gap-6 max-md:flex-col">
        <Image
          src={"/author/chris-impey.jpg"}
          alt="author"
          width="155"
          height="155"
          className="rounded-md max-md:self-start"
        />
        <div className="flex flex-1 flex-col space-y-4">
          <h2 className="font-creteRound text-3xl">Thomas Macaulay</h2>
          <p className="line-clamp-2 text-muted-foreground">
            Thomas Macaulay is a writer based in New York City. He is interested
            in all things tech, science, and photography related, and likes to
            yo-yo in
          </p>
          <Link
            href={"/"}
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
