import { describe, it, expect } from "vitest";
import {
  tokens,
  primitiveTokens,
  semanticTokens,
  componentTokens,
  w3cTokens,
  cssVar,
} from "@/config/tokens";

describe("Design Tokens System", () => {
  describe("60-30-10 Semantic Balance Verification", () => {
    it("should have 60% surfaces properly configured", () => {
      expect(tokens.colors.surface.base).toBe("#F8FAFC");
      expect(tokens.colors.surface.paper).toBe("#FFFFFF");
      expect(tokens.colors.surface.band).toBe("rgba(238, 242, 255, 0.6)");
      expect(tokens.colors.surface.subtle).toBe("#F1F5F9");
    });

    it("should have 30% content & typography properly configured", () => {
      expect(tokens.colors.content.primary).toBe("#0F172A");
      expect(tokens.colors.content.secondary).toBe("#1E293B");
      expect(tokens.colors.content.body).toBe("#475569");
      expect(tokens.colors.content.subtle).toBe("#64748B");
      expect(tokens.colors.content.muted).toBe("#94A3B8");
    });

    it("should have 30% structural borders configured", () => {
      expect(tokens.colors.border.subtle).toBe("#E2E8F0");
      expect(tokens.colors.border.light).toBe("#EEF2FF");
      expect(tokens.colors.border.accent).toBe("#C7D2FE");
      expect(tokens.colors.border.focus).toBe("#4F46E5");
    });

    it("should have 10% accents & 3D solid blocks configured", () => {
      expect(tokens.colors.accent.primary).toBe("#4F46E5");
      expect(tokens.colors.accent.primaryHover).toBe("#4338CA");
      expect(tokens.colors.accent.gradientTo).toBe("#8B5CF6");
      expect(tokens.colors.accent.warm).toBe("#F59E0B");
      expect(tokens.colors.accent.blockShadow).toBe("#E2E8F0");
      expect(tokens.colors.accent.blockShadowIndigo).toBe("#C7D2FE");
      expect(tokens.colors.accent.blockShadowDark).toBe("#A5B4FC");
    });
  });

  describe("W3C DTCG Standard Compliance", () => {
    it("should provide $value, $type, and $description for primitives", () => {
      expect(primitiveTokens.color.indigo[600].$value).toBe("#4F46E5");
      expect(primitiveTokens.color.indigo[600].$type).toBe("color");
      expect(primitiveTokens.color.indigo[600].$description).toBeDefined();

      expect(primitiveTokens.typography.fontFamily.serif.$value).toBe("var(--font-lora), serif");
      expect(primitiveTokens.typography.fontFamily.serif.$type).toBe("fontFamily");
    });

    it("should export root w3cTokens container with version", () => {
      expect(w3cTokens.$version).toBe("2.0.0");
      expect(w3cTokens.primitive).toBeDefined();
      expect(w3cTokens.semantic).toBeDefined();
      expect(w3cTokens.component).toBeDefined();
    });
  });

  describe("Component Tokens & 3D Craft Floor", () => {
    it("should define button tokens with solid 3D shadow depths", () => {
      expect(componentTokens.button.primary.bg).toBe("#4F46E5");
      expect(componentTokens.button.primary.shadow).toBe("4px 4px 0px 0px #C7D2FE");
      expect(componentTokens.button.primary.activeShadow).toBe("2px 2px 0px 0px #A5B4FC");
    });

    it("should define conversational chat bubbles for user and bot", () => {
      expect(componentTokens.chatBubble.user.bg).toBe("#EEF2FF");
      expect(componentTokens.chatBubble.bot.bg).toBe("#FFFFFF");
    });
  });

  describe("CSS Variable Helper", () => {
    it("should format cssVar strings correctly", () => {
      expect(cssVar("primary")).toBe("var(--primary)");
      expect(cssVar("surface-base", "#F8FAFC")).toBe("var(--surface-base, #F8FAFC)");
    });
  });
});
