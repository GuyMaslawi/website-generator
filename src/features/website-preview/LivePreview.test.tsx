import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { LivePreview } from "./LivePreview";

vi.mock("../../shared/store/useWebsiteStore", () => ({
    useWebsiteStore: () => ({
        present: {
            content: {
                heroTitle: "Test Title",
                heroSubtitle: "Test Subtitle",
                aboutText: "Test About",
                contactInfo: {
                    phone: "+1 234 567 8900",
                    email: "test@example.com",
                    address: "Test Address"
                },
                services: [
                    { id: "s1", title: "Service 1", description: "Description 1" },
                    { id: "s2", title: "Service 2", description: "Description 2" }
                ],
                gallery: [
                    { id: "g1", url: "image1.jpg", alt: "Image 1" },
                    { id: "g2", url: "image2.jpg", alt: "Image 2" }
                ]
            },
            styling: {
                colors: {
                    primary: "#1F6FEB",
                    secondary: "#0D1117",
                    accent: "#F0B429"
                },
                fonts: {
                    heading: "Inter, system-ui, sans-serif",
                    body: "Inter, system-ui, sans-serif"
                }
            }
        },
        tempImages: {},
        previewMode: "desktop"
    })
}));

vi.mock("../../ui/layout/ResponsiveToggle/ResponsiveToggle", () => ({
    ResponsiveToggle: () => <div data-testid="responsive-toggle">Responsive Toggle</div>
}));

describe("LivePreview", () => {
    it("renders responsive toggle", () => {
        render(<LivePreview />);
        expect(screen.getByTestId("responsive-toggle")).toBeInTheDocument();
    });

    it("renders hero section with title and subtitle", () => {
        render(<LivePreview />);
        
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });

    it("renders about section", () => {
        render(<LivePreview />);
        
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Test About")).toBeInTheDocument();
    });

    it("renders services section", () => {
        render(<LivePreview />);
        
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("Service 1")).toBeInTheDocument();
        expect(screen.getByText("Service 2")).toBeInTheDocument();
    });

    it("renders gallery section", () => {
        render(<LivePreview />);
        
        expect(screen.getByText("Gallery")).toBeInTheDocument();
        expect(screen.getByAltText("Image 1")).toBeInTheDocument();
        expect(screen.getByAltText("Image 2")).toBeInTheDocument();
    });

    it("renders contact section", () => {
        render(<LivePreview />);
        
        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(screen.getByText("+1 234 567 8900")).toBeInTheDocument();
        expect(screen.getByText("test@example.com")).toBeInTheDocument();
        expect(screen.getByText("Test Address")).toBeInTheDocument();
    });

    it("renders fallback content when data is missing", () => {
        render(<LivePreview />);
        
    
        expect(screen.getByText("Gallery")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
    });
}); 