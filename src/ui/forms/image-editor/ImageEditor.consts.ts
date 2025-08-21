export const IMAGE_EDITOR_MESSAGES = {
  UPLOAD_CLICK: "Upload image",
  PROCESSING: "Processing...",
  SUPPORT_INFO: "Supports JPG, PNG, GIF up to 10MB",
  CHANGE_IMAGE: "Change Image",
  RESET: "Reset",
  SAVE: "Save",
  DESCRIBE_IMAGE: "Describe the image"
} as const;

export const IMAGE_EDITOR_DEFAULTS = {
  ALT_PREVIEW: "Preview",
  IMAGE_QUALITY: 0.9,
  IMAGE_FORMAT: "image/jpeg"
} as const;

export const IMAGE_EDITOR_LIMITS = {
  SCALE_MIN: 25,
  SCALE_MAX: 300,
  ROTATION_MIN: 0,
  ROTATION_MAX: 360,
  BRIGHTNESS_MIN: 50,
  BRIGHTNESS_MAX: 150,
  CONTRAST_MIN: 50,
  CONTRAST_MAX: 150
} as const;

export const IMAGE_EDITOR_STYLES = {
  BUTTON_GAP: "12px",
  BUTTON_MARGIN_TOP: "16px",
  SAVE_BUTTON_BG: "#3b82f6",
  SAVE_BUTTON_COLOR: "white"
} as const; 