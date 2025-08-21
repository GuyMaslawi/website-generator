import { memo, useMemo } from "react";
import { InlineText } from "@/ui/forms/InlineText/InlineText";
import { Section, SectionContent, SectionTitle, Field, FieldContent, FieldLabel } from "@/features/website-editor/EditorShell.style";

interface ContentSectionProps {
  aboutText: string;
  primaryColor: string;
  headingFont: string;
  editingFields: Record<string, boolean>;
  onTextUpdate: (path: string) => (newContent: string) => void;
  onToggleEditing: (path: string) => () => void;
}

export const ContentSection = memo<ContentSectionProps>(({
  aboutText,
  primaryColor,
  headingFont,
  editingFields,
  onTextUpdate,
  onToggleEditing
}) => {

  const textHandlers = useMemo(() => ({
    aboutText: onTextUpdate("aboutText")
  }), [onTextUpdate]);

  const toggleHandlers = useMemo(() => ({
    aboutText: onToggleEditing("aboutText")
  }), [onToggleEditing]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          📝 Content
        </SectionTitle>
        
        <Field>
          <FieldContent>
            <FieldLabel>About Text</FieldLabel>
            <InlineText
              content={aboutText}
              onSave={textHandlers.aboutText}
              onEditToggle={toggleHandlers.aboutText}
              isEditing={editingFields.aboutText || false}
              placeholder="Enter about text..."
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

ContentSection.displayName = "ContentSection";