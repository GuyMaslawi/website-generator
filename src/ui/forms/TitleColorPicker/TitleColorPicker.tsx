import { memo, useCallback } from "react";
import { PRESET_COLORS } from "@/shared/utils/color";
import { 
  TitleColorContainer, 
  ColorLabel, 
  PresetColors, 
  PresetColor,
  CurrentColor 
} from "./TitleColorPicker.style";

interface TitleColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label: string;
}

export const TitleColorPicker = memo<TitleColorPickerProps>(({
  value,
  onChange,
  label
}) => {
  const handlePresetClick = useCallback((color: string) => {
    console.log('Title color clicked:', color);
    onChange(color);
  }, [onChange]);

  const createPresetClickHandler = useCallback((color: string) => () => handlePresetClick(color), [handlePresetClick]);

  return (
    <TitleColorContainer>
      <ColorLabel>{label}</ColorLabel>
      <CurrentColor color={value}>{value}</CurrentColor>
      <PresetColors>
        {PRESET_COLORS.map((color) => (
          <PresetColor
            key={color}
            color={color}
            isSelected={color === value}
            onClick={createPresetClickHandler(color)}
            title={`Set title color to ${color}`}
          />
        ))}
      </PresetColors>
    </TitleColorContainer>
  );
});

TitleColorPicker.displayName = "TitleColorPicker";