import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { ServiceEditor } from "./ServiceEditor";

vi.mock("../../store/useWebsiteStore", () => ({
    useWebsiteStore: () => ({
        present: {
            content: {
                services: [
                    {
                        id: "s1",
                        title: "Branding",
                        description: "Logos and palettes."
                    }
                ]
            }
        },
        update: vi.fn()
    })
}));

vi.mock("../InlineText/InlineText", () => ({
    InlineText: ({ content, onSave, placeholder }: any) => (
        <div data-testid="inline-text" onClick={() => onSave && onSave(content)}>
            {content || placeholder}
        </div>
    )
}));

const mockServices = [
    { id: "s1", title: "Service 1", description: "Description 1" },
    { id: "s2", title: "Service 2", description: "Description 2" }
];

describe("ServiceEditor", () => {
  const mockOnUpdate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all services", () => {
    render(<ServiceEditor services={mockServices} onUpdate={mockOnUpdate} />);
    
    const serviceHeaders = screen.getAllByRole("heading", { level: 4 });
    expect(serviceHeaders).toHaveLength(2);
    expect(serviceHeaders[0]).toHaveTextContent("Service 1");
    expect(serviceHeaders[1]).toHaveTextContent("Service 2");
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("adds new service", () => {
    render(<ServiceEditor services={mockServices} onUpdate={mockOnUpdate} />);
    
    const addButton = screen.getByText("Add Service");
    fireEvent.click(addButton);
    
    expect(mockOnUpdate).toHaveBeenCalledWith([
      ...mockServices,
      expect.objectContaining({
        title: "New Service",
        description: "Service description"
      })
    ]);
  });

  it("removes service", () => {
    render(<ServiceEditor services={mockServices} onUpdate={mockOnUpdate} />);
    
    const removeButtons = screen.getAllByText("Remove");
    fireEvent.click(removeButtons[0]);
    
    expect(mockOnUpdate).toHaveBeenCalledWith([mockServices[1]]);
  });
});