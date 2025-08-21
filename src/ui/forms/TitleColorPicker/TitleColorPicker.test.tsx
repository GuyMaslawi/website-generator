import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TitleColorPicker } from "./TitleColorPicker";

const defaultProps = {
  value: "#3b82f6",
  onChange: vi.fn(),
  label: "Title Color"
};

describe("TitleColorPicker", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders with label and current color", () => {
    render(<TitleColorPicker {...defaultProps} />);
    
    expect(screen.getByText("Title Color")).toBeInTheDocument();
    expect(screen.getByText("#3b82f6")).toBeInTheDocument();
  });

  it("displays preset color buttons", () => {
    render(<TitleColorPicker {...defaultProps} />);
    
    const colorButtons = screen.getAllByRole("button");
    expect(colorButtons.length).toBeGreaterThan(0);
  });

  it("calls onChange when a preset color is clicked", () => {
    const onChange = vi.fn();
    render(<TitleColorPicker {...defaultProps} onChange={onChange} />);
    
    const firstColorButton = screen.getAllByRole("button")[0];
    fireEvent.click(firstColorButton);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("shows selected state for current color", () => {
    render(<TitleColorPicker {...defaultProps} value="#1F6FEB" />);
    
    const selectedButton = screen.getByTitle("Set title color to #1F6FEB");
    expect(selectedButton).toBeInTheDocument();
  });
});