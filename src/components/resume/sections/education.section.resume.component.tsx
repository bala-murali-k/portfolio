// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function EducationSectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    const educationItems = [
        {
            year: "2021 – 2023",
            degree: "master of computer applications (MCA)",
            institution: "PET Engineering College · Vallioor, Tirunelveli, TN",
            gpa: "GPA 7.3"
        },
        {
            year: "2017 – 2020",
            degree: "bachelor of computer science (BCS)",
            institution: "Thiagarajar College Madurai · Madurai, TN",
            gpa: "GPA 6.5"
        }
    ]
    
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
                education
            </Typography>

            {/* Resume Card */}
            <Box
                className="resume-card"
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.text.primary}`,
                    boxShadow: `${currentTheme === 'highcontrast' ? '8px 8px 0' : '6px 6px 0'} ${theme.palette.text.primary}`,
                    padding: '2rem',
                    transition: 'transform 0.1s, box-shadow 0.1s',
                    marginBottom: '2rem',
                    '&:hover': {
                        transform: 'translate(-4px, -4px)',
                        boxShadow: `${currentTheme === 'highcontrast' ? '14px 14px 0' : '12px 12px 0'} ${theme.palette.text.primary}`
                    }
                }}
            >
                {/* Card Title */}
                <Typography
                    className="card-title"
                    sx={{
                        fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                        fontSize: '1.6rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                        paddingLeft: '1rem',
                        color: theme.palette.text.primary
                    }}
                >
                    academic background
                </Typography>

                {educationItems.map((item, idx) => (
                    <Box
                        key={idx}
                        className="edu-item"
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '130px 1fr' },
                            gap: '1.5rem',
                            marginBottom: idx !== educationItems.length - 1 ? '1.5rem' : 0,
                            paddingBottom: idx !== educationItems.length - 1 ? '1.5rem' : 0,
                            borderBottom: idx !== educationItems.length - 1 ? `2px dashed ${theme.palette.divider}` : 'none'
                        }}
                    >
                        {/* Education Year */}
                        <Box
                            className="edu-year"
                            sx={{
                                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                fontSize: '0.72rem',
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                paddingTop: '2px'
                            }}
                        >
                            {item.year}
                        </Box>

                        {/* Education Details */}
                        <Box>
                            <Typography
                                className="edu-degree"
                                sx={{
                                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    marginBottom: '0.2rem',
                                    color: theme.palette.text.primary
                                }}
                            >
                                {item.degree}
                            </Typography>
                            
                            <Typography
                                className="edu-inst"
                                sx={{
                                    fontSize: '0.85rem',
                                    color: theme.palette.text.secondary,
                                    marginBottom: '0.4rem',
                                    lineHeight: 1.5
                                }}
                            >
                                {item.institution}
                            </Typography>
                            
                            <Box
                                className="edu-gpa"
                                sx={{
                                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                    fontSize: '0.72rem',
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.background.default,
                                    display: 'inline-block',
                                    padding: '0.15rem 0.6rem',
                                    fontWeight: 700
                                }}
                            >
                                {item.gpa}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}