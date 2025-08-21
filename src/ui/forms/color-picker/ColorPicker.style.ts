import styled from "styled-components";

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 20px;
  border: 2px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 100;
  cursor: default;
  
  &:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
  }
`;

export const ColorPreview = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${props => props.color};
  border: 4px solid white;
  box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &:hover {
    box-shadow: 0 12px 35px -10px rgba(0, 0, 0, 0.4);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const ColorValue = styled.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  background: #f3f4f6;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ControlLabel = styled.label`
  font-weight: 600;
  color: #374151;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Slider = styled.input`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%);
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(145deg, #3b82f6, #1d4ed8);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
    }
  }
  
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(145deg, #3b82f6, #1d4ed8);
    border: none;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
    }
  }
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const SliderValue = styled.span`
  font-weight: 600;
  color: #3b82f6;
  font-size: 14px;
  min-width: 40px;
  text-align: center;
  background: rgba(59, 130, 246, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
`;

export const PresetColors = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 16px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const PresetColor = styled.button<{ color: string; $isSelected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${props => props.color};
  border: 3px solid ${props => props.$isSelected ? '#3b82f6' : 'white'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  
  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 16px;
    opacity: ${props => props.$isSelected ? 1 : 0};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
    border-color: ${props => props.$isSelected ? '#3b82f6' : '#e5e7eb'};
  }
  
  &:active {
    transform: translateY(0px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2), 0 6px 20px rgba(0, 0, 0, 0.25);
  }
`; 