"use client";

import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import Link from "next/link";
import GlobalSearch from "./global-search";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Mobile from "./mobile";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-40 h-[10vh] border-b bg-background backdrop-blur-sm">
      <div className="container mx-auto flex h-[10vh] w-full max-w-6xl items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="font-creteRound text-4xl">KBlog</h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden gap-2 md:flex">
          {navLinks.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                "cursor-pointer rounded-sm px-3 py-1 transition-colors hover:bg-blue-400/20",
                pathname === nav.route && "text-blue-400",
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-1">
          <GlobalSearch />
          <ModeToggle />
          <Mobile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
