import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TitleColorSection } from "./TitleColorSection";

const defaultProps = {
  primaryColor: "#3b82f6",
  headingFont: "Inter",
  onTitleColorUpdate: vi.fn()
};

describe("TitleColorSection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders title color section with heading", () => {
    render(<TitleColorSection {...defaultProps} />);
    
    expect(screen.getByText("🎯 Title Colors")).toBeInTheDocument();
  });

  it("displays current title color", () => {
    render(<TitleColorSection {...defaultProps} />);
    
    expect(screen.getByText("#3b82f6")).toBeInTheDocument();
  });

  it("calls onTitleColorUpdate when color is changed", () => {
    const onTitleColorUpdate = vi.fn();
    render(<TitleColorSection {...defaultProps} onTitleColorUpdate={onTitleColorUpdate} />);
    
    const colorButtons = screen.getAllByRole("button");
    fireEvent.click(colorButtons[0]);
    
    expect(onTitleColorUpdate).toHaveBeenCalledTimes(1);
  });

  it("renders TitleColorPicker component", () => {
    render(<TitleColorSection {...defaultProps} />);
    
    expect(screen.getByText("All Title Colors")).toBeInTheDocument();
  });
});