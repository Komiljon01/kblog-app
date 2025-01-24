import CategoriesTags from "@/components/cards/categories-tags";
import { getCategories } from "@/service/category.service";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

async function Page() {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[30vh] flex-col items-center justify-end">
        <h2 className="section-title mt-2 text-center font-creteRound text-4xl">
          <span>Categories</span>
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
          <p className="text-muted-foreground">Categories</p>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((item) => (
          <CategoriesTags key={item.slug} {...item} type="categories" />
        ))}
      </div>
    </div>
  );
}

export default Page;
