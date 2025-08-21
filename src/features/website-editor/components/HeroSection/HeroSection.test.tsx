import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  const mockProps = {
    heroTitle: "Welcome to Our Website",
    heroSubtitle: "Your trusted partner in digital solutions",
    primaryColor: "#3b82f6",
    headingFont: "Inter, system-ui, sans-serif",
    editingFields: {},
    onTextUpdate: vi.fn(),
    onToggleEditing: vi.fn()
  };

  it("renders hero section with title and subtitle", () => {
    render(<HeroSection {...mockProps} />);
    
    expect(screen.getByText("🚀 Hero Section")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  it("displays current hero title", () => {
    render(<HeroSection {...mockProps} />);
    
    expect(screen.getByText("Welcome to Our Website")).toBeInTheDocument();
  });

  it("displays current hero subtitle", () => {
    render(<HeroSection {...mockProps} />);
    
    expect(screen.getByText("Your trusted partner in digital solutions")).toBeInTheDocument();
  });

  it("renders inline text components for editing", () => {
    render(<HeroSection {...mockProps} />);
    
    const editableTexts = screen.getAllByText(/Welcome to Our Website|Your trusted partner in digital solutions/);
    expect(editableTexts).toHaveLength(2);
  });

  it("handles empty hero text", () => {
    const propsWithEmptyText = {
      ...mockProps,
      heroTitle: "",
      heroSubtitle: ""
    };
    
    render(<HeroSection {...propsWithEmptyText} />);
    
    expect(screen.getByText("🚀 Hero Section")).toBeInTheDocument();
  });
}); 