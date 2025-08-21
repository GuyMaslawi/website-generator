import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const GalleryItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  
  .gallery-preview {
    position: relative;
    
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 8px;
    }
    
    .temp-indicator {
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(59, 130, 246, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 500;
    }
    
    .placeholder {
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f3f4f6;
      border: 2px dashed #d1d5db;
      border-radius: 6px;
      margin-bottom: 8px;
      
      p {
        color: #6b7280;
        margin-bottom: 12px;
      }
      
      button {
        padding: 8px 16px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        
        &:hover {
          background: #2563eb;
        }
      }
    }
    
    .alt-text {
      font-size: 12px;
      color: #6b7280;
      font-style: italic;
      margin: 0;
    }
  }
`;

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h4 {
    margin: 0;
    color: #374151;
    font-size: 16px;
  }
  
  div {
    display: flex;
    gap: 8px;
    
    button {
      padding: 6px 12px;
      border: 1px solid #d1d5db;
      background: white;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      
      &:hover {
        background: #f9fafb;
      }
    }
  }
`;

export const GalleryActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const GalleryPreview = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 8px;
  }
  
  .temp-indicator {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(59, 130, 246, 0.9);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
  }
  
  .alt-text {
    font-size: 12px;
    color: #6b7280;
    font-style: italic;
    margin: 0;
  }
`;

export const Placeholder = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border: 2px dashed #d1d5db;
  border-radius: 6px;
  margin-bottom: 8px;
  
  p {
    color: #6b7280;
    margin-bottom: 12px;
  }
  
  button {
    padding: 8px 16px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: #2563eb;
    }
  }
`;

export const PlaceholderText = styled.p`
  color: #6b7280;
  margin-bottom: 12px;
`;

export const AddButton = styled.button`
  padding: 12px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  align-self: flex-start;
  
  &:hover {
    background: #2563eb;
  }
`;

export const RemoveButton = styled.button`
  background: #ef4444 !important;
  color: white !important;
  
  &:hover {
    background: #dc2626 !important;
  }
`;

export const EditButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: #f9fafb;
  }
`;

export const TempIndicator = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(59, 130, 246, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  
  p {
    color: #6b7280;
    margin-bottom: 16px;
  }
`;