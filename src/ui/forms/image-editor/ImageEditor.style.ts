import styled from "styled-components";

export const ImageEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
`;

export const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  min-height: 200px;
  border: 3px dashed #d1d5db;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f9fafb;
  
  &:hover {
    border-color: #3b82f6;
    background-color: #eff6ff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
  }
`;

export const UploadButton = styled.button`
  padding: 16px 32px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }
`;

export const SupportText = styled.p`
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  line-height: 1.5;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CropControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ControlsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ControlLabel = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 14px;
`;

export const ScaleIndicator = styled.span<{ isSmaller?: boolean; isLarger?: boolean }>`
  color: #6b7280;
  font-size: 12px;
  margin-left: 8px;
`;

export const DimensionsInfo = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
  line-height: 1.4;
`;

export const TransformingIndicator = styled.span`
  color: #3b82f6;
  font-size: 12px;
  margin-left: 8px;
`;

export const RangeInput = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #d1d5db;
  outline: none;
  -webkit-appearance: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: none;
  }
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background-color: #4b5563;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const SaveButton = styled(ActionButton)`
  background-color: #3b82f6;
  
  &:hover {
    background-color: #2563eb;
  }
`;