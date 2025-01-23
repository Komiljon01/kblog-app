import { Archive, Dot, Home } from "lucide-react";
import Link from "next/link";

function ArchivePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[40vh] flex-col items-center justify-end">
        <p className="text-lg text-muted-foreground">Showing posts from</p>
        <h2 className="section-title mt-2 text-center font-creteRound text-4xl">
          <span>Archive</span>
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
          <Link
            href={"/blogs"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Blogs
          </Link>
          <Dot />
          <p className="text-muted-foreground">Archive</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col space-y-3">
        <div className="relative">
          <span className="relative z-20 font-creteRound text-5xl">2024</span>
          <Archive className="absolute h-16 w-16 -translate-x-4 -translate-y-12 opacity-10" />
        </div>
      </div>

      <div className="mt-8 flex flex-col space-y-2">
        <div className="flex gap-2 text-lg text-muted-foreground">
          <p>05 Dec</p>
          <Dot className="h-8 w-8 text-white" />
          <div className="cursor-pointer hover:text-white hover:underline">
            The AGI hype train is running out of steam
          </div>
        </div>
        <div className="flex gap-2 text-lg text-muted-foreground">
          <p>05 Dec</p>
          <Dot className="h-8 w-8 text-white" />
          <div className="cursor-pointer hover:text-white hover:underline">
            The AGI hype train is running out of steam
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchivePage;
