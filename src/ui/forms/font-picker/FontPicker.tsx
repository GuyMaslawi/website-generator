import React, { memo, useMemo, useCallback } from "react";
import { FontPickerContainer, FontSelect, FontPreview } from "./FontPicker.style";
import { FONT_OPTIONS, FONT_PREVIEW_TEXTS, FONT_STYLES } from "./FontPicker.consts";

interface FontPickerProps {
  value: string;
  onChange: (font: string) => void;
  label?: string;
  type?: 'heading' | 'body';
}

export const FontPicker = memo<FontPickerProps>(({
  value,
  onChange,
  label,
  type = 'body'
}) => {

  const previewText = useMemo(() => 
    type === 'heading' 
      ? FONT_PREVIEW_TEXTS.HEADING
      : FONT_PREVIEW_TEXTS.BODY
  , [type]);

  const fontOptionElements = useMemo(() => 
    FONT_OPTIONS.map((font) => (
      <option key={font.value} value={font.value}>
        {font.label}
      </option>
    ))
  , []);

  const previewStyles = useMemo(() => ({
    fontSize: type === 'heading' ? FONT_STYLES.HEADING.FONT_SIZE : FONT_STYLES.BODY.FONT_SIZE,
    fontWeight: type === 'heading' ? FONT_STYLES.HEADING.FONT_WEIGHT : FONT_STYLES.BODY.FONT_WEIGHT
  }), [type]);

  const handleFontChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <FontPickerContainer>
      {label && <label>{label}</label>}
      
      <FontSelect
        value={value}
        onChange={handleFontChange}
      >
        {fontOptionElements}
      </FontSelect>
      
      <FontPreview 
        fontFamily={value}
        fontSize={previewStyles.fontSize}
        fontWeight={previewStyles.fontWeight}
      >
        {previewText}
      </FontPreview>
    </FontPickerContainer>
  );
});

FontPicker.displayName = "FontPicker";