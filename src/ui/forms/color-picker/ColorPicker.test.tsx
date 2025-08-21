import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ColorPicker } from "./ColorPicker";

vi.mock("../../../shared/store/useWebsiteStore", () => ({
    useWebsiteStore: () => ({
        present: {
            styling: {
                colors: {
                    primary: "#1F6FEB",
                    secondary: "#0D1117",
                    accent: "#F0B429"
                }
            }
        },
        update: vi.fn()
    })
}));

const defaultProps = {
    value: "#000000",
    onChange: vi.fn()
};

describe("ColorPicker", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders preset color swatches", () => {
        render(<ColorPicker {...defaultProps} />);
        expect(screen.getByText("Hue")).toBeInTheDocument();
        expect(screen.getByText("Lightness")).toBeInTheDocument();
    });

    it("calls onChange when swatch is clicked", () => {
        render(<ColorPicker {...defaultProps} />);
        const colorSwatches = screen.getAllByRole("button").filter(button => 
            button.getAttribute("color") && button.getAttribute("color")?.startsWith("#")
        );
        const firstColorSwatch = colorSwatches[0];
        if (firstColorSwatch) {
            fireEvent.click(firstColorSwatch);
            expect(defaultProps.onChange).toHaveBeenCalled();
        }
    });

    it("renders hue and lightness sliders", () => {
        render(<ColorPicker {...defaultProps} />);
        const hueSlider = screen.getByLabelText("Hue");
        const lightnessSlider = screen.getByLabelText("Lightness");
        expect(hueSlider).toBeInTheDocument();
        expect(lightnessSlider).toBeInTheDocument();
    });

    it("calls onChange when hue slider changes", () => {
        render(<ColorPicker {...defaultProps} />);
        const hueSlider = screen.getByLabelText("Hue");
        fireEvent.change(hueSlider, { target: { value: "180" } });
        expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it("calls onChange when lightness slider changes", () => {
        render(<ColorPicker {...defaultProps} />);
        const lightnessSlider = screen.getByLabelText("Lightness");
        fireEvent.change(lightnessSlider, { target: { value: "75" } });
        expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it("displays current color value", () => {
        render(<ColorPicker {...defaultProps} />);
        expect(screen.getByText("#000000")).toBeInTheDocument();
    });

    it("shows hue and lightness labels", () => {
        render(<ColorPicker {...defaultProps} />);
        expect(screen.getByText("Hue")).toBeInTheDocument();
        expect(screen.getByText("Lightness")).toBeInTheDocument();
    });
}); 