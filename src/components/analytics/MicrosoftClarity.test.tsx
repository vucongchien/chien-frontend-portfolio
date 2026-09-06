// @vitest-environment jsdom
import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "@testing-library/react";
import { MicrosoftClarity } from "./MicrosoftClarity";

// Mock next/script để kiểm tra logic render và thuộc tính mà không phụ thuộc Next.js HeadManager
vi.mock("next/script", () => ({
  default: ({
    id,
    strategy,
    dangerouslySetInnerHTML,
  }: {
    id: string;
    strategy: string;
    dangerouslySetInnerHTML: { __html: string };
  }) => (
    <script
      id={id}
      data-strategy={strategy}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  ),
}));

describe("MicrosoftClarity Component Unit Tests", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("should render nothing when projectId is not provided and env variable is empty", () => {
    vi.stubEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID", "");

    const { container } = render(<MicrosoftClarity />);
    expect(container.firstChild).toBeNull();
  });

  it("should render nothing when projectId is only whitespace", () => {
    const { container } = render(<MicrosoftClarity projectId="   " />);
    expect(container.firstChild).toBeNull();
  });

  it("should render nothing in development environment if enabledInDev is false", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID", "valid_id_123");

    const { container } = render(<MicrosoftClarity enabledInDev={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render script tag with lazyOnload strategy when projectId is provided and enabledInDev is true", () => {
    vi.stubEnv("NODE_ENV", "development");

    const { container } = render(
      <MicrosoftClarity projectId="test_project_id_xyz" enabledInDev />
    );

    const script = container.querySelector<HTMLElement>("#microsoft-clarity-init");
    expect(script).not.toBeNull();
    expect(script?.dataset.strategy).toBe("lazyOnload");
    expect(script?.innerHTML).toContain("test_project_id_xyz");
    expect(script?.innerHTML).toContain("https://www.clarity.ms/tag/");
  });

  it("should render script tag in production environment using env variable", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID", "prod_clarity_999");

    const { container } = render(<MicrosoftClarity />);

    const script = container.querySelector("#microsoft-clarity-init");
    expect(script).not.toBeNull();
    expect(script?.innerHTML).toContain("prod_clarity_999");
  });
});
