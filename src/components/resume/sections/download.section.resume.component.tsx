// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function DownloadSectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    const handleDownload = () => {
        alert('attach your PDF link here')
    }
    
    return (
        <Box sx={{ textAlign: 'center', margin: '3rem 0' }}>
            <Typography
                component="h2"
                sx={{
                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    color: theme.palette.text.primary
                }}
            >
                want the PDF version?
            </Typography>
            
            <Typography
                component="p"
                sx={{
                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                    color: theme.palette.text.secondary,
                    marginBottom: '0.5rem'
                }}
            >
                grab the full ATS-optimised resume below.
            </Typography>
            
            <Box
                component="a"
                href="#"
                onClick={handleDownload}
                className="btn-large"
                sx={{
                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                    backgroundColor: theme.palette.background.paper,
                    border: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.text.primary}`,
                    padding: '1rem 2.5rem',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    boxShadow: `${currentTheme === 'highcontrast' ? '8px 8px 0' : '6px 6px 0'} ${theme.palette.text.primary}`,
                    cursor: 'pointer',
                    transition: 'all 0.1s',
                    display: 'inline-block',
                    textDecoration: 'none',
                    marginTop: '1rem',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.background.default,
                        transform: 'translate(-4px, -4px)',
                        boxShadow: `${currentTheme === 'highcontrast' ? '12px 12px 0' : '10px 10px 0'} ${theme.palette.text.primary}`
                    }
                }}
            >
                ↓ download resume.pdf →
            </Box>
        </Box>
    )
}