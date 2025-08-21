import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { useValidation } from "./useValidation";

describe("useValidation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns validation functions", () => {
    const { result } = renderHook(() => useValidation());

    expect(result.current.validate).toBeDefined();
    expect(result.current.getError).toBeDefined();
    expect(result.current.clearErrors).toBeDefined();
  });

  it("validates required fields", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { required: true };

    act(() => {
      const isValid = result.current.validate("", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("some value", "test-field", validation);
      expect(isValid).toBe(true);
    });
  });

  it("validates min length", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { minLength: 5 };

    act(() => {
      const isValid = result.current.validate("abc", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("abcdef", "test-field", validation);
      expect(isValid).toBe(true);
    });
  });

  it("validates max length", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { maxLength: 5 };

    act(() => {
      const isValid = result.current.validate("abcdef", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("abc", "test-field", validation);
      expect(isValid).toBe(true);
    });
  });

  it("validates email format", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { email: true };

    act(() => {
      const isValid = result.current.validate("invalid-email", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("valid@email.com", "test-field", validation);
      expect(isValid).toBe(true);
    });
  });

  it("validates phone format", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { phone: true };

    act(() => {
      const isValid = result.current.validate("invalid-phone", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("+1-555-123-4567", "test-field", validation);
      expect(isValid).toBe(true);
    });
  });

  it("combines multiple validation rules", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { required: true, minLength: 3, maxLength: 10 };

    act(() => {
      const isValid = result.current.validate("", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("ab", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("abcdefghijk", "test-field", validation);
      expect(isValid).toBe(false);
    });

    act(() => {
      const isValid = result.current.validate("abcde", "test-field", validation);
      expect(isValid).toBe(true);
    });
  });

  it("stores and retrieves errors", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { required: true };

    act(() => {
      result.current.validate("", "test-field", validation);
    });

    const error = result.current.getError("test-field");
    expect(error).toBeDefined();
  });

  it("clears errors", () => {
    const { result } = renderHook(() => useValidation());

    const validation = { required: true };

    act(() => {
      result.current.validate("", "test-field", validation);
    });

    expect(result.current.getError("test-field")).toBeDefined();

    act(() => {
      result.current.clearErrors();
    });

    expect(result.current.getError("test-field")).toBeUndefined();
  });
}); 