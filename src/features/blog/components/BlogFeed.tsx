"use client";

import { useState, useMemo } from "react";
import type { BlogPost } from "@/types";
import BlogSearchBar from "./BlogSearchBar";
import BlogFilterTabs from "./BlogFilterTabs";
import BlogCard from "./BlogCard";

interface BlogFeedProps {
  allPosts: BlogPost[];
  categories: string[];
}

export default function BlogFeed({ allPosts, categories }: BlogFeedProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Lọc bài viết kết hợp: Category Tab + Search Query
  const filteredPosts = useMemo(() => {
    let list = allPosts;

    if (activeCategory.toLowerCase() !== "all") {
      list = list.filter((post) =>
        post.tags.some(
          (t) => t.toLowerCase() === activeCategory.toLowerCase()
        )
      );
    }

    const trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery) {
      list = list.filter(
        (post) =>
          post.title.toLowerCase().includes(trimmedQuery) ||
          post.excerpt.toLowerCase().includes(trimmedQuery) ||
          post.tags.some((t) => t.toLowerCase().includes(trimmedQuery))
      );
    }

    return list;
  }, [allPosts, activeCategory, query]);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Search Input Bar */}
      <BlogSearchBar value={query} onChange={setQuery} />

      {/* 2. Category Filter Tabs */}
      <BlogFilterTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. Danh sách bài viết phẳng từ trên xuống dưới — Không chia section */}
      {filteredPosts.length === 0 ? (
        <div className="py-12 text-center space-y-3 bg-white rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-400 text-sm">Không tìm thấy bài viết nào phù hợp.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {query.trim() && (
            <p className="text-xs text-slate-500 px-1">
              Tìm thấy <strong className="text-slate-900">{filteredPosts.length}</strong> bài viết cho &ldquo;{query}&rdquo;
            </p>
          )}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
