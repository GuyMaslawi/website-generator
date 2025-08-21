import styled from "styled-components";
import { token } from "@/shared/design/tokens";

export const ToggleContainer = styled.div`
  // Uses the ResponsiveToggle styling from LivePreview.style.ts
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ToggleGroup = styled.div`
  display: flex;
  gap: ${token.spacing(1)};
  background: ${token.gradient('glass')};
  backdrop-filter: blur(20px);
  padding: ${token.spacing(2)};
  border-radius: ${token.radius('2xl')};
  border: 1px solid ${token.color('secondary.200')};
  box-shadow: ${token.shadow('lg')};
`;

export const ToggleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
}) <{ isActive: boolean }>`
  background: ${props => props.isActive
    ? token.gradient('primary')
    : 'transparent'};
  color: ${props => props.isActive ? 'white' : token.color('secondary.600')};
  border: none;
  padding: ${token.spacing(3)} ${token.spacing(4)};
  border-radius: ${token.radius('xl')};
  font-weight: ${token.fontWeight('semibold')};
  font-size: ${token.fontSize('sm')};
  cursor: pointer;
  transition: ${token.transition('default')};
  position: relative;
  overflow: hidden;
  
  // Icon and text spacing
  display: flex;
  align-items: center;
  gap: ${token.spacing(2)};
  
  // Hover effect
  &:hover {
    background: ${props => props.isActive
    ? token.gradient('primary')
    : token.color('secondary.100')};
    transform: translateY(-1px);
  }
  
  // Active state shadow
  ${props => props.isActive && `
    box-shadow: ${token.shadow('primary')};
  `}
  
  // Ripple effect on click
  &:active {
    transform: translateY(0);
  }
  
  // Icon styling
  svg {
    width: 16px;
    height: 16px;
    opacity: ${props => props.isActive ? 1 : 0.7};
    transition: ${token.transition('default')};
  }
`; 