// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function ExperienceSectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    const techStack = ['React', 'JavaScript', 'REST API', 'Axios', 'Fetch API', 'Git', 'Agile']
    
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
                experience
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
                    work history
                </Typography>

                {/* Timeline Item */}
                <Box
                    className="timeline-item"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '130px 1fr' },
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        paddingBottom: '1.5rem',
                        borderBottom: `2px dashed ${theme.palette.divider}`
                    }}
                >
                    {/* Timeline Date */}
                    <Box
                        className="timeline-date"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                            fontSize: '0.78rem',
                            paddingTop: '3px'
                        }}
                    >
                        sep 2025<br />— present
                    </Box>

                    {/* Timeline Content */}
                    <Box className="timeline-content">
                        <Typography
                            className="company"
                            sx={{
                                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                fontSize: '0.85rem',
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                marginBottom: '0.5rem'
                            }}
                        >
                            Gove
                        </Typography>
                        
                        <Typography
                            component="h3"
                            sx={{
                                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                fontSize: '1.1rem',
                                marginBottom: '0.25rem',
                                color: theme.palette.text.primary,
                                fontWeight: 600
                            }}
                        >
                            Junior Software Developer
                        </Typography>
                        
                        <Typography
                            className="location"
                            sx={{
                                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                fontSize: '0.72rem',
                                color: theme.palette.text.secondary,
                                marginBottom: '0.6rem'
                            }}
                        >
                            📍 Thirunelveli, Tamil Nadu · Full-time
                        </Typography>
                        
                        <Typography
                            component="p"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                                lineHeight: 1.6
                            }}
                        >
                            Building and maintaining responsive frontend features for internal web applications that power day-to-day operations.
                        </Typography>
                        
                        {/* Bullet List */}
                        <Box
                            component="ul"
                            className="bullet-list"
                            sx={{
                                listStyle: 'none',
                                marginTop: '0.4rem',
                                padding: 0
                            }}
                        >
                            {[
                                'Developed responsive frontend features using <strong>React</strong> to support internal web applications',
                                'Integrated REST APIs using <strong>Axios</strong> and <strong>Fetch API</strong> for transaction and records management',
                                'Improved page load performance and UI responsiveness through optimised component rendering',
                                'Reduced UI bugs by debugging issues and participating in <strong>peer code reviews</strong>',
                                'Collaborated with cross-functional teams in an <strong>Agile</strong> development environment'
                            ].map((item, index) => (
                                <Box
                                    component="li"
                                    key={index}
                                    sx={{
                                        fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                        fontSize: '0.78rem',
                                        padding: '0.35rem 0',
                                        borderBottom: `1px dashed ${theme.palette.divider}`,
                                        color: theme.palette.text.secondary,
                                        paddingLeft: '1rem',
                                        position: 'relative',
                                        '&:last-child': {
                                            borderBottom: 'none'
                                        },
                                        '&::before': {
                                            content: '">"',
                                            color: theme.palette.primary.main,
                                            position: 'absolute',
                                            left: 0,
                                            fontWeight: 700
                                        }
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            ))}
                        </Box>
                        
                        {/* Tag Group */}
                        <Box
                            className="tag-group"
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginTop: '1rem'
                            }}
                        >
                            {techStack.map((tech, index) => (
                                <Box
                                    key={index}
                                    className="tag-pill"
                                    sx={{
                                        fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                        backgroundColor: theme.palette.tonal?.a20 || '#eaeaea',
                                        color: theme.palette.text.primary,
                                        padding: '0.2rem 0.8rem',
                                        border: `2px solid ${theme.palette.text.primary}`,
                                        fontSize: '0.72rem',
                                        textTransform: 'uppercase',
                                        display: 'inline-block'
                                    }}
                                >
                                    {tech}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}