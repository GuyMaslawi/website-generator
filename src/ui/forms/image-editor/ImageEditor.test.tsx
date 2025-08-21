import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ImageEditor } from "./ImageEditor";
import React from "react";
import "@testing-library/jest-dom";

describe("ImageEditor", () => {
  const mockOnSave = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders upload area when no image is selected", () => {
    render(<ImageEditor onSave={mockOnSave} />);
    
    expect(screen.getByText("Upload image")).toBeInTheDocument();
    expect(screen.getByText("Supports JPG, PNG, GIF up to 10MB")).toBeInTheDocument();
  });

  it("shows image preview and controls when image is provided", () => {
    render(<ImageEditor currentImage="test-image.jpg" alt="Test image" onSave={mockOnSave} />);
    
    expect(screen.getByDisplayValue("Test image")).toBeInTheDocument();
    
    const labels = screen.getAllByText(/^(Scale|Rotation|Brightness|Contrast):/);
    expect(labels).toHaveLength(4);
    
    expect(labels[0]).toHaveTextContent("100%");
    expect(labels[1]).toHaveTextContent("0°");
    expect(labels[2]).toHaveTextContent("100%");
    expect(labels[3]).toHaveTextContent("100%");
  });

  it("updates alt text", () => {
    render(<ImageEditor currentImage="test-image.jpg" onSave={mockOnSave} />);
    
    const altInput = screen.getByPlaceholderText("Describe the image");
    fireEvent.change(altInput, { target: { value: "New alt text" } });
    
    expect(altInput).toHaveValue("New alt text");
  });

  it("calls onSave with correct data", async () => {
    const mockCanvas = {
      getContext: () => ({
        drawImage: vi.fn(),
        getImageData: vi.fn(() => ({ data: new Uint8ClampedArray(4), width: 1, height: 1 })),
        putImageData: vi.fn(),
        translate: vi.fn(),
        rotate: vi.fn(),
        scale: vi.fn(),
        save: vi.fn(),
        restore: vi.fn()
      }),
      width: 100,
      height: 100,
      toDataURL: vi.fn(() => "data:image/jpeg;base64,mocked")
    };

    global.Image = class {
      onload: (() => void) | null = null;
      src = "";
      width = 100;
      height = 100;
      constructor() {
        setTimeout(() => this.onload?.(), 0);
      }
    } as any;

    const originalCreateElement = document.createElement;
    document.createElement = (tagName: string) => {
      if (tagName === 'canvas') {
        return mockCanvas as any;
      }
      return originalCreateElement.call(document, tagName);
    };
    
    render(<ImageEditor currentImage="test-image.jpg" alt="Test" onSave={mockOnSave} />);
    
    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    await new Promise(resolve => setTimeout(resolve, 10));
    
    expect(mockOnSave).toHaveBeenCalledWith({
      url: expect.stringContaining("data:image/jpeg"),
      alt: "Test"
    });

    document.createElement = originalCreateElement;
  });
});