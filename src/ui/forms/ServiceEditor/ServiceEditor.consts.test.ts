import { vi } from "vitest";
import { SERVICE_DEFAULTS, SERVICE_ID_PREFIX } from "./ServiceEditor.consts";

describe("ServiceEditor Constants", () => {
  describe("SERVICE_DEFAULTS", () => {
    it("has correct title", () => {
      expect(SERVICE_DEFAULTS.TITLE).toBe("New Service");
    });

    it("has correct description", () => {
      expect(SERVICE_DEFAULTS.DESCRIPTION).toBe("Service description");
    });
  });

  describe("SERVICE_ID_PREFIX", () => {
    it("has correct value", () => {
      expect(SERVICE_ID_PREFIX).toBe("s");
    });

    it("is readonly", () => {
      expect(() => {
        (SERVICE_ID_PREFIX as any) = "x";
      }).toThrow();
    });
  });
}); 