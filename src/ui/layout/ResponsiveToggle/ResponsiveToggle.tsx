import { memo, useCallback } from "react";
import { useWebsiteStore } from "@/shared/store/useWebsiteStore";
import { ToggleContainer, ToggleButton, ToggleGroup } from "./ResponsiveToggle.style";
import { PREVIEW_MODES, PREVIEW_LABELS } from "./ResponsiveToggle.consts";

// Simple SVG icons as components
const MobileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z"/>
  </svg>
);

const DesktopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
  </svg>
);

const TabletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
  </svg>
);

export const ResponsiveToggle = memo(() => {
  const { previewMode, setPreviewMode } = useWebsiteStore();
  
  const handleMobileClick = useCallback(() => {
    setPreviewMode(PREVIEW_MODES.MOBILE);
  }, [setPreviewMode]);

  const handleTabletClick = useCallback(() => {
    setPreviewMode(PREVIEW_MODES.TABLET);
  }, [setPreviewMode]);

  const handleDesktopClick = useCallback(() => {
    setPreviewMode(PREVIEW_MODES.DESKTOP);
  }, [setPreviewMode]);
  
  return (
    <ToggleContainer>
      <ToggleGroup>
        <ToggleButton
          isActive={previewMode === PREVIEW_MODES.MOBILE}
          onClick={handleMobileClick}
          title="Mobile view (375px)"
        >
          <MobileIcon />
          {PREVIEW_LABELS.MOBILE}
        </ToggleButton>
        <ToggleButton
          isActive={previewMode === PREVIEW_MODES.TABLET}
          onClick={handleTabletClick}
          title="Tablet view (768px)"
        >
          <TabletIcon />
          {PREVIEW_LABELS.TABLET}
        </ToggleButton>
        <ToggleButton
          isActive={previewMode === PREVIEW_MODES.DESKTOP}
          onClick={handleDesktopClick}
          title="Desktop view (1200px)"
        >
          <DesktopIcon />
          {PREVIEW_LABELS.DESKTOP}
        </ToggleButton>
      </ToggleGroup>
    </ToggleContainer>
  );
});

ResponsiveToggle.displayName = "ResponsiveToggle"; 