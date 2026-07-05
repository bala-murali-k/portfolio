// Required imports
import { createContext, useMemo, useState, type ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'

// Theme object
import { themeObject } from './../../themes/multiple.object.theme.ts'

// Define the shape of our theme context
export interface ThemeContextType {
  currentTheme: 'light' | 'dark' | 'highcontrast';
  setCurrentTheme: React.Dispatch<React.SetStateAction<'light' | 'dark' | 'highcontrast'>>;
}

// Define the theme object type
interface ThemeObjectType {
  light: any; // Replace 'any' with your actual theme type if you have it defined
  dark: any;
  highcontrast: any;
}

// Create context with proper typing and default value
export const ThemeContext = createContext<ThemeContextType | null>(null)

interface ThemeContextComponentProps {
  children: ReactNode;
}

export default function ThemeContextComponent({ children }: ThemeContextComponentProps) {
  
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'highcontrast'>('dark')
  
  const theme = useMemo(() => {
    // Type assertion to let TypeScript know themeObject has the expected shape
    return (themeObject as ThemeObjectType)[currentTheme]
  }, [currentTheme])
  
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}