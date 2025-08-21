import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { AboutSection } from "./AboutSection";

describe("AboutSection", () => {
  const mockProps = {
    aboutText: "This is a sample about text for testing purposes.",
    primaryColor: "#3b82f6",
    headingFont: "Inter, system-ui, sans-serif",
    editingFields: {},
    onTextUpdate: vi.fn(),
    onToggleEditing: vi.fn()
  };

  it("renders about section with title", () => {
    render(<AboutSection {...mockProps} />);
    
    expect(screen.getByText("💡 About Section")).toBeInTheDocument();
  });

  it("displays current about text", () => {
    render(<AboutSection {...mockProps} />);
    
    expect(screen.getByText("This is a sample about text for testing purposes.")).toBeInTheDocument();
  });

  it("renders inline text component for editing", () => {
    render(<AboutSection {...mockProps} />);
    
    const editableText = screen.getByText("This is a sample about text for testing purposes.");
    expect(editableText).toBeInTheDocument();
  });

  it("handles empty about text", () => {
    const propsWithEmptyText = {
      ...mockProps,
      aboutText: ""
    };
    
    render(<AboutSection {...propsWithEmptyText} />);
    
    expect(screen.getByText("💡 About Section")).toBeInTheDocument();
  });
}); 