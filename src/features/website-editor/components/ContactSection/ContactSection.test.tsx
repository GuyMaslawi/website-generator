import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  const mockProps = {
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "contact@example.com",
      address: "123 Main St, City, State 12345"
    },
    primaryColor: "#3b82f6",
    headingFont: "Inter, system-ui, sans-serif",
    editingFields: {},
    onTextUpdate: vi.fn(),
    onToggleEditing: vi.fn()
  };

  it("renders contact section with title", () => {
    render(<ContactSection {...mockProps} />);
    
    expect(screen.getByText("📞 Contact Information")).toBeInTheDocument();
  });

  it("displays contact information fields", () => {
    render(<ContactSection {...mockProps} />);
    
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
  });

  it("shows current contact values", () => {
    render(<ContactSection {...mockProps} />);
    
    expect(screen.getByText("+1 (555) 123-4567")).toBeInTheDocument();
    expect(screen.getByText("contact@example.com")).toBeInTheDocument();
    expect(screen.getByText("123 Main St, City, State 12345")).toBeInTheDocument();
  });

  it("renders inline text components for editing", () => {
    render(<ContactSection {...mockProps} />);
    
    const editableTexts = screen.getAllByText(/\+1 \(555\) 123-4567|contact@example\.com|123 Main St, City, State 12345/);
    expect(editableTexts).toHaveLength(3);
  });
}); 