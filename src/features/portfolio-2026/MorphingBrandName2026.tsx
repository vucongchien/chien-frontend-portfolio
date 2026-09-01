"use client";

import React, { useEffect, useRef, useState } from "react";

interface MorphingBrandName2026Props {
  name?: string;
  anchorId?: string;
}

function handleScrollToTop() {
  // Nếu người dùng đang bôi đen text thì không kích hoạt cuộn trang
  const selection = globalThis.window?.getSelection();
  if (selection && selection.toString().trim().length > 0) {
    return;
  }

  if (globalThis.window !== undefined) {
    globalThis.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (globalThis.document?.documentElement) {
      globalThis.document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
}

export function MorphingBrandName2026({
  name = "VŨ CÔNG CHIẾN",
  anchorId = "hero-name-placeholder",
}: MorphingBrandName2026Props) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    let initialLeft = 0;
    let initialTop = 0;
    let initialFontSize = 48;
    let isMeasured = false;

    const measureAnchor = () => {
      const anchorEl = document.querySelector(`#${anchorId}`);
      if (!anchorEl) {
        return;
      }

      const rect = anchorEl.getBoundingClientRect();
      const currentScrollY =
        globalThis.window?.scrollY ||
        globalThis.document?.documentElement?.scrollTop ||
        0;

      // Toạ độ tuyệt đối trên trang (so với top trang)
      initialLeft = rect.left;
      initialTop = rect.top + currentScrollY;

      const computedStyle = globalThis.window?.getComputedStyle(anchorEl);
      if (computedStyle) {
        initialFontSize =
          Number(computedStyle.fontSize.replace("px", "")) || 48;
      }
      isMeasured = true;
    };

    const updateTransform = () => {
      if (!containerRef.current) {
        return;
      }

      if (!isMeasured) {
        measureAnchor();
      }

      const scrollY =
        globalThis.window?.scrollY ||
        globalThis.document?.documentElement?.scrollTop ||
        0;
      const windowWidth = globalThis.window?.innerWidth || 1200;
      const windowHeight = globalThis.window?.innerHeight || 800;

      // Toạ độ đích của Logo cố định ở góc trên bên trái
      const isMobile = windowWidth < 768;
      const targetX = isMobile ? 24 : 40;
      const targetY = isMobile ? 16 : 20;
      const targetFontSize = isMobile ? 13 : 15;
      const targetScale = Math.min(
        Math.max(targetFontSize / initialFontSize, 0.25),
        0.6
      );

      // Ngưỡng kích hoạt: Chính xác khi mép trên màn hình đụng chữ (chữ trôi lên chạm vào targetY)
      const startMorphScroll = Math.max(initialTop - targetY, 0);

      // Quãng đường cuộn theo chiều cao màn hình để dịch từ từ sang góc trái
      const morphDistance = Math.round(windowHeight * 0.45);

      let currentX = initialLeft;
      let currentY = initialTop - scrollY;
      let currentScale = 1;
      let progress = 0;

      if (scrollY < startMorphScroll) {
        // Giai đoạn 1: Chữ trôi lên tự nhiên theo trang cho đến khi chạm mép trên
        currentX = initialLeft;
        currentY = initialTop - scrollY;
        currentScale = 1;
        progress = 0;
      } else {
        // Giai đoạn 2: Khi mép trên đụng chữ -> neo lại ở targetY, dịch từ từ sang góc trái và thu nhỏ dần
        const rawProgress = Math.min(
          (scrollY - startMorphScroll) / morphDistance,
          1
        );
        // Smoothstep easing: chuyển động êm ái, tăng giảm tốc tự nhiên
        progress = rawProgress * rawProgress * (3 - 2 * rawProgress);

        currentX = initialLeft + (targetX - initialLeft) * progress;
        currentY = targetY;
        currentScale = 1 + (targetScale - 1) * progress;
      }

      // Cập nhật GPU transform trực tiếp cực nhanh
      containerRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;
      containerRef.current.style.opacity = "1";
      containerRef.current.style.visibility = "visible";

      // Cập nhật độ trong suốt của background logo badge
      if (badgeRef.current) {
        badgeRef.current.style.opacity = `${progress}`;
      }

      // Kích hoạt tương tác click khi đã morph thành Logo
      setIsInteractive(progress > 0.4);
    };

    // Đo toạ độ ban đầu sau khi DOM đã render
    measureAnchor();
    updateTransform();

    const rafId = requestAnimationFrame(() => {
      measureAnchor();
      updateTransform();
    });

    // Lắng nghe khi Web Fonts (Google Font Lora) tải xong để hiệu chỉnh toạ độ chính xác 100%
    const handleFontReady = async () => {
      if (typeof document !== "undefined" && "fonts" in document) {
        try {
          await document.fonts.ready;
          measureAnchor();
          updateTransform();
        } catch {
          // Bỏ qua nếu trình duyệt không hỗ trợ fonts.ready
        }
      }
    };
    void handleFontReady();

    // ResizeObserver để theo dõi khi layout hoặc viewport thay đổi
    let resizeObserver: ResizeObserver | null = null;
    const anchorEl = document.querySelector(`#${anchorId}`);
    if (typeof ResizeObserver !== "undefined" && anchorEl) {
      resizeObserver = new ResizeObserver(() => {
        measureAnchor();
        updateTransform();
      });
      resizeObserver.observe(anchorEl);
    }

    const handleScroll = () => {
      updateTransform();
    };

    const handleResize = () => {
      measureAnchor();
      updateTransform();
    };

    globalThis.window?.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    globalThis.document?.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    globalThis.window?.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      globalThis.window?.removeEventListener("scroll", handleScroll, true);
      globalThis.document?.removeEventListener("scroll", handleScroll, true);
      globalThis.window?.removeEventListener("resize", handleResize);
    };
  }, [anchorId]);

  return (
    <button
      type="button"
      ref={containerRef}
      onClick={isInteractive ? handleScrollToTop : undefined}
      aria-label={`Logo thương hiệu - ${name} (Bấm để về đầu trang)`}
      style={{
        opacity: 0,
        visibility: "hidden",
      }}
      className={`fixed top-0 left-0 z-50 origin-top-left will-change-transform select-text [&_*]:select-text bg-transparent border-0 p-0 text-left focus:outline-none transition-opacity duration-150 ${
        isInteractive ? "cursor-pointer pointer-events-auto" : "cursor-text pointer-events-none"
      }`}
    >
      <div className="relative inline-flex items-center">
        {/* Nền badge mờ nhẹ tăng dần khi biến hình thành logo để bảo vệ text khi lướt qua nội dung bên dưới */}
        <span
          ref={badgeRef}
          className="absolute -inset-x-3 -inset-y-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-xs pointer-events-none transition-opacity duration-150"
          style={{ opacity: 0 }}
        />

        {/* Tên chính: Bắt đầu sát 100% lề trái, cho phép bôi đen chọn văn bản tự nhiên */}
        <span className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black uppercase font-serif whitespace-nowrap select-text">
          {name}
        </span>
      </div>
    </button>
  );
}
