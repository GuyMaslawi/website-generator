import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ResponsiveToggle } from "./ResponsiveToggle";
import { useWebsiteStore } from "@/shared/store/useWebsiteStore";

vi.mock("../../../shared/store/useWebsiteStore");

const mockUseWebsiteStore = useWebsiteStore as any;

describe("ResponsiveToggle", () => {
  const mockSetPreviewMode = vi.fn();
  
  beforeEach(() => {
    mockUseWebsiteStore.mockReturnValue({
      previewMode: "desktop",
      setPreviewMode: mockSetPreviewMode,
      present: {} as any,
      update: vi.fn(),
      tempImages: {},
      setTempImage: vi.fn(),
      clearTempImage: vi.fn()
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders with desktop mode by default", () => {
    render(<ResponsiveToggle />);
    
    expect(screen.getByText("Mobile")).toBeInTheDocument();
    expect(screen.getByText("Tablet")).toBeInTheDocument();
    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.getByTitle("Desktop view (1200px)")).toBeInTheDocument();
  });

  it("renders with mobile mode", () => {
    mockUseWebsiteStore.mockReturnValue({
      previewMode: "mobile",
      setPreviewMode: mockSetPreviewMode,
      present: {} as any,
      update: vi.fn(),
      tempImages: {},
      setTempImage: vi.fn(),
      clearTempImage: vi.fn()
    });

    render(<ResponsiveToggle />);
    
    expect(screen.getByTitle("Mobile view (375px)")).toBeInTheDocument();
  });

  it("calls setPreviewMode with mobile when mobile button is clicked", () => {
    render(<ResponsiveToggle />);
    
    const mobileButton = screen.getByText("Mobile");
    fireEvent.click(mobileButton);
    
    expect(mockSetPreviewMode).toHaveBeenCalledWith("mobile");
  });

  it("calls setPreviewMode with desktop when desktop button is clicked", () => {
    render(<ResponsiveToggle />);
    
    const desktopButton = screen.getByText("Desktop");
    fireEvent.click(desktopButton);
    
    expect(mockSetPreviewMode).toHaveBeenCalledWith("desktop");
  });

  it("shows correct preview info for mobile mode", () => {
    mockUseWebsiteStore.mockReturnValue({
      previewMode: "mobile",
      setPreviewMode: mockSetPreviewMode,
      present: {} as any,
      update: vi.fn(),
      tempImages: {},
      setTempImage: vi.fn(),
      clearTempImage: vi.fn()
    });

    render(<ResponsiveToggle />);
    
    expect(screen.getByTitle("Mobile view (375px)")).toBeInTheDocument();
  });

  it("shows correct preview info for desktop mode", () => {
    mockUseWebsiteStore.mockReturnValue({
      previewMode: "desktop",
      setPreviewMode: mockSetPreviewMode,
      present: {} as any,
      update: vi.fn(),
      tempImages: {},
      setTempImage: vi.fn(),
      clearTempImage: vi.fn()
    });

    render(<ResponsiveToggle />);
    
    expect(screen.getByTitle("Desktop view (1200px)")).toBeInTheDocument();
  });
}); 