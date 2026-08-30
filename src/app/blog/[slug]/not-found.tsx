import Link from "next/link";
import Diamond from "@/components/ui/Diamond";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 font-mono text-2xl font-bold">
          404
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-indigo-500">
            <Diamond size="xs" color="indigo" />
            <span>{"// "}post not found</span>
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Bài viết không tồn tại
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Bài viết bạn đang tìm kiếm có thể đã bị đổi tên, di chuyển hoặc chưa
            được xuất bản.
          </p>
        </div>

        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm"
          >
            <span>← Quay lại danh sách Blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
