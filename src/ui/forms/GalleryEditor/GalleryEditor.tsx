import { useState, memo, useCallback } from "react";
import { useWebsiteStore } from "@/shared/store/useWebsiteStore";
import { ImageEditor } from "@/ui/forms/image-editor/ImageEditor";
import { GalleryContainer, GalleryItem, GalleryHeader, GalleryActions, GalleryPreview, Placeholder, PlaceholderText, AddButton, RemoveButton, EditButton, TempIndicator } from "./GalleryEditor.style";
import {
  createNewGalleryItem,
  updateGalleryItem,
  removeGalleryItemById,
  getDisplayImageData,
  shouldShowTempIndicator
} from "./GalleryEditor.utils";
import { GALLERY_MESSAGES } from "./GalleryEditor.consts";



interface GalleryItem {
  id: string;
  url: string;
  alt: string;
}

interface GalleryEditorProps {
  gallery: GalleryItem[];
  onUpdate: (gallery: GalleryItem[]) => void;
}

export const GalleryEditor = memo<GalleryEditorProps>(({
  gallery,
  onUpdate
}) => {
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const { tempImages, setTempImage, clearTempImage } = useWebsiteStore();

  const handleImageSave = useCallback((itemId: string, imageData: { url: string; alt: string }) => {
    const updatedGallery = updateGalleryItem(gallery, itemId, imageData);
    onUpdate(updatedGallery);
    clearTempImage(itemId);
    setEditingItem(null);
  }, [gallery, onUpdate, clearTempImage]);

  const handleImageChange = useCallback((itemId: string, imageData: { url: string; alt: string }) => {
    setTempImage(itemId, imageData);
  }, [setTempImage]);

  const addGalleryItem = useCallback(() => {
    const newItem = createNewGalleryItem();
    onUpdate([...gallery, newItem]);
  }, [gallery, onUpdate]);

  const removeGalleryItem = useCallback((itemId: string) => {
    const updatedGallery = removeGalleryItemById(gallery, itemId);
    onUpdate(updatedGallery);
    clearTempImage(itemId);
  }, [gallery, onUpdate, clearTempImage]);

  const startEditing = useCallback((itemId: string) => {
    setEditingItem(itemId);
  }, []);

  const createStartEditingHandler = useCallback((itemId: string) => () => startEditing(itemId), [startEditing]);
  const createRemoveHandler = useCallback((itemId: string) => () => removeGalleryItem(itemId), [removeGalleryItem]);

  const createImageSaveHandler = useCallback((itemId: string) => (imageData: { url: string; alt: string }) => {
    handleImageSave(itemId, imageData);
  }, [handleImageSave]);

  const createImageChangeHandler = useCallback((itemId: string) => (imageData: { url: string; alt: string }) => {
    handleImageChange(itemId, imageData);
  }, [handleImageChange]);

  return (
    <GalleryContainer>
      {gallery.length === 0 ? (
        <Placeholder>
          <PlaceholderText>{GALLERY_MESSAGES.NO_IMAGES}</PlaceholderText>
          <AddButton onClick={addGalleryItem}>
            {GALLERY_MESSAGES.ADD_FIRST}
          </AddButton>
        </Placeholder>
      ) : (
        <>
          {gallery.map((item, index) => (
            <GalleryItem key={item.id}>
              <GalleryHeader>
                <h4>Image {index + 1}</h4>
                <GalleryActions>
                  <EditButton onClick={createStartEditingHandler(item.id)}>
                    {editingItem === item.id ? "Cancel" : "Edit"}
                  </EditButton>
                  <RemoveButton onClick={createRemoveHandler(item.id)}>
                    Remove
                  </RemoveButton>
                </GalleryActions>
              </GalleryHeader>
              
              {editingItem === item.id ? (
                <ImageEditor
                  currentImage={item.url}
                  alt={item.alt}
                  onSave={createImageSaveHandler(item.id)}
                  onChange={createImageChangeHandler(item.id)}
                />
              ) : (
                <GalleryPreview>
                  {(() => {
                    const { displayUrl, displayAlt } = getDisplayImageData(item, tempImages);
                    
                    if (displayUrl) {
                      return (
                        <>
                          <img 
                            src={displayUrl} 
                            alt={displayAlt} 
                          />
                          {shouldShowTempIndicator(item, tempImages) && (
                            <TempIndicator>
                              <span>{GALLERY_MESSAGES.UNSAVED_CHANGES}</span>
                            </TempIndicator>
                          )}
                        </>
                      );
                    } else {
                      return (
                        <Placeholder>
                          <PlaceholderText>{GALLERY_MESSAGES.NO_IMAGE_SELECTED}</PlaceholderText>
                          <EditButton onClick={createStartEditingHandler(item.id)}>
                            {GALLERY_MESSAGES.ADD_IMAGE}
                          </EditButton>
                        </Placeholder>
                      );
                    }
                  })()}
                  {(() => {
                    const { displayAlt } = getDisplayImageData(item, tempImages);
                    return displayAlt && (
                      <p className="alt-text">
                        {displayAlt}
                      </p>
                    );
                  })()}
                </GalleryPreview>
              )}
            </GalleryItem>
          ))}
          
          <AddButton onClick={addGalleryItem}>
            {GALLERY_MESSAGES.ADD_ANOTHER}
          </AddButton>
        </>
      )}
    </GalleryContainer>
  );
});

GalleryEditor.displayName = "GalleryEditor";