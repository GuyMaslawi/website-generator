import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  margin: 20px;
`;

export const ErrorTitle = styled.h2`
  color: #dc2626;
  margin: 0 0 16px 0;
  font-size: 24px;
`;

export const ErrorMessage = styled.p`
  color: #7f1d1d;
  margin: 0 0 24px 0;
  text-align: center;
  line-height: 1.5;
`;

export const ErrorButton = styled.button`
  background: #dc2626;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background: #b91c1c;
  }
`;

export const ErrorDetails = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 4px;
  padding: 12px;
  margin: 16px 0;
  font-family: monospace;
  font-size: 14px;
  color: #7f1d1d;
  max-width: 100%;
  overflow-x: auto;
`;

export const RetryButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background: #2563eb;
  }
`;