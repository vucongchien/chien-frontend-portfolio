import type { BlogPost } from "@/types";
import BlogCard from "./BlogCard";

interface BlogSectionProps {
  category: string;
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="relative">
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
