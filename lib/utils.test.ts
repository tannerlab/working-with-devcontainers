import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges conflicting Tailwind classes with the last one winning", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("keeps clsx-style conditional classes", () => {
    expect(cn("text-sm", { hidden: false, block: true })).toBe("text-sm block");
  });
});
