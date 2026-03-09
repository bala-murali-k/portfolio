// theme.d.ts
import { Theme } from '@mui/material/styles'

// Extend the Palette interface to include custom color properties
declare module '@mui/material/styles' {
  interface Palette {
    surface: PaletteColor & {
      a10: string
      a20: string
      a30: string
      a40: string
      a50: string
      a60: string
    }
    tonal: PaletteColor & {
      a10: string
      a20: string
      a30: string
      a40: string
      a50: string
      a60: string
    }
  }

  interface PaletteOptions {
    surface?: PaletteColorOptions & {
      a10?: string
      a20?: string
      a30?: string
      a40?: string
      a50?: string
      a60?: string
    }
    tonal?: PaletteColorOptions & {
      a10?: string
      a20?: string
      a30?: string
      a40?: string
      a50?: string
      a60?: string
    }
  }

  // Extend the PaletteColor interface to include a10-a60 properties
  interface PaletteColor {
    a10: string
    a20: string
    a30: string
    a40: string
    a50: string
    a60: string
  }

  interface SimplePaletteColorOptions {
    a10?: string
    a20?: string
    a30?: string
    a40?: string
    a50?: string
    a60?: string
  }
}

// Extend the Theme interface to include custom components if needed
declare module '@mui/material/styles' {
  interface Components {
    MuiCssBaseline?: {
      styleOverrides?: {
        body?: React.CSSProperties
      }
    }
  }
}

export interface ThemeObject {
  light: Theme
  dark: Theme
  highcontrast: Theme
}

export const themeObject: ThemeObject