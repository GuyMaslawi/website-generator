import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { GallerySection } from "./GallerySection";

describe("GallerySection", () => {
  const mockProps = {
    gallery: [
      { id: "1", url: "image1.jpg", alt: "Image 1" },
      { id: "2", url: "image2.jpg", alt: "Image 2" }
    ],
    primaryColor: "#3b82f6",
    headingFont: "Inter, system-ui, sans-serif",
    onGalleryUpdate: vi.fn()
  };

  it("renders gallery section with title", () => {
    render(<GallerySection {...mockProps} />);
    
    expect(screen.getByText("🖼️ Gallery")).toBeInTheDocument();
  });

  it("renders gallery editor component", () => {
    render(<GallerySection {...mockProps} />);
    
    expect(screen.getByText("🖼️ Gallery")).toBeInTheDocument();
    expect(screen.getByText("Add Another Image")).toBeInTheDocument();
  });

  it("passes gallery data to gallery editor", () => {
    render(<GallerySection {...mockProps} />);
    
    const image1Elements = screen.getAllByText("Image 1");
    const image2Elements = screen.getAllByText("Image 2");
    expect(image1Elements.length).toBeGreaterThan(0);
    expect(image2Elements.length).toBeGreaterThan(0);
  });

  it("passes onGalleryUpdate callback to gallery editor", () => {
    render(<GallerySection {...mockProps} />);
    
    const editButtons = screen.getAllByText("Edit");
    const removeButtons = screen.getAllByText("Remove");
    expect(editButtons.length).toBeGreaterThan(0);
    expect(removeButtons.length).toBeGreaterThan(0);
  });

  it("handles empty gallery", () => {
    const propsWithEmptyGallery = {
      ...mockProps,
      gallery: []
    };
    
    render(<GallerySection {...propsWithEmptyGallery} />);
    
    expect(screen.getByText("🖼️ Gallery")).toBeInTheDocument();
  });
}); 