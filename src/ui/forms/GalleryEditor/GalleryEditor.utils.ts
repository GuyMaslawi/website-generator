import { GALLERY_DEFAULTS, GALLERY_ID_PREFIX } from "./GalleryEditor.consts";

interface GalleryItem {
  id: string;
  url: string;
  alt: string;
}

export const createNewGalleryItem = (): GalleryItem => ({
  id: `${GALLERY_ID_PREFIX}${Date.now()}`,
  url: "",
  alt: GALLERY_DEFAULTS.ALT
});

export const updateGalleryItem = (
  gallery: GalleryItem[],
  itemId: string,
  imageData: { url: string; alt: string }
): GalleryItem[] => {
  return gallery.map(item =>
    item.id === itemId
      ? { ...item, url: imageData.url, alt: imageData.alt }
      : item
  );
};

export const removeGalleryItemById = (
  gallery: GalleryItem[],
  itemId: string
): GalleryItem[] => {
  return gallery.filter(item => item.id !== itemId);
};

export const hasSavedImage = (item: GalleryItem): boolean => {
  return Boolean(item.url && item.url.trim() !== "");
};

export const getDisplayImageData = (
  item: GalleryItem,
  tempImages: Record<string, { url: string; alt: string }>
): { displayUrl: string; displayAlt: string } => {
  const hasSaved = hasSavedImage(item);
  const displayUrl = hasSaved ? item.url : (tempImages[item.id]?.url || "");
  const displayAlt = hasSaved ? item.alt : (tempImages[item.id]?.alt || "");

  return { displayUrl, displayAlt };
};

export const shouldShowTempIndicator = (
  item: GalleryItem,
  tempImages: Record<string, { url: string; alt: string }>
): boolean => {
  return !!(tempImages[item.id] && !hasSavedImage(item));
}; 