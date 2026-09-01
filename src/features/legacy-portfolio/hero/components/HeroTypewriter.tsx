"use client";

import { useTypewriter } from "../hooks/useTypewriter";

interface HeroTypewriterProps {
  titles: string[];
}

export default function HeroTypewriter({ titles }: HeroTypewriterProps) {
  const { displayText } = useTypewriter({
    titles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseAfterType: 2000,
  });

  return (
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
  );
}
