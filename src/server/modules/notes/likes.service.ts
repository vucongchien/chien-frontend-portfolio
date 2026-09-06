import "server-only";
import { prisma } from "@/server/shared/prisma";

/**
 * Lấy tổng số lượt like của bài viết từ bảng posts qua Prisma.
 */
export async function getNoteLikes(slug: string): Promise<number> {
  if (!slug) {
    return 0;
  }
  try {
    const post = await prisma.posts.findUnique({
      where: { slug },
      select: { likes_count: true },
    });
    return post?.likes_count ?? 0;
  } catch (error) {
    console.error(`[getNoteLikes] Lỗi lấy likes cho slug '${slug}':`, error);
    return 0;
  }
}

/**
 * Tăng 1 lượt like cho bài viết (Upsert an toàn qua Prisma).
 */
export async function incrementNoteLike(slug: string): Promise<number> {
  if (!slug) {
    return 0;
  }
  try {
    const updated = await prisma.posts.upsert({
      where: { slug },
      create: {
        slug,
        title: slug,
        summary: "",
        content: "",
        likes_count: 1,
      },
      update: {
        likes_count: { increment: 1 },
      },
      select: { likes_count: true },
    });
    return updated.likes_count ?? 1;
  } catch (error) {
    console.error(`[incrementNoteLike] Lỗi tăng like cho slug '${slug}':`, error);
    return 0;
  }
}

/**
 * Giảm 1 lượt like cho bài viết (không để âm số like).
 */
export async function decrementNoteLike(slug: string): Promise<number> {
  if (!slug) {
    return 0;
  }
  try {
    const post = await prisma.posts.findUnique({
      where: { slug },
      select: { likes_count: true },
    });

    const currentLikes = post?.likes_count ?? 0;
    if (currentLikes <= 0) {
      return 0;
    }

    const updated = await prisma.posts.update({
      where: { slug },
      data: {
        likes_count: { decrement: 1 },
      },
      select: { likes_count: true },
    });
    return Math.max(0, updated.likes_count ?? 0);
  } catch (error) {
    console.error(`[decrementNoteLike] Lỗi giảm like cho slug '${slug}':`, error);
    return 0;
  }
}
