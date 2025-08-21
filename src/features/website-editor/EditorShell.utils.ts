export const createTextUpdateHandler = (
    update: (path: string, value: any) => void,
    setEditingFields: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
) => (path: string) => (newContent: string) => {
    // Check if path already starts with 'content.' to avoid double prefixing
    const fullPath = path.startsWith('content.') ? path : `content.${path}`;
    update(fullPath, newContent);
    setEditingFields(prev => ({ ...prev, [path]: false }));
};

export const createColorUpdateHandler = (update: (path: string, value: any) => void) => (
    path: string
) => (newColor: string) => {
    const fullPath = `styling.colors.${path}`;
    update(fullPath, newColor);
};

export const createTitleColorUpdateHandler = (update: (path: string, value: any) => void) => (
    newColor: string
) => {
    // Update the primary color which is used for all titles
    update('styling.colors.primary', newColor);
};

export const createFontUpdateHandler = (update: (path: string, value: any) => void) => (
    path: string
) => (newFont: string) => {
    update(path, newFont);
};

export const createServicesUpdateHandler = (update: (path: string, value: any) => void) => (
    services: Array<{ id: string; title: string; description: string }>
) => {
    update('content.services', services);
};

export const createGalleryUpdateHandler = (update: (path: string, value: any) => void) => (
    images: Array<{ id: string; url: string; alt: string; caption?: string }>
) => {
    update('content.gallery', images);
};

export const createToggleEditingHandler = (
    setEditingFields: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
) => (path: string) => () => {
    setEditingFields(prev => ({ ...prev, [path]: !prev[path] }));
}; 