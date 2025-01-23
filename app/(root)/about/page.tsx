import AuthorCard from "@/components/cards/author";
import { authors } from "@/constants";
import { Dot, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[40vh] flex-col items-center justify-center">
        <h2 className="section-title text-center font-creteRound text-4xl">
          <span>About</span>
        </h2>

        <div className="mt-4 flex items-center gap-1">
          <Home className="h-4 w-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">About</p>
        </div>
      </div>
      <h1 className="text-center font-creteRound text-4xl">
        We are the KBlog, <br /> Team of content writers and designers.
      </h1>

      <div className="mt-6 grid min-h-96 grid-cols-4 gap-4">
        <div className="relative col-span-2 h-80 max-md:col-span-4">
          <Image
            src={"/about/01.jpg"}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative h-80 self-end max-md:col-span-2 max-md:h-72">
          <Image
            src={"/about/00.jpg"}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72">
          <Image
            src={"/about/02.jpg"}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col space-y-4 text-center text-muted-foreground">
        <p>
          If ever a place existed where you could just go crazy creatively, it
          is definitely your about page. It’s your chance to show your readers
          who you really are. Pictures, quotes, inspirational graphics, whatever
          it is that drives you.. Display it here in a way that only you can.
        </p>
        <p>
          I’ve included a plugin in the setup of this theme that will make
          adding columns to your pages and posts a piece of cake. Let creativity
          take control, and forget about the technical end of things, I’ve got
          your six.
        </p>
      </div>

      <h2 className="section-title my-12 text-center font-creteRound text-4xl">
        <span>Our writers</span>
      </h2>

      <div className="flex justify-around max-md:flex-col max-md:items-center max-md:space-y-4">
        {authors.map((author) => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
