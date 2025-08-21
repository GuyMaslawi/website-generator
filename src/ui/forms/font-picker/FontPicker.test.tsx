import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { FontPicker } from "./FontPicker";

vi.mock("../../../shared/store/useWebsiteStore", () => ({
    useWebsiteStore: () => ({
        present: {
            styling: {
                fonts: {
                    heading: "Inter, system-ui, sans-serif",
                    body: "Inter, system-ui, sans-serif"
                }
            }
        },
        update: vi.fn()
    })
}));

describe("FontPicker", () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders font selector with options", () => {
    render(<FontPicker value="Inter, system-ui, sans-serif" onChange={mockOnChange} />);
    
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("Inter, system-ui, sans-serif");
  });

  it("shows label when provided", () => {
    render(<FontPicker value="Arial, sans-serif" onChange={mockOnChange} label="Body Font" />);
    
    expect(screen.getByText("Body Font")).toBeInTheDocument();
  });

  it("displays appropriate preview text for heading type", () => {
    render(<FontPicker value="Arial, sans-serif" onChange={mockOnChange} type="heading" />);
    
    expect(screen.getByText("The Quick Brown Fox")).toBeInTheDocument();
  });

  it("displays appropriate preview text for body type", () => {
    render(<FontPicker value="Arial, sans-serif" onChange={mockOnChange} type="body" />);
    
    expect(screen.getByText("The quick brown fox jumps over the lazy dog")).toBeInTheDocument();
  });

  it("calls onChange when font is selected", () => {
    render(<FontPicker value="Inter, system-ui, sans-serif" onChange={mockOnChange} />);
    
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Georgia, serif" } });
    
    expect(mockOnChange).toHaveBeenCalledWith("Georgia, serif");
  });
});