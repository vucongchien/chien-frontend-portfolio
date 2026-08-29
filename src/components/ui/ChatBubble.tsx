import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type ChatBubbleSender = "ai" | "user";
export type ChatBubbleRole = ChatBubbleSender;
export type ChatBubbleVariant = "white" | "slate" | "indigo";
export type ChatBubbleSize = "2xl" | "4xl" | "5xl" | "full";

interface ChatBubbleProps {
  sender?: ChatBubbleSender;
  role?: ChatBubbleSender;
  variant?: ChatBubbleVariant;
  size?: ChatBubbleSize;
  avatarSrc?: string;
  avatarAlt?: string;
  children: ReactNode;
  className?: string;
}

const aiVariants: Record<Extract<ChatBubbleVariant, "white" | "slate">, string> = {
  white: "bg-white border-slate-200",
  slate: "bg-slate-50 border-slate-200",
};

const userVariants: Record<Extract<ChatBubbleVariant, "indigo" | "white">, string> = {
  indigo: "bg-indigo-50 border-indigo-100 text-indigo-700",
  white: "bg-white border-indigo-100 text-indigo-700",
};

const sizeVariants: Record<ChatBubbleSize, string> = {
  "2xl": "max-w-2xl",
  "4xl": "min-w-0 w-full sm:max-w-4xl",
  "5xl": "min-w-0 w-full sm:max-w-5xl",
  full: "min-w-0 w-full",
};

export default function ChatBubble({
  sender,
  role,
  variant,
  size = "5xl",
  avatarSrc = "/undraw_refreshing-beverage_w8al.svg",
  avatarAlt = "Chien avatar mascot",
  children,
  className,
}: ChatBubbleProps) {
  const activeSender = sender || role || "ai";
  if (activeSender === "user") {
    const userVariantKey = (variant as "indigo" | "white") || "indigo";
    const bubbleClass = userVariants[userVariantKey] || userVariants.indigo;

    return (
      <div
        className={cn(
          "flex sm:flex-row items-end sm:items-center justify-end gap-4",
          className
        )}
      >
        <div className={cn("max-w-2xl rounded-2xl border px-6 py-2 h-fit my-auto", bubbleClass)}>
          {children}
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            width={56}
            height={56}
          />
        </div>
      </div>
    );
  }

  const aiVariantKey = (variant as "white" | "slate") || "white";
  const bubbleClass = aiVariants[aiVariantKey] || aiVariants.white;
  const sizeClass = sizeVariants[size] || sizeVariants["5xl"];

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={56}
          height={56}
        />
      </div>
      <div
        className={cn(
          "rounded-2xl border p-4 sm:p-6 space-y-4",
          sizeClass,
          bubbleClass
        )}
      >
        {children}
      </div>
    </div>
  );
}
