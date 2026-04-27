// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function LeadershipSectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    return (
        <Box>
            {/* Section Label */}
            <Typography
                component="h2"
                className="section-label"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    margin: '3rem 0 1rem',
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                    paddingLeft: '1.5rem',
                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                    color: theme.palette.text.primary
                }}
            >
                leadership
            </Typography>

            {/* Volunteer/Leadership Card */}
            <Box
                className="vol-card"
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.text.primary}`,
                    boxShadow: `${currentTheme === 'highcontrast' ? '8px 8px 0' : '6px 6px 0'} ${theme.palette.text.primary}`,
                    padding: '1.5rem 2rem',
                    transition: 'transform 0.1s, box-shadow 0.1s',
                    marginBottom: '2rem',
                    '&:hover': {
                        transform: 'translate(-4px, -4px)',
                        boxShadow: `${currentTheme === 'highcontrast' ? '14px 14px 0' : '12px 12px 0'} ${theme.palette.text.primary}`
                    }
                }}
            >
                {/* Header */}
                <Box
                    className="vol-header"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        marginBottom: '0.75rem'
                    }}
                >
                    <Box>
                        <Typography
                            className="vol-org"
                            sx={{
                                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                fontSize: '0.72rem',
                                color: theme.palette.primary.main,
                                marginBottom: '0.15rem'
                            }}
                        >
                            Gove · Thirunelveli, Tamil Nadu
                        </Typography>
                        <Typography
                            className="vol-title"
                            sx={{
                                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: theme.palette.text.primary
                            }}
                        >
                            👨‍🏫 mentor — software testing team
                        </Typography>
                    </Box>
                    <Typography
                        className="vol-period"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontSize: '0.7rem',
                            color: theme.palette.text.secondary,
                            whiteSpace: 'nowrap'
                        }}
                    >
                        dec 2025 – jan 2026
                    </Typography>
                </Box>
                
                {/* Description */}
                <Typography
                    className="vol-desc"
                    sx={{
                        fontSize: '0.87rem',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.65,
                        marginTop: '0.5rem'
                    }}
                >
                    Took ownership of training and mentoring three software testers within the organisation. Provided hands-on guidance on project workflows, testing practices, and effective collaboration with developers. Managed knowledge transfer smoothly while maintaining my own delivery commitments — a real test of leadership under pressure.
                </Typography>
            </Box>
        </Box>
    )
}