import { memo, useMemo } from "react";
import { FontPicker } from "@/ui/forms/font-picker/FontPicker";
import { Section, SectionContent, SectionTitle, Field, FieldContent, FieldLabel } from "@/features/website-editor/EditorShell.style";

interface TypographySectionProps {
  fonts: {
    heading: string;
    body: string;
  };
  primaryColor: string;
  headingFont: string;
  onFontUpdate: (path: string) => (newFont: string) => void;
}

export const TypographySection = memo<TypographySectionProps>(({
  fonts,
  primaryColor,
  headingFont,
  onFontUpdate
}) => {
  const fontHandlers = useMemo(() => ({
    heading: onFontUpdate("styling.fonts.heading"),
    body: onFontUpdate("styling.fonts.body")
  }), [onFontUpdate]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          🔤 Typography
        </SectionTitle>
        <Field>
          <FieldContent>
            <FieldLabel>Heading Font</FieldLabel>
            <FontPicker
              value={fonts.heading}
              onChange={fontHandlers.heading}
              type="heading"
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldContent>
            <FieldLabel>Body Font</FieldLabel>
            <FontPicker
              value={fonts.body}
              onChange={fontHandlers.body}
              type="body"
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

TypographySection.displayName = "TypographySection"; 