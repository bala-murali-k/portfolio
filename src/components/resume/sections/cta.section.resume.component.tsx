// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function CTASectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    return (
        <Box
            className="cta-block"
            sx={{
                backgroundColor: theme.palette.background.paper,
                border: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.text.primary}`,
                padding: '3rem 2rem',
                textAlign: 'center',
                boxShadow: `${currentTheme === 'highcontrast' ? '8px 8px 0' : '6px 6px 0'} ${theme.palette.text.primary}`,
                margin: '3rem 0',
                transition: 'transform 0.1s, box-shadow 0.1s',
                '&:hover': {
                    transform: 'translate(-4px, -4px)',
                    boxShadow: `${currentTheme === 'highcontrast' ? '12px 12px 0' : '10px 10px 0'} ${theme.palette.text.primary}`
                }
            }}
        >
            <Typography
                component="h2"
                sx={{
                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                    fontSize: '2rem',
                    marginBottom: '1.5rem',
                    color: theme.palette.text.primary
                }}
            >
                want to collaborate or hire me?
            </Typography>
            
            <Box
                className="cta-links"
                sx={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                    flexWrap: 'wrap'
                }}
            >
                <Box
                    component="a"
                    href="tel:9382513883"
                    sx={{
                        color: theme.palette.text.primary,
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                        textUnderlineOffset: '4px',
                        transition: 'all 0.2s',
                        '&:hover': {
                            color: theme.palette.primary.main,
                            textDecorationColor: theme.palette.text.primary
                        }
                    }}
                >
                    📞 call me
                </Box>
                
                <Box
                    component="a"
                    href="https://github.com/bala-murali-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: theme.palette.text.primary,
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                        textUnderlineOffset: '4px',
                        transition: 'all 0.2s',
                        '&:hover': {
                            color: theme.palette.primary.main,
                            textDecorationColor: theme.palette.text.primary
                        }
                    }}
                >
                    github ↗
                </Box>
                
                <Box
                    component="a"
                    href="https://www.linkedin.com/in/bala-murali-k0701/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: theme.palette.text.primary,
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                        textUnderlineOffset: '4px',
                        transition: 'all 0.2s',
                        '&:hover': {
                            color: theme.palette.primary.main,
                            textDecorationColor: theme.palette.text.primary
                        }
                    }}
                >
                    linkedin ↗
                </Box>
                
                <MuiLink
                    component={RouterLink}
                    to="/contact"
                    sx={{
                        color: theme.palette.text.primary,
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                        textUnderlineOffset: '4px',
                        transition: 'all 0.2s',
                        '&:hover': {
                            color: theme.palette.primary.main,
                            textDecorationColor: theme.palette.text.primary
                        }
                    }}
                >
                    mail me →
                </MuiLink>
            </Box>
        </Box>
    )
}