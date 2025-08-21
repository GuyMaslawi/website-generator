import { memo } from "react";
import { GalleryEditor } from "@/ui/forms/GalleryEditor/GalleryEditor";
import { Section, SectionContent, SectionTitle } from "@/features/website-editor/EditorShell.style";

interface GallerySectionProps {
  gallery: any[];
  primaryColor: string;
  headingFont: string;
  onGalleryUpdate: (gallery: any[]) => void;
}

export const GallerySection = memo<GallerySectionProps>(({
  gallery,
  primaryColor,
  headingFont,
  onGalleryUpdate
}) => (
  <Section>
    <SectionContent>
      <SectionTitle 
        primaryColor={primaryColor}
        headingFont={headingFont}
      >
        🖼️ Gallery
      </SectionTitle>
      <GalleryEditor
        gallery={gallery}
        onUpdate={onGalleryUpdate}
      />
    </SectionContent>
  </Section>
));

GallerySection.displayName = "GallerySection"; 