import { ICategoryAndTag } from "@/types";
import { Layers2, Tags } from "lucide-react";
import Link from "next/link";

interface Props extends ICategoryAndTag {
  type: "categories" | "tags";
}

function CategoriesTags(item: Props) {
  return (
    <Link
      href={`/${item.type}/${item.slug}`}
      className="p4 flex items-center justify-center gap-4 rounded-md bg-secondary shadow-md transition-colors hover:bg-secondary/80 dark:shadow-white/5 md:p-8"
    >
      {item.type === "tags" ? <Tags /> : <Layers2 />}
      <h1 className="font-creteRound text-2xl">{item.name}</h1>
    </Link>
  );
}

export default CategoriesTags;
