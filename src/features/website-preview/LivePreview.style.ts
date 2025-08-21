import styled from "styled-components";
import { token } from "@/shared/design/tokens";

export const PreviewContainer = styled.div`
  min-height: 100vh;
  padding: ${token.spacing(6)};
  overflow-y: auto;
  position: relative;
  
  // Dynamic gradient background
  background: linear-gradient(-45deg, 
    ${token.color('secondary.50')}, 
    ${token.color('primary.50')}, 
    ${token.color('accent.50')}, 
    ${token.color('secondary.100')}
  );
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const ResponsiveToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${token.spacing(8)};
  gap: ${token.spacing(1)};
  background: ${token.gradient('glass')};
  backdrop-filter: blur(20px);
  padding: ${token.spacing(2)};
  border-radius: ${token.radius('2xl')};
  border: 1px solid ${token.color('secondary.200')};
  box-shadow: ${token.shadow('lg')};
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const ToggleButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive
    ? token.gradient('primary')
    : 'transparent'};
  color: ${props => props.isActive ? 'white' : token.color('secondary.600')};
  border: none;
  padding: ${token.spacing(3)} ${token.spacing(6)};
  border-radius: ${token.radius('xl')};
  font-weight: ${token.fontWeight('semibold')};
  font-size: ${token.fontSize('sm')};
  cursor: pointer;
  transition: ${token.transition('default')};
  position: relative;
  overflow: hidden;
  
  // Icon spacing
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
`;

export const PreviewContent = styled.div<{ previewMode: string }>`
  max-width: ${props => {
    switch (props.previewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '1200px';
    }
  }};
  margin: 0 auto;
  background: white;
  border-radius: ${token.radius('3xl')};
  box-shadow: ${token.shadow('2xl')};
  overflow: hidden;
  transition: ${token.transition('smooth')};
  border: 1px solid ${token.color('secondary.200')};
  position: relative;
  
  // Enhanced hover effect
  &:hover {
    box-shadow: ${token.shadow('2xl')}, 0 0 0 1px ${token.color('primary.200')};
    transform: translateY(-4px);
  }
  
  // Device frame styling for mobile/tablet
  ${props => (props.previewMode === 'mobile' || props.previewMode === 'tablet') && `
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: ${token.gradient('primary')};
      border-radius: ${token.radius('3xl')};
      z-index: -1;
      opacity: 0.1;
    }
  `}
  
  // Mobile specific styling
  ${props => props.previewMode === 'mobile' && `
    border-radius: ${token.radius('4xl')};
    
    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: ${token.color('secondary.300')};
      border-radius: ${token.radius('full')};
    }
  `}
`;

export const WebsitePreview = styled.div<{ bodyFont: string }>`
  font-family: ${props => props.bodyFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #374151;
`;

export const HeroSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

export const HeroTitle = styled.h1<{ primaryColor: string; headingFont: string }>`
  font-family: ${props => props.headingFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 24px 0;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.9;
  position: relative;
  z-index: 1;
`;

export const Section = styled.section`
  padding: 60px 40px;
  
  &:nth-child(even) {
    background: linear-gradient(145deg, #f8fafc, #f1f5f9);
  }
`;

export const SectionTitle = styled.h2<{ primaryColor: string; headingFont: string }>`
  font-family: ${props => props.headingFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${props => props.primaryColor};
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 32px 0;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.primaryColor}, transparent);
    border-radius: 2px;
  }
`;

export const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: #4b5563;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 40px;
`;

export const ServiceCard = styled.div<{ accentColor: string }>`
  background: white;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.accentColor};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.accentColor};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const ServiceTitle = styled.h3<{ primaryColor: string; headingFont: string }>`
  font-family: ${props => props.headingFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: ${props => props.primaryColor};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 16px 0;
`;

export const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

export const GalleryItem = styled.div<{ accentColor: string }>`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px;
  
  &:hover {
    box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.accentColor};
    transform: translateY(-2px);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 8px;
  }
`;

export const GalleryPlaceholder = styled.div`
  text-align: center;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
`;

export const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 8px 25px -8px rgba(59, 130, 246, 0.25);
  }
`;

export const ContactLabel = styled.span`
  font-weight: 600;
  color: #374151;
  min-width: 80px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 14px;
`;

export const ContactValue = styled.span`
  color: #6b7280;
  font-size: 16px;
`; 