import { GalleryItem, GalleryItemData } from "./LivePreview.consts";

export const processGalleryItems = (
    gallery: GalleryItem[],
    tempImages: Record<string, { url: string; alt: string }>
): GalleryItemData[] => {
    return gallery.map((item) => {
        const tempImage = tempImages[item.id];
        const hasSavedImage = !!item.url;
        const displayUrl = hasSavedImage ? item.url : (tempImage?.url || "");
        const displayAlt = hasSavedImage ? item.alt : (tempImage?.alt || "");

        return {
            item,
            displayUrl,
            displayAlt,
            hasSavedImage,
            tempImage
        };
    });
};

