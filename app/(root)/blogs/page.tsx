import BlogCard from "@/components/cards/blog";
import { getBlogs } from "@/service/blog.service";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[40vh] flex-col items-center justify-end">
        <h2 className="section-title text-center font-creteRound text-4xl">
          <span>Blogs</span>
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
          <p className="text-muted-foreground">Blogs</p>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
