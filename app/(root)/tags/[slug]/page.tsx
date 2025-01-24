import BlogCard from "@/components/cards/blog";
import { getBlogsByTag } from "@/service/tag.service";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

async function TagsPage({ params }: { params: { slug: string } }) {
  const { blogs, name } = await getBlogsByTag(params.slug);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[30vh] flex-col items-center justify-end">
        <h2 className="section-title mt-2 text-center font-creteRound text-4xl">
          <span>{name}</span>
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
          <p className="text-muted-foreground">{name}</p>
        </div>
      </div>

      <div className="mt-24 flex flex-col space-y-24">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default TagsPage;
