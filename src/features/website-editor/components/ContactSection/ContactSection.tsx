import { memo, useMemo } from "react";
import { InlineText } from "@/ui/forms/InlineText/InlineText";
import { Section, SectionContent, SectionTitle, Field, FieldContent, FieldLabel } from "@/features/website-editor/EditorShell.style";

interface ContactSectionProps {
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  primaryColor: string;
  headingFont: string;
  editingFields: Record<string, boolean>;
  onTextUpdate: (path: string) => (newContent: string) => void;
  onToggleEditing: (path: string) => () => void;
}

export const ContactSection = memo<ContactSectionProps>(({
  contactInfo,
  primaryColor,
  headingFont,
  editingFields,
  onTextUpdate,
  onToggleEditing
}) => {
  const contactHandlers = useMemo(() => ({
    phone: {
      onSave: onTextUpdate("contactInfo.phone"),
      onEditToggle: onToggleEditing("contactInfo.phone"),
      isEditing: editingFields["contactInfo.phone"] || false
    },
    email: {
      onSave: onTextUpdate("contactInfo.email"),
      onEditToggle: onToggleEditing("contactInfo.email"),
      isEditing: editingFields["contactInfo.email"] || false
    },
    address: {
      onSave: onTextUpdate("contactInfo.address"),
      onEditToggle: onToggleEditing("contactInfo.address"),
      isEditing: editingFields["contactInfo.address"] || false
    }
  }), [onTextUpdate, onToggleEditing, editingFields]);

  return (
    <Section>
      <SectionContent>
        <SectionTitle 
          primaryColor={primaryColor}
          headingFont={headingFont}
        >
          📞 Contact Information
        </SectionTitle>
        <Field>
          <FieldContent>
            <FieldLabel>Phone</FieldLabel>
            <InlineText
              content={contactInfo.phone}
              onSave={contactHandlers.phone.onSave}
              placeholder="Enter phone number"
              isEditing={contactHandlers.phone.isEditing}
              onEditToggle={contactHandlers.phone.onEditToggle}
              validation={{ phone: true }}
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldContent>
            <FieldLabel>Email</FieldLabel>
            <InlineText
              content={contactInfo.email}
              onSave={contactHandlers.email.onSave}
              placeholder="Enter email address"
              isEditing={contactHandlers.email.isEditing}
              onEditToggle={contactHandlers.email.onEditToggle}
              validation={{ email: true }}
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldContent>
            <FieldLabel>Address</FieldLabel>
            <InlineText
              content={contactInfo.address}
              onSave={contactHandlers.address.onSave}
              placeholder="Enter address"
              isEditing={contactHandlers.address.isEditing}
              onEditToggle={contactHandlers.address.onEditToggle}
            />
          </FieldContent>
        </Field>
      </SectionContent>
    </Section>
  );
});

ContactSection.displayName = "ContactSection"; 