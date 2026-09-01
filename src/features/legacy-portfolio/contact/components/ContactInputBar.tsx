"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";

interface ContactInputBarProps {
  recipientEmail?: string;
  onSend?: (message: string) => void;
}

const GMAIL_WINDOW_WIDTH = 640;
const GMAIL_WINDOW_HEIGHT = 680;

export default function ContactInputBar({
  recipientEmail = "vucongchien204@gmail.com",
  onSend,
}: ContactInputBarProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendEmail = (event?: FormEvent) => {
    if (event) {
      event.preventDefault();
    }

    if (onSend) {
      onSend(message);
    }

    const subject = "[Portfolio Contact] Message from Portfolio Visitor";
    const body = `Hi Chien,

${message || "Hi Chien, I'm reaching out from your portfolio website."}

---
Sent via vucongchien portfolio`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${encodedSubject}&body=${encodedBody}`;

    const left = Math.max(0, window.screenX + (window.outerWidth - GMAIL_WINDOW_WIDTH) / 2);
    const top = Math.max(0, window.screenY + (window.outerHeight - GMAIL_WINDOW_HEIGHT) / 2);

    window.open(
      gmailUrl,
      "GmailCompose",
      `width=${GMAIL_WINDOW_WIDTH},height=${GMAIL_WINDOW_HEIGHT},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  };

  const handleClear = () => {
    setMessage("");
    inputRef.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <form
      onSubmit={handleSendEmail}
      className="
        relative flex items-center gap-2 sm:gap-3
        rounded-full border border-slate-200 bg-white
        px-4 sm:px-5 py-2.5 sm:py-3
        shadow-sm hover:border-slate-300
        focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50
        transition-all duration-200
      "
    >
      {/* Input field */}
      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Say hello..."
        className="
          flex-1 bg-transparent text-slate-800 text-sm sm:text-base
          placeholder:text-slate-400 focus:outline-none
          min-w-0 pr-1
        "
      />

      {/* Clear Button if input has text */}
      {message && (
        <button
          type="button"
          onClick={handleClear}
          className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          title="Clear message"
          aria-label="Clear message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      )}

      {/* Direct Send via Gmail Button */}
      <button
        type="submit"
        className="
          w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-95
          flex items-center justify-center
          shrink-0 text-white shadow-sm shadow-indigo-200
          transition-all duration-200
        "
        title="Send via Gmail"
        aria-label="Send via Gmail"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 translate-x-0.5"
        >
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>
    </form>
  );
}
