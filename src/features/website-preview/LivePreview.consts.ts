export const PREVIEW_DEFAULTS = {
  HERO_TITLE: "Your Title Here",
  HERO_SUBTITLE: "Your subtitle here",
  ABOUT_TEXT: "Tell your story here",
  GALLERY_PLACEHOLDER: "Image placeholder",
  GALLERY_ALT: "Gallery image"
} as const;

export const PREVIEW_LAYOUT = {
  MOBILE_WIDTH: "375px",
  DESKTOP_WIDTH: "100%"
} as const;



export interface PreviewStyles {
  bodyFont: string;
  headingFont: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export const createPreviewStyles = (
  bodyFont: string,
  headingFont: string,
  primaryColor: string,
  secondaryColor: string,
  accentColor: string
): PreviewStyles => ({
  bodyFont,
  headingFont,
  primaryColor,
  secondaryColor,
  accentColor
});

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
}

export interface GalleryItemData {
  item: GalleryItem;
  displayUrl: string;
  displayAlt: string;
  hasSavedImage: boolean;
  tempImage?: { url: string; alt: string };
}