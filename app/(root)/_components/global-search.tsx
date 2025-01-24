import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { Minus, Search } from "lucide-react";
import Link from "next/link";

function GlobalSearch() {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex cursor-pointer items-center gap-1 rounded-sm px-3 py-2 transition-colors hover:bg-blue-400/20">
          <span className="hidden md:flex">Search</span>
          <Search className="h-4 w-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="container mx-auto max-w-6xl border-red-400 py-12">
          <Input className="bg-secondary" placeholder="Type to search blog" />

          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">
                See posts by categories
              </p>
              <Minus />
              <Link href="/categories">
                <DrawerClose className="text-blue-500 hover:underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((item) => (
                <Badge key={item.slug} variant={"secondary"}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">See posts by tags</p>
              <Minus />
              <Link href="/tags">
                <DrawerClose className="text-blue-500 hover:underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((item) => (
                <Badge key={item.slug} variant={"secondary"}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default GlobalSearch;
