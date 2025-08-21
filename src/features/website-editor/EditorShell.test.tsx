import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { EditorShell } from "./EditorShell";

vi.mock("./components", () => ({
    HeroSection: ({ heroTitle, heroSubtitle }: { heroTitle: string; heroSubtitle: string }) => (
        <section data-testid="hero-section">
            <h2>Hero Section</h2>
            <div>Title: {heroTitle}</div>
            <div>Subtitle: {heroSubtitle}</div>
        </section>
    ),
    ContentSection: ({ heroTitle, heroSubtitle }: { heroTitle: string; heroSubtitle: string }) => (
        <section data-testid="content-section">
            <h2>Content Section</h2>
            <div>Title: {heroTitle}</div>
            <div>Subtitle: {heroSubtitle}</div>
        </section>
    ),
    AboutSection: ({ aboutText }: { aboutText: string }) => (
        <section data-testid="about-section">
            <h2>About Section</h2>
            <div>About: {aboutText}</div>
        </section>
    ),
    ContentColorSection: () => (
        <section data-testid="content-color-section">
            <h2>Content Colors</h2>
            <div>Content Color</div>
            <div>Primary Color</div>
        </section>
    ),
    TitleColorSection: () => (
        <section data-testid="title-color-section">
            <h2>Title Colors</h2>
            <div>Title Color</div>
        </section>
    ),
    TypographySection: () => (
        <section data-testid="typography-section">
            <h2>Typography</h2>
        </section>
    ),
    ServicesSection: () => (
        <section data-testid="services-section">
            <h2>Services</h2>
        </section>
    ),
    GallerySection: () => (
        <section data-testid="gallery-section">
            <h2>Gallery</h2>
        </section>
    ),
    ContactSection: () => (
        <section data-testid="contact-section">
            <h2>Contact Information</h2>
            <div>Phone</div>
            <div>Email</div>
            <div>Address</div>
        </section>
    )
}));

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
                    {
                        id: "s1",
                        title: "Branding",
                        description: "Logos and palettes."
                    }
                ],
                gallery: [
                    {
                        id: "g1",
                        url: "",
                        alt: "Placeholder 1"
                    }
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
        update: vi.fn(),
        setTempImage: vi.fn(),
        clearTempImage: vi.fn()
    })
}));

describe("EditorShell", () => {
    it("renders all editor sections", () => {
        render(<EditorShell />);

        expect(screen.getByText("Hero Section")).toBeDefined();
        expect(screen.getByText("About Section")).toBeDefined();
        expect(screen.getByText("Content Colors")).toBeDefined();
        expect(screen.getByText("Contact Information")).toBeDefined();
    });

    it("renders hero title and subtitle fields", () => {
        render(<EditorShell />);

        const heroSection = screen.getByTestId("hero-section");
        expect(heroSection).toBeDefined();
        
        expect(screen.getByText("Title: Test Title")).toBeDefined();
        expect(screen.getByText("Subtitle: Test Subtitle")).toBeDefined();
    });

    it("renders color picker fields", () => {
        render(<EditorShell />);

        expect(screen.getByText("Content Color")).toBeDefined();
        expect(screen.getByText("Primary Color")).toBeDefined();
    });
}); 