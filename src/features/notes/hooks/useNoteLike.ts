"use client";

import { useState, useTransition, useSyncExternalStore } from "react";
import { toggleNoteLikeAction } from "@/server/modules/notes/likes.action";

function subscribe(listener: () => void) {
  globalThis.addEventListener("storage", listener);
  return () => {
    globalThis.removeEventListener("storage", listener);
  };
}

function getStoredLike(slug: string): boolean {
  try {
    return (
      globalThis.window !== undefined &&
      globalThis.localStorage.getItem(`note_liked_${slug}`) === "true"
    );
  } catch {
    return false;
  }
}

export function useNoteLike(slug: string, initialLikes = 0) {
  const isStoredLiked = useSyncExternalStore(
    subscribe,
    () => getStoredLike(slug),
    () => false
  );

  const [likes, setLikes] = useState(initialLikes);
  const [overrideLiked, setOverrideLiked] = useState<boolean | null>(null);
  const [isPending, startTransition] = useTransition();

  const isLiked = overrideLiked === null ? isStoredLiked : overrideLiked;

  const handleLike = () => {
    const nextLiked = !isLiked;

    setOverrideLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : Math.max(0, prev - 1)));

    try {
      const key = `note_liked_${slug}`;
      if (nextLiked) {
        globalThis.localStorage.setItem(key, "true");
      } else {
        globalThis.localStorage.removeItem(key);
      }
    } catch {
      // Ignored
    }

    startTransition(async () => {
      const res = await toggleNoteLikeAction(slug, nextLiked);
      if (res.success) {
        setLikes(res.likes);
      } else {
        setOverrideLiked(!nextLiked);
      }
    });
  };

  return {
    likes,
    isLiked,
    isPending,
    handleLike,
  };
}
