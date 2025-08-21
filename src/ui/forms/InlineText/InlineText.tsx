import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import { useKeyboard } from "@/shared/hooks/useKeyboard";
import { useValidation } from "@/shared/hooks/useValidation";
import { EditableTextContainer, EditableText, TextInput, ButtonContainer, SaveButton, CancelButton, ErrorText } from "./InlineText.style";

interface EditableTextProps {
  content: string;
  onSave: (newContent: string) => void;
  placeholder?: string;
  isEditing: boolean;
  onEditToggle: () => void;
  validation?: any;
}

export const InlineText = memo<EditableTextProps>(({
  content,
  onSave,
  placeholder = "Click to edit",
  isEditing,
  onEditToggle,
  validation
}) => {
  const [editValue, setEditValue] = useState(content);
  const inputRef = useRef<HTMLInputElement>(null);
  const { validate, getError, clearErrors } = useValidation();
  
  useEffect(() => {
    setEditValue(content);
  }, [content]);
  
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);
  
  const handleSave = useCallback(() => {
    const trimmedValue = editValue.trim();
    
    if (validation) {
      const isValid = validate(trimmedValue, "inline-text", validation);
      if (!isValid) {
        return;
      }
    }
    
    if (trimmedValue !== content) {
      onSave(trimmedValue);
    }
    clearErrors();
    onEditToggle();
  }, [editValue, content, validation, validate, onSave, clearErrors, onEditToggle]);
  
  const handleCancel = useCallback(() => {
    setEditValue(content);
    onEditToggle();
  }, [content, onEditToggle]);
  
  const handleDoubleClick = useCallback(() => {
    onEditToggle();
  }, [onEditToggle]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  }, [handleSave, handleCancel]);
  
  useKeyboard("Enter", handleSave);
  useKeyboard("Escape", handleCancel);
  
  const errorMessage = getError("inline-text");
  
  if (isEditing) {
    return (
      <EditableTextContainer>
        <TextInput
          ref={inputRef}
          value={editValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-invalid={errorMessage ? "true" : "false"}
          aria-describedby={errorMessage ? "error-text" : undefined}
          placeholder={placeholder}
        />
        <ButtonContainer>
          <SaveButton onClick={handleSave}>
            Save
          </SaveButton>
          <CancelButton onClick={handleCancel}>
            Cancel
          </CancelButton>
        </ButtonContainer>
        {errorMessage && <ErrorText id="error-text" role="alert">{errorMessage}</ErrorText>}
      </EditableTextContainer>
    );
  }

  return (
    <EditableTextContainer>
      <EditableText 
        onDoubleClick={handleDoubleClick}
        data-placeholder={placeholder}
        data-testid="editable-text"
      >
        {content}
      </EditableText>
      {errorMessage && <ErrorText id="error-text" role="alert">{errorMessage}</ErrorText>}
    </EditableTextContainer>
  );
});

InlineText.displayName = "InlineText"; 