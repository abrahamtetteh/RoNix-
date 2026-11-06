// mobile/constants/theme.ts

export const Colors = {
  // GCB Institutional Trust & Security Base
  primary: '#002B49',     // GCB Deep Corporate Blue (Headers, App Dark Base, Primary Cards)
  primaryDark: '#001A2E', // Deep Navy Surface
  
  // MTN MoMo Action & Highlight Accent
  accent: '#FFCB05',      // Iconic MoMo Yellow (CTAs, Prompts, Active Highlights)
  accentHover: '#E5B600', // Pressed / Hover State for MoMo Yellow
  
  // Neutral Surfaces & Text
  background: '#121212',  // Charcoal Slate App Background
  surface: '#1E1E1E',     // Card Surface
  surfaceLight: '#2C2C2C',// Elevated Component Background
  textPrimary: '#FFFFFF', // High Contrast Main Text
  textSecondary: '#A0AEC0', // Subdued Secondary Text
  border: '#2D3748',      // Subtle Dividers
  
  // Status Colors
  success: '#10B981',     // Success Emerald (Verified, Completed, Positive Balance)
  warning: '#F59E0B',     // Amber Warning (Compliance Warnings, Pending Actions)
  error: '#EF4444',       // Critical Error / Fraud Alert Red
  info: '#3B82F6',        // Informational Blue
};

export const Typography = {
  fonts: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
    display: 'Outfit_700Bold',
    mono: 'FiraCode_400Regular',
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    display: 40,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
