import { memo, useMemo } from "react";
import { InlineText } from "@/ui/forms/InlineText/InlineText";
import { Section, SectionContent, SectionTitle, Field, FieldContent, FieldLabel } from "@/features/website-editor/EditorShell.style";

interface AboutSectionProps {
  aboutText: string;
  primaryColor: string;
  headingFont: string;
  editingFields: Record<string, boolean>;
  onTextUpdate: (path: string) => (newContent: string) => void;
  onToggleEditing: (path: string) => () => void;
}

export const AboutSection = memo<AboutSectionProps>(({
  aboutText,
  primaryColor,
  headingFont,
  editingFields,
  onTextUpdate,
  onToggleEditing
}) => {
  const aboutHandlers = useMemo(() => ({
    onSave: onTextUpdate("aboutText"),
    onEditToggle: onToggleEditing("aboutText"),
    isEditing: editingFields["aboutText"] || false
  }), [onTextUpdate, onToggleEditing, editingFields]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          💡 About Section
        </SectionTitle>
        <Field>
          <FieldContent>
            <FieldLabel>About Text</FieldLabel>
            <InlineText
              content={aboutText}
              onSave={aboutHandlers.onSave}
              placeholder="Enter about text"
              isEditing={aboutHandlers.isEditing}
              onEditToggle={aboutHandlers.onEditToggle}
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

AboutSection.displayName = "AboutSection"; 