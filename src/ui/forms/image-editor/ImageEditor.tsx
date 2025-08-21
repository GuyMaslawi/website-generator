import { useState, useRef, useEffect, memo, useCallback } from "react";
import { ImageEditorContainer, UploadArea, UploadButton, ImagePreview, CropControls, ControlsGroup, ControlLabel, ScaleIndicator, DimensionsInfo, TransformingIndicator, RangeInput, ActionButton, HiddenFileInput, ButtonContainer, SaveButton, SupportText } from "./ImageEditor.style";
import {
  DEFAULT_CROP_SETTINGS,
  applyImageTransformations,
  processFileUpload,
  createCropChangeHandler,
  type CropSettings
} from "./ImageEditor.utils";
import {
  IMAGE_EDITOR_MESSAGES,
  IMAGE_EDITOR_DEFAULTS,
  IMAGE_EDITOR_LIMITS
} from "./ImageEditor.consts";

interface ImageEditorProps {
  currentImage?: string;
  onSave: (imageData: { url: string; alt: string }) => void;
  onChange?: (imageData: { url: string; alt: string }) => void;
  alt?: string;
}

export const ImageEditor = memo<ImageEditorProps>(({
  currentImage,
  onSave,
  onChange,
  alt = ""
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(currentImage || "");
  const [altText, setAltText] = useState(alt);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [cropSettings, setCropSettings] = useState<CropSettings>(DEFAULT_CROP_SETTINGS);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentImage) {
      setSelectedImage(currentImage);
      
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.src = currentImage;
    }
  }, [currentImage]);

  useEffect(() => {
    if (alt) {
      setAltText(alt);
    }
  }, [alt]);

  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      
      processFileUpload(
        file,
        async (result) => {
          setSelectedImage(result);
          setIsLoading(false);
          
          const img = new Image();
          img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height });
          };
          img.src = result;
          
          if (onChange) {
            try {
              const transformedUrl = await applyImageTransformations(result, cropSettings);
              onChange({
                url: transformedUrl,
                alt: altText
              });
            } catch (error) {
              console.error('Error applying transformations to new image:', error);
              onChange({
                url: result,
                alt: altText
              });
            }
          }
        },
        () => {
          setIsLoading(false);
        }
      );
    }
  }, [cropSettings, altText, onChange]);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleCropChange = useCallback(async (setting: keyof CropSettings, value: number) => {
    const newSettings = { ...cropSettings, [setting]: value };
    setCropSettings(newSettings);
    
    if (onChange && selectedImage) {
      setIsTransforming(true);
      try {
        const transformedUrl = await applyImageTransformations(selectedImage, newSettings);
        onChange({
          url: transformedUrl,
          alt: altText
        });
      } catch (error) {
        console.error('Error applying transformations:', error);
        onChange({
          url: selectedImage,
          alt: altText
        });
      } finally {
        setIsTransforming(false);
      }
    }
  }, [cropSettings, selectedImage, altText, onChange]);

  const handleSave = useCallback(async () => {
    if (selectedImage) {
      try {
        const transformedUrl = await applyImageTransformations(selectedImage, cropSettings);
        onSave({
          url: transformedUrl,
          alt: altText
        });
      } catch (error) {
        console.error('Error applying transformations before save:', error);
        onSave({
          url: selectedImage,
          alt: altText
        });
      }
    }
  }, [selectedImage, cropSettings, altText, onSave]);

  const handleReset = useCallback(() => {
    setCropSettings(DEFAULT_CROP_SETTINGS);
  }, []);

  const handleAltChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAlt = e.target.value;
    setAltText(newAlt);
    
    if (onChange && selectedImage) {
      try {
        const transformedUrl = await applyImageTransformations(selectedImage, cropSettings);
        onChange({
          url: transformedUrl,
          alt: newAlt
        });
      } catch (error) {
        console.error('Error applying transformations for alt text change:', error);
        onChange({
          url: selectedImage,
          alt: newAlt
        });
      }
    }
  }, [selectedImage, cropSettings, onChange]);

  const createLocalCropChangeHandler = useCallback((setting: keyof CropSettings) => 
    createCropChangeHandler(setting, handleCropChange)
  , [handleCropChange]);

  return (
    <ImageEditorContainer data-testid="image-editor">
      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
      />
      
      {!selectedImage ? (
        <UploadArea onClick={handleUploadClick}>
          <UploadButton>
            {isLoading ? IMAGE_EDITOR_MESSAGES.PROCESSING : IMAGE_EDITOR_MESSAGES.UPLOAD_CLICK}
          </UploadButton>
          <SupportText>{IMAGE_EDITOR_MESSAGES.SUPPORT_INFO}</SupportText>
        </UploadArea>
      ) : (
        <>
          <ImagePreview
            src={selectedImage}
            alt={altText || IMAGE_EDITOR_DEFAULTS.ALT_PREVIEW}
          />
          
          <CropControls>
            <ControlsGroup>
              <ControlLabel>Alt Text</ControlLabel>
              <input
                type="text"
                value={altText}
                onChange={handleAltChange}
                placeholder={IMAGE_EDITOR_MESSAGES.DESCRIBE_IMAGE}
              />
            </ControlsGroup>
            
            <ControlsGroup>
              <ControlLabel>
                Scale: <strong>{cropSettings.scale}%</strong>
                {cropSettings.scale < 100 && <ScaleIndicator isSmaller>(smaller)</ScaleIndicator>}
                {cropSettings.scale > 100 && <ScaleIndicator isLarger>(larger)</ScaleIndicator>}
                {isTransforming && <TransformingIndicator>(applying...)</TransformingIndicator>}
              </ControlLabel>
              {imageDimensions && (
                <DimensionsInfo>
                  Original: {imageDimensions.width} × {imageDimensions.height}px
                  <br />
                  Scaled: {Math.round(imageDimensions.width * cropSettings.scale / 100)} × {Math.round(imageDimensions.height * cropSettings.scale / 100)}px
                </DimensionsInfo>
              )}
              <RangeInput
                type="range"
                min={IMAGE_EDITOR_LIMITS.SCALE_MIN}
                max={IMAGE_EDITOR_LIMITS.SCALE_MAX}
                step="5"
                value={cropSettings.scale}
                onChange={createLocalCropChangeHandler("scale")}
              />
            </ControlsGroup>
            
            <ControlsGroup>
              <ControlLabel>Rotation: {cropSettings.rotation}°</ControlLabel>
              <RangeInput
                type="range"
                min={IMAGE_EDITOR_LIMITS.ROTATION_MIN}
                max={IMAGE_EDITOR_LIMITS.ROTATION_MAX}
                step="5"
                value={cropSettings.rotation}
                onChange={createLocalCropChangeHandler("rotation")}
              />
            </ControlsGroup>
            
            <ControlsGroup>
              <ControlLabel>Brightness: {cropSettings.brightness}%</ControlLabel>
              <RangeInput
                type="range"
                min={IMAGE_EDITOR_LIMITS.BRIGHTNESS_MIN}
                max={IMAGE_EDITOR_LIMITS.BRIGHTNESS_MAX}
                step="5"
                value={cropSettings.brightness}
                onChange={createLocalCropChangeHandler("brightness")}
              />
            </ControlsGroup>
            
            <ControlsGroup>
              <ControlLabel>Contrast: {cropSettings.contrast}%</ControlLabel>
              <RangeInput
                type="range"
                min={IMAGE_EDITOR_LIMITS.CONTRAST_MIN}
                max={IMAGE_EDITOR_LIMITS.CONTRAST_MAX}
                step="5"
                value={cropSettings.contrast}
                onChange={createLocalCropChangeHandler("contrast")}
              />
            </ControlsGroup>
            
            <ButtonContainer>
              <ActionButton onClick={handleUploadClick}>
                {IMAGE_EDITOR_MESSAGES.CHANGE_IMAGE}
              </ActionButton>
              <ActionButton onClick={handleReset}>
                {IMAGE_EDITOR_MESSAGES.RESET}
              </ActionButton>
              <SaveButton onClick={handleSave}>
                {IMAGE_EDITOR_MESSAGES.SAVE}
              </SaveButton>
            </ButtonContainer>
          </CropControls>
        </>
      )}
    </ImageEditorContainer>
  );
});

ImageEditor.displayName = "ImageEditor";