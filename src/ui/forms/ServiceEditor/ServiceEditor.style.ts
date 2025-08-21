import styled from "styled-components";

export const ServiceEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ServiceItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
    font-size: 14px;
  }
  
  > div {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h4 {
    margin: 0;
    color: #374151;
    font-size: 16px;
  }
`;

export const ServiceActions = styled.div`
  display: flex;
  gap: 8px;
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
  
  &:hover {
    background: #2563eb;
  }
`;

export const RemoveButton = styled.button`
  padding: 6px 12px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
  
  &:hover {
    background: #dc2626;
  }
`;