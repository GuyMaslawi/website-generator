import React, { useState, useEffect, memo, useCallback } from "react";
import { PRESET_COLORS, hslToHex, hexToRgb } from "@/shared/utils/color";
import { ColorPickerContainer, ColorPreview, ColorValue, ControlsContainer, ControlGroup, ControlLabel, SliderContainer, Slider, SliderValue, PresetColors, PresetColor } from "./ColorPicker.style";
import {
  calculateHueFromRGB,
  calculateLightnessFromRGB
} from "./ColorPicker.utils";
import {
  COLOR_PICKER_DEFAULTS,
  COLOR_PICKER_LIMITS,
  COLOR_PICKER_LABELS,
  COLOR_PICKER_UNITS
} from "./ColorPicker.consts";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label?: string;
}

export const ColorPicker = memo<ColorPickerProps>(({
  value,
  onChange
}) => {
  const [hue, setHue] = useState<number>(COLOR_PICKER_DEFAULTS.INITIAL_HUE);
  const [lightness, setLightness] = useState<number>(COLOR_PICKER_DEFAULTS.INITIAL_LIGHTNESS);
  
  useEffect(() => {
    if (value && value.startsWith("#")) {
      const rgb = hexToRgb(value);
      if (rgb) {
        const calculatedHue = calculateHueFromRGB(rgb);
        const calculatedLightness = calculateLightnessFromRGB(rgb);
        
        if (calculatedHue >= 0 && calculatedLightness >= 0) {
          setHue(calculatedHue);
          setLightness(calculatedLightness);
        }
      }
    }
  }, [value]);
  
  const handleHueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newHue = parseInt(e.target.value);
    setHue(newHue);
    const newColor = hslToHex(newHue, COLOR_PICKER_DEFAULTS.SATURATION, lightness);
    onChange(newColor);
  }, [lightness, onChange]);
  
  const handleLightnessChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newLightness = parseInt(e.target.value);
    setLightness(newLightness);
    const newColor = hslToHex(hue, COLOR_PICKER_DEFAULTS.SATURATION, newLightness);
    onChange(newColor);
  }, [hue, onChange]);

  const handlePresetClick = useCallback((color: string) => {
    onChange(color);
  }, [onChange]);
  
  return (
    <ColorPickerContainer>
      <ColorPreview color={value} />
      <ColorValue>{value}</ColorValue>
      
      <ControlsContainer>
        <ControlGroup>
          <ControlLabel htmlFor="hue-slider">{COLOR_PICKER_LABELS.HUE}</ControlLabel>
          <SliderContainer>
            <Slider
              id="hue-slider"
              type="range"
              min={COLOR_PICKER_LIMITS.HUE_MIN}
              max={COLOR_PICKER_LIMITS.HUE_MAX}
              value={hue}
              onChange={handleHueChange}
            />
            <SliderValue>{hue}{COLOR_PICKER_UNITS.HUE}</SliderValue>
          </SliderContainer>
        </ControlGroup>
        
        <ControlGroup>
          <ControlLabel htmlFor="lightness-slider">{COLOR_PICKER_LABELS.LIGHTNESS}</ControlLabel>
          <SliderContainer>
            <Slider
              id="lightness-slider"
              type="range"
              min={COLOR_PICKER_LIMITS.LIGHTNESS_MIN}
              max={COLOR_PICKER_LIMITS.LIGHTNESS_MAX}
              value={lightness}
              onChange={handleLightnessChange}
            />
            <SliderValue>{lightness}{COLOR_PICKER_UNITS.LIGHTNESS}</SliderValue>
          </SliderContainer>
        </ControlGroup>
      </ControlsContainer>
      
      <PresetColors>
        {PRESET_COLORS.map((color) => (
          <PresetColor
            key={color}
            color={color}
            $isSelected={color === value}
            onClick={() => handlePresetClick(color)}
          />
        ))}
      </PresetColors>
    </ColorPickerContainer>
  );
});

ColorPicker.displayName = "ColorPicker"; 