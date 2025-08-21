import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { InlineText } from "./InlineText";

const defaultProps = {
    content: "Test content",
    onSave: vi.fn(),
    placeholder: "Click to edit",
    isEditing: false,
    onEditToggle: vi.fn()
};

describe("InlineText", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders content in display mode", () => {
        render(<InlineText {...defaultProps} />);
        expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("renders placeholder when content is empty", () => {
        render(<InlineText {...defaultProps} content="" />);
        const editableText = screen.getByTestId("editable-text");
        expect(editableText).toHaveAttribute("data-placeholder", "Click to edit");
    });

    it("switches to edit mode on double click", () => {
        render(<InlineText {...defaultProps} />);
        const textElement = screen.getByText("Test content");
        fireEvent.doubleClick(textElement);
        expect(defaultProps.onEditToggle).toHaveBeenCalled();
    });

    it("renders input in edit mode", () => {
        render(<InlineText {...defaultProps} isEditing={true} />);
        expect(screen.getByDisplayValue("Test content")).toBeInTheDocument();
        expect(screen.getByText("Save")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
    });

    it("saves content when save button is clicked", () => {
        render(<InlineText {...defaultProps} isEditing={true} />);
        const input = screen.getByDisplayValue("Test content");
        fireEvent.change(input, { target: { value: "Updated content" } });
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
        expect(defaultProps.onSave).toHaveBeenCalledWith("Updated content");
        expect(defaultProps.onEditToggle).toHaveBeenCalled();
    });

    it("cancels edit when cancel button is clicked", () => {
        render(<InlineText {...defaultProps} isEditing={true} />);
        const cancelButton = screen.getByText("Cancel");
        fireEvent.click(cancelButton);
        expect(defaultProps.onEditToggle).toHaveBeenCalled();
    });

    it("saves content on Enter key", () => {
        render(<InlineText {...defaultProps} isEditing={true} />);
        const input = screen.getByDisplayValue("Test content");
        fireEvent.change(input, { target: { value: "Updated content" } });
        fireEvent.keyDown(input, { key: "Enter" });
        expect(defaultProps.onSave).toHaveBeenCalledWith("Updated content");
        expect(defaultProps.onEditToggle).toHaveBeenCalled();
    });

    it("cancels edit on Escape key", () => {
        render(<InlineText {...defaultProps} isEditing={true} />);
        const input = screen.getByDisplayValue("Test content");
        fireEvent.keyDown(input, { key: "Escape" });
        expect(defaultProps.onEditToggle).toHaveBeenCalled();
    });

    it("updates input value when typing", () => {
        render(<InlineText {...defaultProps} isEditing={true} />);
        const input = screen.getByDisplayValue("Test content");
        fireEvent.change(input, { target: { value: "Updated content" } });
        expect(input).toHaveValue("Updated content");
    });
}); 