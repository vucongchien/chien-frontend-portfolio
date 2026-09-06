// @vitest-environment jsdom
import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "@testing-library/react";
import { MicrosoftClarity } from "./MicrosoftClarity";

describe("MicrosoftClarity Component Unit Tests", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should render nothing when projectId is not provided and env variable is empty", () => {
    delete process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    const { container } = render(<MicrosoftClarity />);
    expect(container.firstChild).toBeNull();
  });

  it("should render nothing when projectId is only whitespace", () => {
    const { container } = render(<MicrosoftClarity projectId="   " />);
    expect(container.firstChild).toBeNull();
  });

  it("should render nothing in development environment if enabledInDev is false", () => {
    process.env.NODE_ENV = "development";
    process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID = "valid_id_123";

    const { container } = render(<MicrosoftClarity enabledInDev={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render script tag when projectId is provided and enabledInDev is true", () => {
    process.env.NODE_ENV = "development";

    const { container } = render(
      <MicrosoftClarity projectId="test_project_id_xyz" enabledInDev={true} />
    );

    const script = container.querySelector("#microsoft-clarity-init");
    expect(script).not.toBeNull();
    expect(script?.textContent).toContain("test_project_id_xyz");
    expect(script?.textContent).toContain("https://www.clarity.ms/tag/");
  });

  it("should render script tag in production environment using env variable", () => {
    process.env.NODE_ENV = "production";
    process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID = "prod_clarity_999";

    const { container } = render(<MicrosoftClarity />);

    const script = container.querySelector("#microsoft-clarity-init");
    expect(script).not.toBeNull();
    expect(script?.textContent).toContain("prod_clarity_999");
  });
});
