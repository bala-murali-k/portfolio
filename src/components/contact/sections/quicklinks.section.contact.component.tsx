// Required imports
import { Box, useTheme, Grid } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from '../../../context/theme/theme.context.component.tsx'

export function QuickLinksSectionContactPageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    return (
        <Box 
            component="section"
            sx={{
                py: { xs: 4, md: 6 }
            }}
        >
            {/* Section Title */}
            <Box
                component="h2"
                sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2rem' },
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    color: theme.palette.text.primary,
                    m: 0,
                    mb: 3,
                    borderLeft: '3px solid',
                    borderColor: currentTheme === 'highcontrast' 
                        ? theme.palette.primary.a30 
                        : theme.palette.primary.main,
                    pl: 3
                }}
            >
                quick links
            </Box>

            {/* Quick Links Grid */}
            <Grid 
                container 
                spacing={2}
                sx={{
                    mt: 1,
                    mb: 2
                }}
            >
                {/* Open Source */}
                {/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Box
                        className="quick-item"
                        sx={{
                            borderLeft: '3px solid',
                            borderColor: currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a30 
                                : theme.palette.primary.main,
                            pl: 2,
                            fontFamily: '"JetBrains Mono", "Space Mono", monospace'
                        }}
                    >
                        <Box
                            component="strong"
                            sx={{
                                display: 'block',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 0.5
                            }}
                        >
                            ⚡ open source
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                                color: theme.palette.text.secondary,
                                m: 0
                            }}
                        >
                            contributions to rust, node, go
                        </Box>
                    </Box>
                </Grid> */}

                {/* Collaboration */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        className="quick-item"
                        sx={{
                            borderLeft: '3px solid',
                            borderColor: currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a30 
                                : theme.palette.primary.main,
                            pl: 2,
                            fontFamily: '"JetBrains Mono", "Space Mono", monospace'
                        }}
                    >
                        <Box
                            component="strong"
                            sx={{
                                display: 'block',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 0.5
                            }}
                        >
                            🤝 collaboration
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                                color: theme.palette.text.secondary,
                                m: 0
                            }}
                        >
                            looking for co‑maintainers
                        </Box>
                    </Box>
                </Grid>

                {/* Freelance */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        className="quick-item"
                        sx={{
                            borderLeft: '3px solid',
                            borderColor: currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a30 
                                : theme.palette.primary.main,
                            pl: 2,
                            fontFamily: '"JetBrains Mono", "Space Mono", monospace'
                        }}
                    >
                        <Box
                            component="strong"
                            sx={{
                                display: 'block',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 0.5
                            }}
                        >
                            💰 freelance
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                                color: theme.palette.text.secondary,
                                m: 0
                            }}
                        >
                            available for short‑term projects
                        </Box>
                    </Box>
                </Grid>

                {/* Technical Chat */}
                <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                    <Box
                        className="quick-item"
                        sx={{
                            borderLeft: '3px solid',
                            borderColor: currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a30 
                                : theme.palette.primary.main,
                            pl: 2,
                            fontFamily: '"JetBrains Mono", "Space Mono", monospace'
                        }}
                    >
                        <Box
                            component="strong"
                            sx={{
                                display: 'block',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 0.5
                            }}
                        >
                            💬 technical chat
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                                color: theme.palette.text.secondary,
                                m: 0
                            }}
                        >
                            dev tools, cli, web perf
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}