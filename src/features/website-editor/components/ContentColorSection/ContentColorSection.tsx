import { memo, useCallback } from "react";
import { ColorPicker } from "@/ui/forms/color-picker/ColorPicker";
import { Section, SectionContent, SectionTitle, Field, FieldContent, FieldLabel } from "@/features/website-editor/EditorShell.style";

interface ContentColorSectionProps {
  contentColor: string;
  primaryColor: string;
  headingFont: string;
  onContentColorUpdate: (newColor: string) => void;
}

export const ContentColorSection = memo<ContentColorSectionProps>(({
  contentColor,
  primaryColor,
  headingFont,
  onContentColorUpdate
}) => {
  const handleContentColorChange = useCallback((newColor: string) => {
    onContentColorUpdate(newColor);
  }, [onContentColorUpdate]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          🎨 Content Colors
        </SectionTitle>
        <Field>
          <FieldContent>
            <FieldLabel>Content Color</FieldLabel>
            <ColorPicker
              value={contentColor}
              onChange={handleContentColorChange}
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

ContentColorSection.displayName = "ContentColorSection"; 