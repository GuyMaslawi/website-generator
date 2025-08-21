export interface WebsiteData {
    id: string;
    templateId: string;
    content: {
        heroTitle: string;
        heroSubtitle: string;
        aboutText: string;
        contactInfo: {
            phone: string;
            email: string;
            address: string;
        };
        services: Array<{
            id: string;
            title: string;
            description: string;
        }>;
        gallery: Array<{
            id: string;
            url: string;
            alt: string;
        }>;
    };
    styling: {
        colors: {
            primary: string;
            secondary: string;
            accent: string;
        };
        fonts: {
            heading: string;
            body: string;
        };
    };
}

export interface EditableTextProps {
    content: string;
    onSave: (newContent: string) => void;
    placeholder?: string;
    isEditing: boolean;
    onEditToggle: () => void;
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        email?: boolean;
        phone?: boolean;
    };
} 