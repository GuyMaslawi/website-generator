export const FONT_OPTIONS = [
  { value: "Inter, system-ui, sans-serif", label: "Inter" },
  { value: "Georgia, serif", label: "Georgia" },
  { value: "Times New Roman, serif", label: "Times New Roman" },
  { value: "Arial, sans-serif", label: "Arial" },
  { value: "Helvetica, sans-serif", label: "Helvetica" },
  { value: "system-ui, sans-serif", label: "System UI" },
  { value: "Roboto, sans-serif", label: "Roboto" },
  { value: "Montserrat, sans-serif", label: "Montserrat" },
  { value: "Open Sans, sans-serif", label: "Open Sans" },
  { value: "Lato, sans-serif", label: "Lato" },
  { value: "Poppins, sans-serif", label: "Poppins" },
  { value: "Source Sans Pro, sans-serif", label: "Source Sans Pro" },
  { value: "Playfair Display, serif", label: "Playfair Display" },
  { value: "Merriweather, serif", label: "Merriweather" },
  { value: "Crimson Text, serif", label: "Crimson Text" }
] as const;

export const FONT_PREVIEW_TEXTS = {
  HEADING: "The Quick Brown Fox",
  BODY: "The quick brown fox jumps over the lazy dog"
} as const;

export const FONT_STYLES = {
  HEADING: {
    FONT_SIZE: "24px",
    FONT_WEIGHT: "600"
  },
  BODY: {
    FONT_SIZE: "16px",
    FONT_WEIGHT: "400"
  }
} as const; 