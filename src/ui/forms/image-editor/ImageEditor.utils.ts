import { IMAGE_EDITOR_DEFAULTS, IMAGE_EDITOR_LIMITS } from "./ImageEditor.consts";

export interface CropSettings {
    scale: number;
    rotation: number;
    brightness: number;
    contrast: number;
}

export const DEFAULT_CROP_SETTINGS: CropSettings = {
    scale: 100,
    rotation: IMAGE_EDITOR_LIMITS.ROTATION_MIN,
    brightness: IMAGE_EDITOR_LIMITS.BRIGHTNESS_MIN + 50,
    contrast: IMAGE_EDITOR_LIMITS.CONTRAST_MIN + 50
};

export const applyImageTransformations = (
    imageUrl: string,
    settings: CropSettings
): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;

            const scaleFactor = settings.scale / 100;
            const scaledWidth = Math.round(img.width * scaleFactor);
            const scaledHeight = Math.round(img.height * scaleFactor);

            canvas.width = scaledWidth;
            canvas.height = scaledHeight;

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((settings.rotation * Math.PI) / 180);
            ctx.scale(scaleFactor, scaleFactor);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            ctx.restore();

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                data[i] = Math.min(255, Math.max(0, data[i] * (settings.brightness / 100)));
                data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * (settings.brightness / 100)));
                data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * (settings.brightness / 100)));

                const factor = (259 * (settings.contrast + 255)) / (255 * (259 - settings.contrast));
                data[i] = Math.min(255, Math.max(0, factor * (data[i] - 128) + 128));
                data[i + 1] = Math.min(255, Math.max(0, factor * (data[i + 1] - 128) + 128));
                data[i + 2] = Math.min(255, Math.max(0, factor * (data[i + 2] - 128) + 128));
            }

            ctx.putImageData(imageData, 0, 0);
            const transformedImageUrl = canvas.toDataURL(IMAGE_EDITOR_DEFAULTS.IMAGE_FORMAT, IMAGE_EDITOR_DEFAULTS.IMAGE_QUALITY);
            resolve(transformedImageUrl);
        };
        img.src = imageUrl;
    });
};

export const processFileUpload = (
    file: File,
    onLoad: (result: string) => void,
    onError: () => void
): void => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const result = e.target?.result as string;
        onLoad(result);
    };
    reader.onerror = onError;
    reader.readAsDataURL(file);
};

export const createCropChangeHandler = (
    setting: keyof CropSettings,
    onCropChange: (setting: keyof CropSettings, value: number) => void
) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onCropChange(setting, parseInt(e.target.value));
}; 