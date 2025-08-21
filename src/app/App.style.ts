import styled from "styled-components";
import { designTokens, token } from "@/shared/design/tokens";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 550px 1fr;
  height: 100vh;
  background: ${token.gradient('glass')};
  backdrop-filter: blur(20px);
  overflow: hidden;
  position: relative;
  
  // Animated background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${token.gradient('aurora')};
    opacity: 0.03;
    animation: float 20s ease-in-out infinite;
    z-index: -1;
  }
  
  @keyframes float {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.1) rotate(180deg); }
  }
  
  @media (max-width: ${designTokens.breakpoints.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

export const EditorSection = styled.div`
  background: ${token.gradient('glass')};
  backdrop-filter: blur(20px);
  border-right: 1px solid ${token.color('secondary.200')};
  overflow-y: auto;
  position: relative;
  
  // Glass morphism effect
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${token.gradient('glassDark')};
    z-index: -1;
  }
  
  // Custom scrollbar
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${token.color('primary.300')};
    border-radius: ${token.radius('full')};
    transition: ${token.transition('default')};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${token.color('primary.400')};
  }
  
  @media (max-width: ${designTokens.breakpoints.lg}) {
    max-height: 40vh;
    border-right: none;
    border-bottom: 1px solid ${token.color('secondary.200')};
  }
`;

export const PreviewSection = styled.div`
  background: ${token.gradient('secondary')};
  overflow-y: auto;
  position: relative;
  
  // Enhanced scrollbar
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${token.color('secondary.100')};
    border-radius: ${token.radius('lg')};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${token.gradient('primary')};
    border-radius: ${token.radius('lg')};
    transition: ${token.transition('default')};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${token.color('primary.600')};
  }
  
  // Subtle grid pattern
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 1px 1px, ${token.color('secondary.300')} 1px, transparent 0);
    background-size: 20px 20px;
    opacity: 0.1;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`; 