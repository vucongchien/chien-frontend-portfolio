"use client";

import { useState, useEffect, useCallback } from "react";

const TITLES = [
  "Frontend Developer",
  "React · Next.js",
  "TypeScript · Tailwind",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = TITLES[titleIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else {
        // Finished deleting — move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        return;
      }
    }
  }, [displayText, isDeleting, currentTitle]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative angular elements */}
      <div className="absolute top-20 right-16 w-3 h-3 bg-indigo-600 rotate-45 opacity-20" />
      <div className="absolute top-28 right-24 w-2 h-2 bg-indigo-400 rotate-45 opacity-30" />
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-indigo-600 rotate-45 opacity-15" />
      <div className="absolute bottom-40 left-12 w-2 h-2 bg-amber-500 rotate-45 opacity-25" />

      {/* Main Content */}
      <div className="mx-auto max-w-3xl text-center px-6 py-16 md:py-24">
        {/* Decorative slashes */}
        <p
          className="text-indigo-400 font-mono text-sm tracking-widest mb-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0s both" }}
        >
          {'// '}hello world
        </p>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900"
          style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
        >
          Turning complex ideas{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
            into simple software.
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div
          className="mt-4 h-8 flex items-center justify-center"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
        >
          <span className="text-slate-500 text-base sm:text-lg font-mono">
            {displayText}
          </span>
          <span
            className="inline-block w-0.5 h-5 bg-indigo-500 ml-0.5"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </div>

        {/* Buttons */}
        <div
          className="mt-8 flex gap-4 justify-center"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
        >
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              px-6 py-3 bg-indigo-600 text-white rounded-lg
              font-medium transition-colors duration-200
              hover:bg-indigo-500
            "
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
            </svg>
          </a>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-lg font-medium
              border border-indigo-200 text-indigo-600
              transition-colors duration-200
              hover:bg-indigo-50 hover:border-indigo-300
            "
          >
            Contact
          </a>
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
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
