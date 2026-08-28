"use client";

import { useState, useRef } from "react";

const EMAIL_ADDRESS = "vucongchien204@gmail.com";

export default function Contact() {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const socials = [
    {
      name: "Gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/vucongchien",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
        </svg>
      ),
    },
  ];

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const subject = "[Portfolio Contact] Message from Portfolio Visitor";
    const body = `Hi Chien,

${message || "Hi Chien, I'm reaching out from your portfolio website."}

---
Sent via vucongchien portfolio`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Bỏ fs=1 và mở dưới dạng Popup Widget nhỏ gọn giữa màn hình
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${EMAIL_ADDRESS}&su=${encodedSubject}&body=${encodedBody}`;

    const width = 640;
    const height = 680;
    const left = Math.max(0, window.screenX + (window.outerWidth - width) / 2);
    const top = Math.max(0, window.screenY + (window.outerHeight - height) / 2);

    window.open(
      gmailUrl,
      "GmailCompose",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-flex items-center gap-2">
            Get in touch
            <span className="w-2 h-2 bg-indigo-600 rotate-45" />
          </h2>
          <p className="mt-2 text-slate-500">Feel free to reach out through any of these channels</p>
        </div>

        {/* Chat-style Interactive Input Bar */}
        <div className="max-w-2xl mx-auto">
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
              onChange={(e) => setMessage(e.target.value)}
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
                onClick={() => {
                  setMessage("");
                  inputRef.current?.focus();
                }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                title="Clear message"
                aria-label="Clear message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 translate-x-0.5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </form>

          {/* Quick info cards below - Original 3 Social Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-slate-200 bg-white px-4 py-2
                  text-sm text-slate-600
                  transition-colors duration-200
                  hover:border-indigo-200 hover:text-indigo-600
                "
              >
                <span className="text-slate-400">{s.icon}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
