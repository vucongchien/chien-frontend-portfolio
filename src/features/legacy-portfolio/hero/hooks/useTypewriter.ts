"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface UseTypewriterOptions {
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearActiveTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (titles.length === 0) {return;}

    const currentTitle = titles[titleIndex] || "";

    const tick = () => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
          timerRef.current = setTimeout(tick, deletingSpeed);
        } else {
          // Finished deleting - next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        timerRef.current = setTimeout(tick, typingSpeed);
      } else {
        // Pause when word complete, then delete
        timerRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterType);
      }
    };

    timerRef.current = setTimeout(
      tick,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearActiveTimer();
  }, [
    displayText,
    isDeleting,
    titleIndex,
    titles,
    typingSpeed,
    deletingSpeed,
    pauseAfterType,
    clearActiveTimer,
  ]);

  return { displayText };
}
