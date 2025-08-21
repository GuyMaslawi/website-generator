import { memo, useMemo } from "react";
import { InlineText } from "@/ui/forms/InlineText/InlineText";
import { Section, SectionContent, SectionTitle, Field, FieldContent, FieldLabel } from "@/features/website-editor/EditorShell.style";

interface HeroSectionProps {
  heroTitle: string;
  heroSubtitle: string;
  primaryColor: string;
  headingFont: string;
  editingFields: Record<string, boolean>;
  onTextUpdate: (path: string) => (newContent: string) => void;
  onToggleEditing: (path: string) => () => void;
}

export const HeroSection = memo<HeroSectionProps>(({
  heroTitle,
  heroSubtitle,
  primaryColor,
  headingFont,
  editingFields,
  onTextUpdate,
  onToggleEditing
}) => {

  const titleHandlers = useMemo(() => ({
    onSave: onTextUpdate("heroTitle"),
    onEditToggle: onToggleEditing("heroTitle"),
    isEditing: editingFields["heroTitle"] || false
  }), [onTextUpdate, onToggleEditing, editingFields]);

  const subtitleHandlers = useMemo(() => ({
    onSave: onTextUpdate("heroSubtitle"),
    onEditToggle: onToggleEditing("heroSubtitle"),
    isEditing: editingFields["heroSubtitle"] || false
  }), [onTextUpdate, onToggleEditing, editingFields]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          🚀 Hero Section
        </SectionTitle>
        <Field>
          <FieldContent>
            <FieldLabel>Title</FieldLabel>
            <InlineText
              content={heroTitle}
              onSave={titleHandlers.onSave}
              placeholder="Enter hero title"
              isEditing={titleHandlers.isEditing}
              onEditToggle={titleHandlers.onEditToggle}
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldContent>
            <FieldLabel>Subtitle</FieldLabel>
            <InlineText
              content={heroSubtitle}
              onSave={subtitleHandlers.onSave}
              placeholder="Enter hero subtitle"
              isEditing={subtitleHandlers.isEditing}
              onEditToggle={subtitleHandlers.onEditToggle}
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

HeroSection.displayName = "HeroSection"; 