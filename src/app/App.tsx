import { memo } from "react";
import { EditorShell } from "@/features/website-editor/EditorShell";
import { LivePreview } from "@/features/website-preview/LivePreview";
import { ErrorBoundary } from "@/ui/common/ErrorBoundary/ErrorBoundary";
import { AppContainer, EditorSection, PreviewSection } from "./App.style";

export const App = memo(() => {
  return (
    <ErrorBoundary>
      <AppContainer>
        <EditorSection>
          <EditorShell />
        </EditorSection>
        <PreviewSection>
          <LivePreview />
        </PreviewSection>
      </AppContainer>
    </ErrorBoundary>
  );
});

App.displayName = "App";

export default App; 