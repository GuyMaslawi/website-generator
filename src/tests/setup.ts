import "@testing-library/jest-dom";
import { vi } from "vitest";


import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
};

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

global.URL.createObjectURL = vi.fn(() => "mocked-url");
global.URL.revokeObjectURL = vi.fn();

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
    value: vi.fn(() => ({
        drawImage: vi.fn(),
        getImageData: vi.fn(() => ({
            data: new Uint8ClampedArray(4),
            width: 1,
            height: 1
        })),
        putImageData: vi.fn(),
        canvas: {
            toDataURL: vi.fn(() => "data:image/png;base64,mocked")
        }
    }))
}); 