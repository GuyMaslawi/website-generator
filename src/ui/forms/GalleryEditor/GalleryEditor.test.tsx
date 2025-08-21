import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { GalleryEditor } from "./GalleryEditor";

vi.mock("../../../shared/store/useWebsiteStore", () => ({
    useWebsiteStore: () => ({
        present: {
            content: {
                gallery: [
                    {
                        id: "g1",
                        url: "",
                        alt: "Placeholder 1"
                    }
                ]
            }
        },
        tempImages: {},
        setTempImage: vi.fn(),
        clearTempImage: vi.fn(),
        update: vi.fn()
    })
}));

const mockGallery = [
  { id: "g1", url: "image1.jpg", alt: "Image 1" },
  { id: "g2", url: "", alt: "Image 2" }
];

vi.mock("../image-editor/ImageEditor", () => ({
  ImageEditor: ({ onSave, currentImage, alt }: any) => (
    <div data-testid="image-editor">
      <span>Editing: {currentImage || "new image"}</span>
      <button onClick={() => onSave({ url: "new-image.jpg", alt: alt || "New image" })}>
        Save Image
      </button>
    </div>
  )
}));

describe("GalleryEditor", () => {
  const mockOnUpdate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders gallery items", () => {
    render(<GalleryEditor gallery={mockGallery} onUpdate={mockOnUpdate} />);
    
    const imageHeaders = screen.getAllByRole("heading", { level: 4 });
    expect(imageHeaders).toHaveLength(2);
    expect(imageHeaders[0]).toHaveTextContent("Image 1");
    expect(imageHeaders[1]).toHaveTextContent("Image 2");
  });

  it("shows empty state when no images", () => {
    render(<GalleryEditor gallery={[]} onUpdate={mockOnUpdate} />);
    
    expect(screen.getByText("No gallery images yet")).toBeInTheDocument();
    expect(screen.getByText("Add First Image")).toBeInTheDocument();
  });

  it("adds new gallery item", () => {
    render(<GalleryEditor gallery={mockGallery} onUpdate={mockOnUpdate} />);
    
    const addButton = screen.getByText("Add Another Image");
    fireEvent.click(addButton);
    
    expect(mockOnUpdate).toHaveBeenCalledWith([
      ...mockGallery,
      expect.objectContaining({
        url: "",
        alt: "New image"
      })
    ]);
  });

  it("removes gallery item", () => {
    render(<GalleryEditor gallery={mockGallery} onUpdate={mockOnUpdate} />);
    
    const removeButtons = screen.getAllByText("Remove");
    fireEvent.click(removeButtons[0]);
    
    expect(mockOnUpdate).toHaveBeenCalledWith([mockGallery[1]]);
  });

  it("opens image editor", () => {
    render(<GalleryEditor gallery={mockGallery} onUpdate={mockOnUpdate} />);
    
    const editButtons = screen.getAllByText("Edit");
    fireEvent.click(editButtons[0]);
    
    expect(screen.getByTestId("image-editor")).toBeInTheDocument();
  });
});