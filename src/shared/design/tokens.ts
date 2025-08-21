// Design System Tokens
export const designTokens = {
    // Color Palette
    colors: {
        // Primary colors
        primary: {
            50: '#f0f4ff',
            100: '#e0eaff',
            200: '#c7d8ff',
            300: '#a4bcff',
            400: '#8b96ff',
            500: '#7c6dfc',
            600: '#6d4df2',
            700: '#5b3cde',
            800: '#4c32bb',
            900: '#402b97',
            950: '#261866',
        },

        // Secondary colors
        secondary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
        },

        // Accent colors
        accent: {
            50: '#fef7ee',
            100: '#fdead7',
            200: '#fbd2ae',
            300: '#f8b179',
            400: '#f48742',
            500: '#f1661e',
            600: '#e24e14',
            700: '#bb3a12',
            800: '#952f16',
            900: '#782a15',
            950: '#411309',
        },

        // Success
        success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
        },

        // Warning
        warning: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
        },

        // Error
        error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
        },

        // Gradients
        gradients: {
            primary: 'linear-gradient(135deg, #7c6dfc 0%, #5b3cde 100%)',
            secondary: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
            accent: 'linear-gradient(135deg, #f1661e 0%, #e24e14 100%)',
            glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
            glassDark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
            hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            sunset: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
            ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            aurora: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        }
    },

    // Typography
    typography: {
        fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
            mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        },
        fontSize: {
            xs: '0.75rem',     // 12px
            sm: '0.875rem',    // 14px
            base: '1rem',      // 16px
            lg: '1.125rem',    // 18px
            xl: '1.25rem',     // 20px
            '2xl': '1.5rem',   // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem',  // 36px
            '5xl': '3rem',     // 48px
            '6xl': '3.75rem',  // 60px
            '7xl': '4.5rem',   // 72px
            '8xl': '6rem',     // 96px
            '9xl': '8rem',     // 128px
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    },

    // Spacing
    spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',  // 2px
        1: '0.25rem',     // 4px
        1.5: '0.375rem',  // 6px
        2: '0.5rem',      // 8px
        2.5: '0.625rem',  // 10px
        3: '0.75rem',     // 12px
        3.5: '0.875rem',  // 14px
        4: '1rem',        // 16px
        5: '1.25rem',     // 20px
        6: '1.5rem',      // 24px
        7: '1.75rem',     // 28px
        8: '2rem',        // 32px
        9: '2.25rem',     // 36px
        10: '2.5rem',     // 40px
        11: '2.75rem',    // 44px
        12: '3rem',       // 48px
        14: '3.5rem',     // 56px
        16: '4rem',       // 64px
        20: '5rem',       // 80px
        24: '6rem',       // 96px
        28: '7rem',       // 112px
        32: '8rem',       // 128px
        36: '9rem',       // 144px
        40: '10rem',      // 160px
        44: '11rem',      // 176px
        48: '12rem',      // 192px
        52: '13rem',      // 208px
        56: '14rem',      // 224px
        60: '15rem',      // 240px
        64: '16rem',      // 256px
        72: '18rem',      // 288px
        80: '20rem',      // 320px
        96: '24rem',      // 384px
    },

    // Border Radius
    borderRadius: {
        none: '0px',
        sm: '0.125rem',   // 2px
        base: '0.25rem',  // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        '4xl': '2rem',    // 32px
        full: '9999px',
    },

    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: '0 0 #0000',

        // Colored shadows
        primarySm: '0 4px 14px 0 rgba(124, 109, 252, 0.2)',
        primary: '0 8px 25px -8px rgba(124, 109, 252, 0.4)',
        primaryLg: '0 20px 40px -10px rgba(124, 109, 252, 0.6)',

        accentSm: '0 4px 14px 0 rgba(241, 102, 30, 0.2)',
        accent: '0 8px 25px -8px rgba(241, 102, 30, 0.4)',
        accentLg: '0 20px 40px -10px rgba(241, 102, 30, 0.6)',

        glass: '0 8px 32px 0 rgba(255, 255, 255, 0.37)',
        glassDark: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    },

    // Transitions
    transition: {
        none: 'none',
        all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        default: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        fast: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        smooth: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    // Z-index
    zIndex: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },

    // Breakpoints
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
} as const;

// Helper functions for design tokens
export const token = {
    color: (path: string) => {
        const keys = path.split('.');
        let value: any = designTokens.colors;
        for (const key of keys) {
            value = value?.[key];
        }
        return value || '#000000';
    },

    spacing: (size: keyof typeof designTokens.spacing) => designTokens.spacing[size],

    shadow: (type: keyof typeof designTokens.shadows) => designTokens.shadows[type],

    gradient: (type: keyof typeof designTokens.colors.gradients) => designTokens.colors.gradients[type],

    transition: (type: keyof typeof designTokens.transition = 'default') => designTokens.transition[type],

    radius: (size: keyof typeof designTokens.borderRadius) => designTokens.borderRadius[size],

    font: (family: keyof typeof designTokens.typography.fontFamily) =>
        designTokens.typography.fontFamily[family].join(', '),

    fontSize: (size: keyof typeof designTokens.typography.fontSize) =>
        designTokens.typography.fontSize[size],

    fontWeight: (weight: keyof typeof designTokens.typography.fontWeight) =>
        designTokens.typography.fontWeight[weight],
};

export default designTokens;