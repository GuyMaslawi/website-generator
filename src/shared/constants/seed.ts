import { WebsiteData } from "@/shared/types/domain";

export const seedData: WebsiteData = {
    id: "demo-1",
    templateId: "clean-hero-1",
    content: {
        heroTitle: "Bright Studio",
        heroSubtitle: "We craft delightful digital experiences.",
        aboutText: "We help small businesses go online in minutes.",
        contactInfo: {
            phone: "+1 212 555 0100",
            email: "hello@bright.studio",
            address: "123 Market St, NY"
        },
        services: [
            {
                id: "s1",
                title: "Branding",
                description: "Logos and palettes."
            },
            {
                id: "s2",
                title: "Web Design",
                description: "Responsive sites."
            },
            {
                id: "s3",
                title: "SEO",
                description: "Get found online."
            }
        ],
        gallery: [
            {
                id: "g1",
                url: "",
                alt: "Placeholder 1"
            },
            {
                id: "g2",
                url: "",
                alt: "Placeholder 2"
            },
            {
                id: "g3",
                url: "",
                alt: "Placeholder 3"
            }
        ]
    },
    styling: {
        colors: {
            primary: "#1F6FEB",
            secondary: "#0D1117",
            accent: "#F0B429"
        },
        fonts: {
            heading: "Inter, system-ui, sans-serif",
            body: "Inter, system-ui, sans-serif"
        }
    }
}; 