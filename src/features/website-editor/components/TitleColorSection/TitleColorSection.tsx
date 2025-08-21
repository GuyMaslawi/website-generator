import { memo, useCallback } from "react";
import { TitleColorPicker } from "@/ui/forms/TitleColorPicker/TitleColorPicker";
import { Section, SectionContent, SectionTitle, Field, FieldContent } from "@/features/website-editor/EditorShell.style";

interface TitleColorSectionProps {
  primaryColor: string;
  headingFont: string;
  onTitleColorUpdate: (newColor: string) => void;
}

export const TitleColorSection = memo<TitleColorSectionProps>(({
  primaryColor,
  headingFont,
  onTitleColorUpdate
}) => {
  const handleTitleColorChange = useCallback((newColor: string) => {
    console.log('Title color update:', newColor);
    onTitleColorUpdate(newColor);
  }, [onTitleColorUpdate]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          🎯 Title Colors
        </SectionTitle>
        <Field>
          <FieldContent>
            <TitleColorPicker
              value={primaryColor}
              onChange={handleTitleColorChange}
              label="All Title Colors"
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

TitleColorSection.displayName = "TitleColorSection";