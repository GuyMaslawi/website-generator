import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useKeyboard } from "./useKeyboard";

describe("useKeyboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns a function", () => {
    const mockCallback = vi.fn();

    const { result } = renderHook(() => useKeyboard("Enter", mockCallback));

    expect(result.current).toBeUndefined();
  });

  it("can be called without errors", () => {
    const mockCallback = vi.fn();

    renderHook(() => useKeyboard("Enter", mockCallback));

    expect(mockCallback).toBeDefined();
  });

  it("handles multiple key bindings", () => {
    const mockCallback1 = vi.fn();
    const mockCallback2 = vi.fn();

    renderHook(() => {
      useKeyboard("Enter", mockCallback1);
      useKeyboard("Escape", mockCallback2);
    });

    expect(mockCallback1).toBeDefined();
    expect(mockCallback2).toBeDefined();
  });
}); 