"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  titles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterType?: number;
}

export function useTypewriter({
  titles,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseAfterType = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = titles[titleIndex] || "";

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseAfterType);
        return;
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else {
        // Finished deleting — move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [displayText, isDeleting, currentTitle, titles.length, pauseAfterType]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return { displayText };
}
