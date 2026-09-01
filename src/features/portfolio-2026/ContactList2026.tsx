"use client";

import React, { useState } from "react";

interface ContactItem {
  id: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const CONTACTS_DATA: ContactItem[] = [
  {
    id: "gmail",
    value: "vucongchien204@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=vucongchien204@gmail.com",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "github",
    value: "github.com/vucongchien",
    href: "https://github.com/vucongchien",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    id: "facebook",
    value: "facebook.com/vucongchien",
    href: "https://facebook.com/",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export function ContactList2026() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col space-y-1.5">
        {CONTACTS_DATA.map((contact, index) => (
          <div
            key={contact.id}
            style={{
              animationDelay: `${index * 120}ms`,
            }}
            className="group flex items-center justify-between py-0.5 animate-slide-in-right"
          >
            {/* Cột Logo / Icon bên trái */}
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-black group-hover:text-palette-1 focus:outline-none flex items-center p-0.5 transition-colors duration-300"
              aria-label={contact.id}
            >
              {contact.icon}
            </a>

            {/* Cột Thông tin chi tiết bên phải (Trượt từ phải qua trái) */}
            <div className="flex items-center gap-2">
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-neutral-800 group-hover:text-black tracking-tight relative py-0.5 transition-colors"
              >
                <span>{contact.value}</span>
                {/* Đường gạch chân gradient 4 màu xuất hiện khi hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-palette group-hover:w-full transition-all duration-300 ease-out" />
              </a>

              <button
                type="button"
                onClick={(e) => handleCopy(contact.id, contact.value, e)}
                title="Sao chép"
                className="opacity-0 group-hover:opacity-100 p-0.5 text-neutral-400 hover:text-black text-3xs font-mono transition-opacity cursor-pointer"
              >
                {copiedId === contact.id ? (
                  <span className="text-palette-1 font-semibold text-3xs">Đã chép!</span>
                ) : (
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
