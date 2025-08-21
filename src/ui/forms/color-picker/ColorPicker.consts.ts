export const COLOR_PICKER_DEFAULTS = {
    INITIAL_HUE: 210,
    INITIAL_LIGHTNESS: 50,
    SATURATION: 80
} as const;

export const COLOR_PICKER_LIMITS = {
    HUE_MIN: 0,
    HUE_MAX: 360,
    LIGHTNESS_MIN: 0,
    LIGHTNESS_MAX: 100
} as const;

export const COLOR_PICKER_LABELS = {
    HUE: "Hue",
    LIGHTNESS: "Lightness"
} as const;

export const COLOR_PICKER_UNITS = {
    HUE: "°",
    LIGHTNESS: "%"
} as const; 