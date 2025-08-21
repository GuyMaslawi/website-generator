import { create } from "zustand";
import { WebsiteData } from "@/types/domain";
import { seedData } from "@/shared/constants/seed";

interface WebsiteStore {
    past: WebsiteData[];
    present: WebsiteData;
    future: WebsiteData[];
    previewMode: "mobile" | "tablet" | "desktop";
    tempImages: Record<string, { url: string; alt: string }>;

    update: (path: string, value: any) => void;
    undo: () => void;
    redo: () => void;
    reset: () => void;
    save: () => void;
    load: () => void;
    setPreviewMode: (mode: "mobile" | "tablet" | "desktop") => void;
    setTempImage: (itemId: string, imageData: { url: string; alt: string }) => void;
    clearTempImage: (itemId: string) => void;
}

export const useWebsiteStore = create<WebsiteStore>((set, get) => {
    const savedPreviewMode = localStorage.getItem('preview-mode') as "mobile" | "tablet" | "desktop" | null;
    const initialPreviewMode = savedPreviewMode || "desktop";

    const savedWebsiteData = localStorage.getItem('website-data');
    const initialWebsiteData = savedWebsiteData ? JSON.parse(savedWebsiteData) : seedData;

    return {
        past: [],
        present: initialWebsiteData,
        future: [],
        previewMode: initialPreviewMode,
        tempImages: (() => {
            const savedTempImages = localStorage.getItem('temp-images');
            return savedTempImages ? JSON.parse(savedTempImages) : {};
        })(),

        update: (path, value) => {
            const { present } = get();
            const newPresent = JSON.parse(JSON.stringify(present));

            const keys = path.split(".");
            let current = newPresent;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!(keys[i] in current)) {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;

            set((state) => ({
                past: [...state.past, state.present],
                present: newPresent,
                future: []
            }));

            localStorage.setItem('website-data', JSON.stringify(newPresent));
        },

        undo: () => {
            const { past, present } = get();
            if (past.length === 0) return;

            const previous = past[past.length - 1];
            const newPast = past.slice(0, -1);

            set(() => ({
                past: newPast,
                present: previous,
                future: [present, ...get().future]
            }));

            localStorage.setItem('website-data', JSON.stringify(previous));
        },

        redo: () => {
            const { future, present } = get();
            if (future.length === 0) return;

            const next = future[0];
            const newFuture = future.slice(1);

            set((state) => ({
                past: [...state.past, present],
                present: next,
                future: newFuture
            }));

            // Save to localStorage after redo
            localStorage.setItem('website-data', JSON.stringify(next));
        },

        reset: () => {
            set({
                past: [],
                present: seedData,
                future: [],
                previewMode: "desktop",
                tempImages: {}
            });

            localStorage.removeItem('website-data');
            localStorage.removeItem('temp-images');
        },

        save: () => {
            localStorage.setItem('website-data', JSON.stringify(get().present));
        },

        load: () => {
            const saved = localStorage.getItem('website-data');
            if (saved) {
                const data = JSON.parse(saved);
                set({ present: data });
            }
        },

        setPreviewMode: (mode) => {
            set({ previewMode: mode });
            localStorage.setItem('preview-mode', mode);
        },

        setTempImage: (itemId, imageData) => {
            set((state) => {
                const newTempImages = {
                    ...state.tempImages,
                    [itemId]: imageData
                };

                localStorage.setItem('temp-images', JSON.stringify(newTempImages));

                return { tempImages: newTempImages };
            });
        },

        clearTempImage: (itemId) => {
            set((state) => {
                const newTempImages = { ...state.tempImages };
                delete newTempImages[itemId];

                localStorage.setItem('temp-images', JSON.stringify(newTempImages));

                return {
                    tempImages: newTempImages
                };
            });
        }
    };
});