import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { TypographySection } from "./TypographySection";

describe("TypographySection", () => {
  const mockProps = {
    fonts: {
      heading: "Inter, system-ui, sans-serif",
      body: "Georgia, serif"
    },
    primaryColor: "#3b82f6",
    headingFont: "Inter, system-ui, sans-serif",
    onFontUpdate: vi.fn()
  };

  it("renders typography section with heading and body font pickers", () => {
    render(<TypographySection {...mockProps} />);
    
    expect(screen.getByText("🔤 Typography")).toBeInTheDocument();
    expect(screen.getByText("Heading Font")).toBeInTheDocument();
    expect(screen.getByText("Body Font")).toBeInTheDocument();
  });

  it("displays current font values", () => {
    render(<TypographySection {...mockProps} />);
    
    expect(screen.getByText("Heading Font")).toBeInTheDocument();
    expect(screen.getByText("Body Font")).toBeInTheDocument();
  });

  it("renders font picker components", () => {
    render(<TypographySection {...mockProps} />);
    
    const fontPickers = screen.getAllByRole("combobox");
    expect(fontPickers).toHaveLength(2);
  });
}); 