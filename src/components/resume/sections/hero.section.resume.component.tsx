// Required imports
import { Box, useTheme } from '@mui/material'

export function HeroSectionResumePageComponent() {
    const theme = useTheme()
    
    return (
        <Box 
            component="section"
            className="resume-hero"
            sx={{
                margin: '2rem 0 3rem',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
                gap: '2rem',
                alignItems: 'end'
            }}
        >
            {/* Left side - Name and Description */}
            <Box>
                <Box
                    component="h1"
                    sx={{
                        fontSize: { xs: 'clamp(2.2rem, 5vw, 4rem)' },
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        color: theme.palette.text.primary,
                        m: 0
                    }}
                >
                    bala murali
                </Box>
                
                <Box
                    className="hero-desc"
                    sx={{
                        marginTop: '1.2rem',
                        fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                        fontSize: '1.1rem',
                        color: theme.palette.text.secondary,
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                        paddingLeft: '1.5rem',
                        lineHeight: 1.6
                    }}
                >
                    frontend / full stack developer (react) —<br />
                    building responsive, performant web apps that actually work.
                </Box>
            </Box>

            {/* Right side - Availability tag and contact chips */}
            <Box
                className="hero-right"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    alignItems: 'flex-start'
                }}
            >
                {/* Availability Tag */}
                <Box
                    className="avail-tag"
                    sx={{
                        fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                        fontSize: '0.72rem',
                        background: theme.palette.primary.main,
                        color: theme.palette.background.default,
                        border: `2px solid ${theme.palette.text.primary}`,
                        padding: '0.3rem 0.9rem',
                        display: 'inline-block',
                        fontWeight: 700
                    }}
                >
                    ⚡ open to work
                </Box>

                {/* Contact Chips */}
                <Box
                    className="contact-chips"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginTop: '0.4rem'
                    }}
                >
                    <Box
                        component="a"
                        href="tel:9382513883"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontSize: '0.72rem',
                            background: theme.palette.tonal?.a20 || '#eaeaea',
                            color: theme.palette.text.primary,
                            border: `2px solid ${theme.palette.text.primary}`,
                            padding: '0.25rem 0.75rem',
                            display: 'inline-block',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                borderColor: theme.palette.primary.main
                            }
                        }}
                    >
                        📞 93825 13883
                    </Box>

                    <Box
                        component="span"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontSize: '0.72rem',
                            background: theme.palette.tonal?.a20 || '#eaeaea',
                            color: theme.palette.text.primary,
                            border: `2px solid ${theme.palette.text.primary}`,
                            padding: '0.25rem 0.75rem',
                            display: 'inline-block'
                        }}
                    >
                        📍 Madurai, TN
                    </Box>

                    <Box
                        component="a"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontSize: '0.72rem',
                            background: theme.palette.tonal?.a20 || '#eaeaea',
                            color: theme.palette.text.primary,
                            border: `2px solid ${theme.palette.text.primary}`,
                            padding: '0.25rem 0.75rem',
                            display: 'inline-block',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                borderColor: theme.palette.primary.main
                            }
                        }}
                    >
                        github ↗
                    </Box>

                    <Box
                        component="a"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontSize: '0.72rem',
                            background: theme.palette.tonal?.a20 || '#eaeaea',
                            color: theme.palette.text.primary,
                            border: `2px solid ${theme.palette.text.primary}`,
                            padding: '0.25rem 0.75rem',
                            display: 'inline-block',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                borderColor: theme.palette.primary.main
                            }
                        }}
                    >
                        linkedin ↗
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}