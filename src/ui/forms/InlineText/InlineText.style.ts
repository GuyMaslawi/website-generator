import styled from "styled-components";
import { token } from "@/shared/design/tokens";

export const EditableTextContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const EditableText = styled.div`
  padding: ${token.spacing(3)} ${token.spacing(4)};
  border: 1px solid transparent;
  border-radius: ${token.radius('lg')};
  cursor: pointer;
  min-height: 24px;
  font-size: ${token.fontSize('base')};
  line-height: 1.5;
  color: ${token.color('secondary.700')};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  transition: ${token.transition('default')};
  position: relative;
  
  &:hover {
    border-color: ${token.color('primary.200')};
    background: rgba(255, 255, 255, 0.95);
    box-shadow: ${token.shadow('sm')};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  // Subtle indicator that it's editable
  &::after {
    content: '✏️';
    position: absolute;
    right: ${token.spacing(3)};
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    font-size: ${token.fontSize('sm')};
    transition: ${token.transition('default')};
  }
  
  &:hover::after {
    opacity: 0.6;
  }
  
  // Empty state styling
  &:empty::before {
    content: attr(data-placeholder);
    color: ${token.color('secondary.400')};
    font-style: italic;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  padding: ${token.spacing(3)} ${token.spacing(4)};
  border: 2px solid ${token.color('primary.300')};
  border-radius: ${token.radius('lg')};
  font-size: ${token.fontSize('base')};
  background: white;
  box-shadow: ${token.shadow('primarySm')};
  transition: ${token.transition('default')};
  
  &:focus {
    outline: none;
    border-color: ${token.color('primary.500')};
    box-shadow: ${token.shadow('primary')}, 0 0 0 3px ${token.color('primary.100')};
    transform: scale(1.02);
  }
  
  &[aria-invalid="true"] {
    border-color: ${token.color('error.400')};
    box-shadow: 0 0 0 3px ${token.color('error.100')};
  }
  
  &::placeholder {
    color: ${token.color('secondary.400')};
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: ${token.spacing(3)};
  display: flex;
  gap: ${token.spacing(2)};
  justify-content: flex-end;
  align-items: center;
`;

export const SaveButton = styled.button`
  padding: ${token.spacing(2)} ${token.spacing(4)};
  background: ${token.gradient('primary')};
  color: white;
  border: none;
  border-radius: ${token.radius('lg')};
  cursor: pointer;
  font-size: ${token.fontSize('sm')};
  font-weight: ${token.fontWeight('semibold')};
  transition: ${token.transition('default')};
  box-shadow: ${token.shadow('sm')};
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${token.shadow('primary')};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  // Success indicator
  &::before {
    content: '✓';
    margin-right: ${token.spacing(1)};
  }
`;

export const CancelButton = styled.button`
  padding: ${token.spacing(2)} ${token.spacing(4)};
  background: transparent;
  color: ${token.color('secondary.600')};
  border: 1px solid ${token.color('secondary.300')};
  border-radius: ${token.radius('lg')};
  cursor: pointer;
  font-size: ${token.fontSize('sm')};
  font-weight: ${token.fontWeight('medium')};
  transition: ${token.transition('default')};
  
  &:hover {
    background: ${token.color('secondary.50')};
    border-color: ${token.color('secondary.400')};
    color: ${token.color('secondary.700')};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  // Cancel indicator
  &::before {
    content: '✕';
    margin-right: ${token.spacing(1)};
  }
`;

export const ErrorText = styled.div`
  color: ${token.color('error.600')};
  font-size: ${token.fontSize('sm')};
  margin-top: ${token.spacing(2)};
  padding: ${token.spacing(2)} ${token.spacing(3)};
  background: ${token.color('error.50')};
  border: 1px solid ${token.color('error.200')};
  border-radius: ${token.radius('md')};
  display: flex;
  align-items: center;
  gap: ${token.spacing(2)};
  
  &::before {
    content: '⚠️';
    font-size: ${token.fontSize('sm')};
  }
`; 