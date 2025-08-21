import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import App from "./App";

vi.mock("../features/website-editor/EditorShell", () => ({
    EditorShell: () => <div data-testid="editor-shell">Editor Shell</div>
}));

vi.mock("../features/website-preview/LivePreview", () => ({
    LivePreview: () => <div data-testid="live-preview">Live Preview</div>
}));

describe("App", () => {
    it("renders editor and preview sections", () => {
        render(<App />);
        
        expect(screen.getByTestId("editor-shell")).toBeDefined();
        expect(screen.getByTestId("live-preview")).toBeDefined();
    });

    it("has correct layout structure", () => {
        render(<App />);
        
        const editorSection = screen.getByTestId("editor-shell").parentElement;
        const previewSection = screen.getByTestId("live-preview").parentElement;
        
        expect(editorSection).toBeDefined();
        expect(previewSection).toBeDefined();
        expect(editorSection?.parentElement).toBe(previewSection?.parentElement);
    });
}); 