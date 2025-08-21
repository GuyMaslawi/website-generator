import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ServicesSection } from "./ServicesSection";

describe("ServicesSection", () => {
  const mockProps = {
    services: [
      { id: "1", title: "Service 1", description: "Description 1" },
      { id: "2", title: "Service 2", description: "Description 2" }
    ],
    primaryColor: "#3b82f6",
    headingFont: "Inter, system-ui, sans-serif",
    onServicesUpdate: vi.fn()
  };

  it("renders services section with title", () => {
    render(<ServicesSection {...mockProps} />);
    
    expect(screen.getByText("🛠️ Services")).toBeInTheDocument();
  });

  it("renders service editor component", () => {
    render(<ServicesSection {...mockProps} />);
    
    expect(screen.getByText("🛠️ Services")).toBeInTheDocument();
    expect(screen.getByText("Add Service")).toBeInTheDocument();
  });

  it("passes services data to service editor", () => {
    render(<ServicesSection {...mockProps} />);
    
    const service1Elements = screen.getAllByText("Service 1");
    const service2Elements = screen.getAllByText("Service 2");
    expect(service1Elements.length).toBeGreaterThan(0);
    expect(service2Elements.length).toBeGreaterThan(0);
  });

  it("passes onServicesUpdate callback to service editor", () => {
    render(<ServicesSection {...mockProps} />);
    
    const removeButtons = screen.getAllByText("Remove");
    expect(removeButtons.length).toBeGreaterThan(0);
  });

  it("handles empty services", () => {
    const propsWithEmptyServices = {
      ...mockProps,
      services: []
    };
    
    render(<ServicesSection {...propsWithEmptyServices} />);
    
    expect(screen.getByText("🛠️ Services")).toBeInTheDocument();
  });
}); 