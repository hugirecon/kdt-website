// KDT Theme - Deep Orange-Gold / High-Tech Eastern Rome
export const theme = {
  colors: {
    // Primary - Deep Orange/Gold (Byzantine)
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Main orange
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    // Accent - Imperial Gold
    gold: {
      light: '#fbbf24',
      DEFAULT: '#d4a574',
      dark: '#b8860b',
      imperial: '#c9a227',
    },
    // Background - Deep Byzantine
    bg: {
      primary: '#0c0a09',    // Near black with warm undertone
      secondary: '#1c1917',  // Dark warm gray
      tertiary: '#292524',   // Lighter warm gray
      card: '#1a1614',       // Card background
    },
    // Text
    text: {
      primary: '#fafaf9',
      secondary: '#a8a29e',
      muted: '#78716c',
    },
    // Accent colors
    accent: {
      copper: '#b87333',
      bronze: '#cd7f32',
      rust: '#b7410e',
      crimson: '#990000',
    },
    // Status (keep green for VOC only)
    voc: {
      green: '#00ff41',
    }
  },
  // Gradients
  gradients: {
    gold: 'linear-gradient(135deg, #c9a227 0%, #d4a574 50%, #b8860b 100%)',
    byzantine: 'linear-gradient(180deg, #1c1917 0%, #0c0a09 100%)',
    warmGlow: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 50%)',
    imperialShine: 'linear-gradient(135deg, #f97316 0%, #c9a227 100%)',
  }
};

// Tailwind config colors extension
export const tailwindColors = {
  'kdt-orange': {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  'kdt-gold': '#d4a574',
  'kdt-imperial': '#c9a227',
  'kdt-bg': '#0c0a09',
  'kdt-card': '#1a1614',
  'kdt-voc': '#00ff41',
};
