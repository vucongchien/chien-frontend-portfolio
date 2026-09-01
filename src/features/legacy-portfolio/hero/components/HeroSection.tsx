import Button from "@/components/ui/Button";
import HeroTypewriter from "./HeroTypewriter";

const TITLES = [
  "Software Engineer",
  "React · Next.js",
  "Node.js · Python",
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">

      {/* Main Content */}
      <div className="mx-auto max-w-3xl text-center px-6 py-16 md:py-24">
        {/* Decorative slashes */}
        <p
          className="text-indigo-400 font-mono text-sm tracking-widest mb-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0s both" }}
        >
          {"// "}hello world
        </p>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900"
          style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
        >
          Turning complex ideas{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
            into simple software.
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <HeroTypewriter titles={TITLES} />

        {/* Buttons */}
        <div
          className="mt-8 flex gap-4 justify-center"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
        >
          <Button href="#projects" variant="primary">
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          <Button href="#contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>

      {/* Hero ↔ About divider */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 pb-8"
        style={{ animation: "fadeIn 1s ease-out 0.6s both" }}
      >
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5 text-indigo-300 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
