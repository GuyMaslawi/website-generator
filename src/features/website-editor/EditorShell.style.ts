import styled from "styled-components";
import { designTokens, token } from "@/shared/design/tokens";

export const EditorContainer = styled.div`
  min-height: 100vh;
  padding: ${token.spacing(8)} ${token.spacing(10)};
  overflow-y: auto;
  position: relative;
  
  background: linear-gradient(-45deg, 
    ${token.color('primary.50')}, 
    ${token.color('secondary.50')}, 
    ${token.color('accent.50')}, 
    ${token.color('primary.100')},
    ${token.color('secondary.100')}
  );
  background-size: 500% 500%;
  animation: gradientShift 20s ease infinite;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, ${token.color('primary.200')} 1px, transparent 1px),
      radial-gradient(circle at 80% 20%, ${token.color('accent.200')} 1px, transparent 1px),
      radial-gradient(circle at 40% 40%, ${token.color('secondary.200')} 1px, transparent 1px);
    background-size: 200px 200px, 300px 300px, 150px 150px;
    opacity: 0.1;
    animation: float 25s ease-in-out infinite;
    z-index: -1;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

export const EditorContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background: ${token.gradient('glass')};
  backdrop-filter: blur(25px);
  border-radius: ${token.radius('3xl')};
  box-shadow: ${token.shadow('glass')}, 0 0 40px rgba(124, 109, 252, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  overflow: hidden;
  position: relative;
  
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
  
  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: ${token.radius('3xl')};
    z-index: -1;
  }
`;

export const EditorHeader = styled.div`
  padding: ${token.spacing(10)} ${token.spacing(10)} ${token.spacing(8)};
  background: ${token.gradient('glass')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 3px;
    background: ${token.gradient('primary')};
    border-radius: ${token.radius('full')};
    box-shadow: 0 0 20px rgba(124, 109, 252, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      transparent 100%
    );
  }
`;

export const EditorTitle = styled.h1`
  font-family: ${token.font('sans')};
  font-size: ${token.fontSize('3xl')};
  font-weight: ${token.fontWeight('extrabold')};
  color: ${token.color('secondary.800')};
  margin: 0 0 ${token.spacing(2)} 0;
  background: ${token.gradient('primary')};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: ${designTokens.typography.lineHeight.tight};
`;

export const EditorSubtitle = styled.p`
  font-size: ${token.fontSize('lg')};
  color: ${token.color('secondary.600')};
  margin: 0;
  font-weight: ${token.fontWeight('medium')};
`;

export const Section = styled.div`
  margin-bottom: ${token.spacing(6)};
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  border-radius: ${token.radius('2xl')};
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: ${token.shadow('md')}, 0 0 20px rgba(124, 109, 252, 0.05);
  transition: ${token.transition('default')};
  position: relative;
  overflow: hidden;
  
  // Enhanced hover effect
  &:hover {
    box-shadow: ${token.shadow('lg')}, 0 0 30px rgba(124, 109, 252, 0.1);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.9);
    border-color: ${token.color('primary.300')};
    
    &::before {
      opacity: 1;
      width: 100%;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: ${token.gradient('primary')};
    opacity: 0.5;
    transition: ${token.transition('smooth')};
    border-radius: ${token.radius('full')};
  }
  
  &:hover::before {
    opacity: 1;
    width: 100%;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 50%, 
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: ${token.radius('2xl')};
    z-index: -1;
  }
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionContent = styled.div`
  padding: ${token.spacing(8)} ${token.spacing(8)};
`;

export const SectionTitle = styled.h2<{ primaryColor: string; headingFont: string }>`
  font-family: ${props => props.headingFont || token.font('sans')};
  color: ${props => props.primaryColor || token.color('primary.600')};
  font-size: ${token.fontSize('2xl')};
  font-weight: ${token.fontWeight('bold')};
  margin: 0 0 ${token.spacing(6)} 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: ${token.spacing(3)};
  
  &::before {
    content: '';
    width: 4px;
    height: 100%;
    background: ${props => props.primaryColor || token.gradient('primary')};
    border-radius: ${token.radius('full')};
    flex-shrink: 0;
    box-shadow: 0 0 10px rgba(124, 109, 252, 0.3);
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(
      to right, 
      ${props => props.primaryColor || token.color('primary.300')}, 
      transparent
    );
    margin-left: auto;
    opacity: 0.7;
    border-radius: ${token.radius('full')};
  }
`;

export const Field = styled.div`
  margin-bottom: ${token.spacing(6)};
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FieldContent = styled.div`
  padding: ${token.spacing(6)};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: ${token.radius('xl')};
  border: 1px solid transparent;
  transition: ${token.transition('default')};
  position: relative;
  z-index: 1;
  
  &:hover {
    border-color: ${token.color('primary.200')};
    box-shadow: ${token.shadow('md')}, 0 0 15px rgba(124, 109, 252, 0.08);
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
  
  &:focus-within {
    border-color: ${token.color('primary.400')};
    box-shadow: ${token.shadow('primarySm')}, 0 0 0 3px ${token.color('primary.100')}, 0 0 20px rgba(124, 109, 252, 0.1);
    background: white;
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: ${token.gradient('primary')};
    border-radius: ${token.radius('xl')};
    opacity: 0;
    transition: ${token.transition('default')};
    z-index: -1;
  }
  
  &:focus-within::before {
    opacity: 0.08;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 50%, 
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: ${token.radius('xl')};
    z-index: -1;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-weight: ${token.fontWeight('semibold')};
  color: ${token.color('secondary.700')};
  margin-bottom: ${token.spacing(3)};
  font-size: ${token.fontSize('base')};
  text-transform: none;
  letter-spacing: ${designTokens.typography.letterSpacing.normal};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 20px;
    height: 2px;
    background: ${token.gradient('accent')};
    border-radius: ${token.radius('full')};
    opacity: 0.8;
    box-shadow: 0 0 8px rgba(241, 102, 30, 0.3);
  }
`; 