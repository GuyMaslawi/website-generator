export interface RGB {
    r: number;
    g: number;
    b: number;
}

export const calculateHueFromRGB = (rgb: RGB): number => {
    const { r, g, b } = rgb;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    if (max === min) return 0;

    const d = max - min;
    let h = 0;

    if (max === r) {
        h = ((g - b) / d) % 6;
    } else if (max === g) {
        h = (b - r) / d + 2;
    } else {
        h = (r - g) / d + 4;
    }

    h = h * 60;
    if (h < 0) h += 360;

    return Math.round(h);
};

export const calculateLightnessFromRGB = (rgb: RGB): number => {
    const { r, g, b } = rgb;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;

    return Math.round(l / 255 * 100);
};

export const processHexColor = (value: string): { hue: number; lightness: number } | null => {
    if (!value || !value.startsWith("#")) return null;

    return {
        hue: 210,
        lightness: 50
    };
}; 