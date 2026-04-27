// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function ProjectSectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    const projects = [
        {
            name: "🛣️ Tolls Management System",
            meta: "Gove · sep 2025 – jan 2026",
            description: "Frontend for a toll information management platform — dynamic views, real-time data, reusable React components.",
            bullets: [
                "Built dynamic & responsive UIs for toll information management",
                "Implemented filtering and data views for better record accessibility",
                "Integrated REST APIs for real-time data updates and transactions",
                "Reusable React components → improved maintainability"
            ],
            tags: ["React", "REST API", "Axios", "Responsive"]
        },
        {
            name: "🧾 Bills Management System",
            meta: "Gove · oct 2024 – sep 2025",
            description: "Reusable UI components for internal billing workflows with full API integration and performance improvements.",
            bullets: [
                "Developed reusable components for billing workflows",
                "Integrated REST APIs for billing and transaction data",
                "Filtering & data views → improved data accessibility",
                "Consistent performance across screens via component reuse"
            ],
            tags: ["React", "Fetch API", "REST API", "Performance"]
        }
    ]
    
    const skillCategories = [
        {
            title: "frontend",
            tags: ["HTML5", "CSS3", "JavaScript", "React", "Svelte", "Responsive Design", "UI Development"]
        },
        {
            title: "APIs & data",
            tags: ["REST API", "Axios", "Fetch API", "JSON"]
        },
        {
            title: "tools & practices",
            tags: ["Git", "GitHub", "Agile", "Clean Code", "Debugging", "Web Perf", "Version Control"]
        }
    ]
    
    return (
        <Box className="two-col" sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: '2rem'
        }}>
            {/* Projects Card */}
            <Box
                className="resume-card"
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.text.primary}`,
                    boxShadow: `${currentTheme === 'highcontrast' ? '8px 8px 0' : '6px 6px 0'} ${theme.palette.text.primary}`,
                    padding: '2rem',
                    transition: 'transform 0.1s, box-shadow 0.1s',
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
                    featured projects
                </Typography>

                {projects.map((project, idx) => (
                    <Box
                        key={idx}
                        className="project-block"
                        sx={{
                            marginBottom: idx !== projects.length - 1 ? '1.5rem' : 0,
                            paddingBottom: idx !== projects.length - 1 ? '1.5rem' : 0,
                            borderBottom: idx !== projects.length - 1 ? `2px dashed ${theme.palette.divider}` : 'none'
                        }}
                    >
                        {/* Project Header */}
                        <Box
                            className="project-header"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                marginBottom: '0.4rem'
                            }}
                        >
                            <Typography
                                className="project-name"
                                sx={{
                                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    color: theme.palette.text.primary
                                }}
                            >
                                {project.name}
                            </Typography>
                            <Typography
                                className="project-meta"
                                sx={{
                                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                    fontSize: '0.7rem',
                                    color: theme.palette.primary.main
                                }}
                            >
                                {project.meta}
                            </Typography>
                        </Box>
                        
                        {/* Project Description */}
                        <Typography
                            className="project-desc"
                            sx={{
                                fontSize: '0.87rem',
                                color: theme.palette.text.secondary,
                                margin: '0.4rem 0',
                                lineHeight: 1.5
                            }}
                        >
                            {project.description}
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
                            {project.bullets.map((bullet, bulletIdx) => (
                                <Box
                                    component="li"
                                    key={bulletIdx}
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
                                >
                                    {bullet}
                                </Box>
                            ))}
                        </Box>
                        
                        {/* Tag Group */}
                        <Box
                            className="tag-group"
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginTop: '0.6rem'
                            }}
                        >
                            {project.tags.map((tag, tagIdx) => (
                                <Box
                                    key={tagIdx}
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
                                    {tag}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Skills Card */}
            <Box
                className="resume-card"
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.text.primary}`,
                    boxShadow: `${currentTheme === 'highcontrast' ? '8px 8px 0' : '6px 6px 0'} ${theme.palette.text.primary}`,
                    padding: '2rem',
                    transition: 'transform 0.1s, box-shadow 0.1s',
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
                    skills
                </Typography>

                <Box className="skills-section" sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, idx) => (
                        <Box
                            key={idx}
                            className="skill-category"
                            sx={{
                                marginBottom: idx !== skillCategories.length - 1 ? '1.4rem' : 0
                            }}
                        >
                            <Typography
                                component="h4"
                                sx={{
                                    fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                                    fontSize: '0.85rem',
                                    marginBottom: '0.6rem',
                                    color: theme.palette.text.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                {category.title}
                            </Typography>
                            <Box
                                className="tag-group"
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}
                            >
                                {category.tags.map((tag, tagIdx) => (
                                    <Box
                                        key={tagIdx}
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
                                        {tag}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}