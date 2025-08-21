import styled from "styled-components";

export const FontPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }
`;

export const FontSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-color: #3b82f6;
  }
`;

export const FontPreview = styled.div<{
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
}>`
  padding: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: #374151;
  min-height: 40px;
  display: flex;
  align-items: center;
`;