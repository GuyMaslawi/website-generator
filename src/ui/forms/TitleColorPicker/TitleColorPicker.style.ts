import styled from "styled-components";

export const TitleColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`;

export const ColorLabel = styled.label`
  font-weight: 600;
  color: #374151;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CurrentColor = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.color};
  background: #f9fafb;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  text-align: center;
  letter-spacing: 0.5px;
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: ${props => props.color};
    border: 2px solid white;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

export const PresetColors = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

export const PresetColor = styled.button<{ color: string; isSelected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props => props.color};
  border: 2px solid ${props => props.isSelected ? '#3b82f6' : 'white'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
    opacity: ${props => props.isSelected ? 1 : 0};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s ease;
  }
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0px);
  }
`;