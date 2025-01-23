import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Mobile() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link href="/">
          <h1 className="font-creteRound text-4xl">KBlog</h1>
        </Link>
        <Separator className="my-3" />
        <div className="flex flex-col space-y-3">
          {navLinks.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 transition-colors hover:bg-blue-400/20",
                pathname === nav.route && "bg-blue-400/20 text-blue-400",
              )}
            >
              <nav.icon className="h-5 w-5" />
              {nav.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
