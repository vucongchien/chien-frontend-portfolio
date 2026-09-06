"use server";

import { getNoteLikes, incrementNoteLike, decrementNoteLike } from "./likes.service";

/**
 * Server Action lấy số lượt thích của bài viết.
 */
export async function getNoteLikesAction(
  slug: string
): Promise<{ success: boolean; likes: number }> {
  try {
    const likes = await getNoteLikes(slug);
    return { success: true, likes };
  } catch (error) {
    console.error("[getNoteLikesAction] Error:", error);
    return { success: false, likes: 0 };
  }
}

/**
 * Server Action bật/tắt lượt thích (Like/Unlike) của bài viết.
 */
export async function toggleNoteLikeAction(
  slug: string,
  shouldLike: boolean
): Promise<{ success: boolean; likes: number; isLiked: boolean }> {
  try {
    if (!slug || typeof slug !== "string") {
      return { success: false, likes: 0, isLiked: false };
    }

    const likes = shouldLike
      ? await incrementNoteLike(slug)
      : await decrementNoteLike(slug);

    return { success: true, likes, isLiked: shouldLike };
  } catch (error) {
    console.error("[toggleNoteLikeAction] Error:", error);
    return { success: false, likes: 0, isLiked: !shouldLike };
  }
}
