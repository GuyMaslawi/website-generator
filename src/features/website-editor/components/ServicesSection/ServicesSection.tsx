import { memo } from "react";
import { ServiceEditor } from "@/ui/forms/ServiceEditor/ServiceEditor";
import { Section, SectionContent, SectionTitle } from "@/features/website-editor/EditorShell.style";

interface ServicesSectionProps {
  services: any[];
  primaryColor: string;
  headingFont: string;
  onServicesUpdate: (services: any[]) => void;
}

export const ServicesSection = memo<ServicesSectionProps>(({
  services,
  primaryColor,
  headingFont,
  onServicesUpdate
}) => (
  <Section>
    <SectionContent>
      <SectionTitle 
        primaryColor={primaryColor}
        headingFont={headingFont}
      >
        🛠️ Services
      </SectionTitle>
      <ServiceEditor
        services={services}
        onUpdate={onServicesUpdate}
      />
    </SectionContent>
  </Section>
));

ServicesSection.displayName = "ServicesSection"; 