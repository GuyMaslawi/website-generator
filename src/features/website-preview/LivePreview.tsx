import { memo, useMemo } from "react";
import { useWebsiteStore } from "@/shared/store/useWebsiteStore";
import { ResponsiveToggle } from "@/ui/layout/ResponsiveToggle/ResponsiveToggle";
import { PreviewContainer, PreviewContent, WebsitePreview, HeroSection, HeroTitle, HeroSubtitle, Section, SectionTitle, AboutText, ServicesGrid, ServiceCard, ServiceTitle, ServiceDescription, GalleryGrid, GalleryItem, GalleryPlaceholder, ContactInfo, ContactItem, ContactLabel, ContactValue } from "./LivePreview.style";
import {
  PREVIEW_DEFAULTS,
  createPreviewStyles,
} from "./LivePreview.consts";
import { processGalleryItems } from "./LivePreview.utils";

export const LivePreview = memo(() => {
  const { present, previewMode, tempImages } = useWebsiteStore();
  
  const previewStyles = useMemo(() => 
    createPreviewStyles(
      present.styling.fonts.body,
      present.styling.fonts.heading,
      present.styling.colors.primary,
      present.styling.colors.secondary,
      present.styling.colors.accent
    ), [present.styling.fonts.body, present.styling.fonts.heading, present.styling.colors.primary, present.styling.colors.secondary, present.styling.colors.accent]);

  const galleryItems = useMemo(() => 
    processGalleryItems(present.content.gallery, tempImages)
  , [present.content.gallery, tempImages]);


  
  return (
    <PreviewContainer>
      <ResponsiveToggle />
      <PreviewContent previewMode={previewMode}>
        <WebsitePreview bodyFont={previewStyles.bodyFont}>
          <HeroSection>
            <HeroTitle 
              primaryColor={previewStyles.primaryColor}
              headingFont={previewStyles.headingFont}
            >
              {present.content.heroTitle || PREVIEW_DEFAULTS.HERO_TITLE}
            </HeroTitle>
            <HeroSubtitle style={{ color: previewStyles.secondaryColor }}>
              {present.content.heroSubtitle || PREVIEW_DEFAULTS.HERO_SUBTITLE}
            </HeroSubtitle>
          </HeroSection>
          
          <Section>
            <SectionTitle 
              primaryColor={previewStyles.primaryColor}
              headingFont={previewStyles.headingFont}
            >
              About
            </SectionTitle>
            <AboutText style={{ color: previewStyles.secondaryColor }}>
              {present.content.aboutText || PREVIEW_DEFAULTS.ABOUT_TEXT}
            </AboutText>
          </Section>
          
          <Section>
            <SectionTitle 
              primaryColor={previewStyles.primaryColor}
              headingFont={previewStyles.headingFont}
            >
              Services
            </SectionTitle>
            <ServicesGrid>
              {present.content.services.map((service) => (
                <ServiceCard key={service.id} accentColor={previewStyles.accentColor}>
                  <ServiceTitle 
                    primaryColor={previewStyles.primaryColor}
                    headingFont={previewStyles.headingFont}
                  >
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription style={{ color: previewStyles.secondaryColor }}>
                    {service.description}
                  </ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Section>
          
          <Section>
            <SectionTitle 
              primaryColor={previewStyles.primaryColor}
              headingFont={previewStyles.headingFont}
            >
              Gallery
            </SectionTitle>
            <GalleryGrid>
              {galleryItems.map(({ item, displayUrl, displayAlt }) => (
                <GalleryItem key={item.id} accentColor={previewStyles.accentColor}>
                  {displayUrl ? (
                    <img 
                      src={displayUrl} 
                      alt={displayAlt || PREVIEW_DEFAULTS.GALLERY_ALT} 
                    />
                  ) : (
                    <GalleryPlaceholder>
                      {displayAlt || PREVIEW_DEFAULTS.GALLERY_PLACEHOLDER}
                    </GalleryPlaceholder>
                  )}
                </GalleryItem>
              ))}
            </GalleryGrid>
          </Section>
          
          <Section>
            <SectionTitle 
              primaryColor={previewStyles.primaryColor}
              headingFont={previewStyles.headingFont}
            >
              Contact
            </SectionTitle>
            <ContactInfo>
              <ContactItem>
                <ContactLabel style={{ color: previewStyles.secondaryColor }}>Phone:</ContactLabel>
                <ContactValue style={{ color: previewStyles.secondaryColor }}>{present.content.contactInfo.phone}</ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel style={{ color: previewStyles.secondaryColor }}>Email:</ContactLabel>
                <ContactValue style={{ color: previewStyles.secondaryColor }}>{present.content.contactInfo.email}</ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel style={{ color: previewStyles.secondaryColor }}>Address:</ContactLabel>
                <ContactValue style={{ color: previewStyles.secondaryColor }}>{present.content.contactInfo.address}</ContactValue>
              </ContactItem>
            </ContactInfo>
          </Section>
        </WebsitePreview>
      </PreviewContent>
    </PreviewContainer>
  );
});

LivePreview.displayName = "LivePreview"; 