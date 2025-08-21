export const INLINE_TEXT_DEFAULTS = {
    PLACEHOLDER: "Click to edit",
    FIELD_NAME: "inline-text"
} as const;

export const INLINE_TEXT_MESSAGES = {
    REQUIRED: "This field is required",
    MIN_LENGTH: "Minimum {minLength} characters required",
    MAX_LENGTH: "Maximum {maxLength} characters allowed",
    INVALID_FORMAT: "Invalid format",
    INVALID_EMAIL: "Please enter a valid email address",
    INVALID_PHONE: "Please enter a valid phone number"
} as const;

export const INLINE_TEXT_STYLES = {
    BUTTON_CONTAINER: {
        MARGIN_TOP: "12px",
        DISPLAY: "flex",
        GAP: "8px"
    }
} as const; 