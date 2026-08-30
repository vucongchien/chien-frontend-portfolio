import Diamond from "@/components/ui/Diamond";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — name + role */}
          <div className="flex items-center gap-2">
            <Diamond size="sm" color="indigo" />
            <span className="text-sm font-semibold text-slate-800">
              Vũ Công Chiến
            </span>
            <span className="text-sm text-slate-400">· Software Engineering</span>
          </div>

          {/* Center — nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm text-slate-500">
            <a href="/#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="/#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="/#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="/#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          {/* Right — copyright */}
          <p className="text-xs text-slate-400">
            © 2026 · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
