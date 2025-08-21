export const PRESET_COLORS = [
    "#1F6FEB", "#0D1117", "#F0B429", "#238636", "#DA3633",
    "#8957E5", "#FF7B72", "#79C0FF", "#A371F7", "#7C3AED",
    "#059669", "#DC2626"
] as const;


const colorCache = new Map<string, any>();

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const cacheKey = `hexToRgb:${hex}`;
    if (colorCache.has(cacheKey)) {
        return colorCache.get(cacheKey);
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const rgb = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;

    colorCache.set(cacheKey, rgb);
    return rgb;
};

export const hslToHex = (h: number, s: number, l: number): string => {
    const hue = h / 360;
    const sat = s / 100;
    const light = l / 100;

    const c = (1 - Math.abs(2 * light - 1)) * sat;
    const x = c * (1 - Math.abs((hue * 6) % 2 - 1));
    const m = light - c / 2;

    let r = 0, g = 0, b = 0;

    if (hue < 1 / 6) {
        r = c; g = x; b = 0;
    } else if (hue < 2 / 6) {
        r = x; g = c; b = 0;
    } else if (hue < 3 / 6) {
        r = 0; g = c; b = x;
    } else if (hue < 4 / 6) {
        r = 0; g = x; b = c;
    } else if (hue < 5 / 6) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }

    const rFinal = Math.round((r + m) * 255);
    const gFinal = Math.round((g + m) * 255);
    const bFinal = Math.round((b + m) * 255);

    const result = "#" + [rFinal, gFinal, bFinal].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");

    return result;
};



