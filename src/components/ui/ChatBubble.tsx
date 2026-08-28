import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  role: "ai" | "user";
  avatarSrc?: string;
  avatarAlt?: string;
  children: ReactNode;
  className?: string;
}

export default function ChatBubble({
  role,
  avatarSrc = "/undraw_refreshing-beverage_w8al.svg",
  avatarAlt = "avatar",
  children,
  className,
}: ChatBubbleProps) {
  if (role === "user") {
    return (
      <div
        className={cn(
          "flex sm:flex-row items-end sm:items-center justify-end gap-4",
          className
        )}
      >
        <div className="max-w-2xl rounded-2xl bg-indigo-50 border border-indigo-100 px-6 py-2 h-fit my-auto">
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
      <div className="min-w-0 w-full max-w-5xl rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 space-y-4">
        {children}
      </div>
    </div>
  );
}
