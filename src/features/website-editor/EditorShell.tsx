import { useState, useCallback, memo } from "react";
import { useWebsiteStore } from "@/shared/store/useWebsiteStore";
import { 
  HeroSection,
  AboutSection,
  ContentSection,
  ContentColorSection,
  TitleColorSection,
  TypographySection,
  ServicesSection,
  GallerySection,
  ContactSection
} from "./components";
import { EditorContainer, EditorContent, EditorHeader, EditorTitle, EditorSubtitle } from "./EditorShell.style";
import {
  createTextUpdateHandler,
  createTitleColorUpdateHandler,
  createFontUpdateHandler,
  createServicesUpdateHandler,
  createGalleryUpdateHandler,
  createToggleEditingHandler
} from "./EditorShell.utils";

export const EditorShell = memo(() => {
  const { present, update } = useWebsiteStore();
  const [editingFields, setEditingFields] = useState<Record<string, boolean>>({});
  
  const handleTextUpdate = useCallback(
    createTextUpdateHandler(update, setEditingFields),
    [update, setEditingFields]
  );
  


  const handleTitleColorUpdate = useCallback(
    createTitleColorUpdateHandler(update),
    [update]
  );

  const handleContentColorUpdate = useCallback((newColor: string) => {
    update('styling.colors.secondary', newColor);
  }, [update]);

  const handleFontUpdate = useCallback(
    createFontUpdateHandler(update),
    [update]
  );

  const handleServicesUpdate = useCallback(
    createServicesUpdateHandler(update),
    [update]
  );

  const handleGalleryUpdate = useCallback(
    createGalleryUpdateHandler(update),
    [update]
  );

  const toggleEditing = useCallback(
    createToggleEditingHandler(setEditingFields),
    [setEditingFields]
  );
  
  return (
    <EditorContainer>
      <EditorContent>
        <EditorHeader>
          <EditorTitle>Website Builder</EditorTitle>
          <EditorSubtitle>Craft your perfect website with our intuitive editor</EditorSubtitle>
        </EditorHeader>
        
        <HeroSection
          heroTitle={present.content.heroTitle}
          heroSubtitle={present.content.heroSubtitle}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          editingFields={editingFields}
          onTextUpdate={handleTextUpdate}
          onToggleEditing={toggleEditing}
        />
        
        <AboutSection
          aboutText={present.content.aboutText}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          editingFields={editingFields}
          onTextUpdate={handleTextUpdate}
          onToggleEditing={toggleEditing}
        />
        
        <ContentSection
          aboutText={present.content.aboutText}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          editingFields={editingFields}
          onTextUpdate={handleTextUpdate}
          onToggleEditing={toggleEditing}
        />
        
        <ContentColorSection
          contentColor={present.styling.colors.secondary}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          onContentColorUpdate={handleContentColorUpdate}
        />
        
        <TitleColorSection
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          onTitleColorUpdate={handleTitleColorUpdate}
        />
        
        <TypographySection
          fonts={present.styling.fonts}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          onFontUpdate={handleFontUpdate}
        />
        
        <ServicesSection
          services={present.content.services}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          onServicesUpdate={handleServicesUpdate}
        />
        
        <GallerySection
          gallery={present.content.gallery}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          onGalleryUpdate={handleGalleryUpdate}
        />
        
        <ContactSection
          contactInfo={present.content.contactInfo}
          primaryColor={present.styling.colors.primary}
          headingFont={present.styling.fonts.heading}
          editingFields={editingFields}
          onTextUpdate={handleTextUpdate}
          onToggleEditing={toggleEditing}
        />
      </EditorContent>
    </EditorContainer>
  );
});

EditorShell.displayName = "EditorShell"; 