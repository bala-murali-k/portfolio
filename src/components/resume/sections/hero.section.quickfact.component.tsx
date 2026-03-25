// Required imports
import { Box, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function QuickFactSectionResumePageComponent() {
	const themeContext = useContext(ThemeContext)
    const { currentTheme } = themeContext as ThemeContextType
    const theme = useTheme()
    
    const factItems = [
        { label: "1+ year", description: "professional experience" },
        { label: "React.js", description: "primary framework" },
        { label: "2 systems", description: "built & shipped at Gove" },
        { label: "3 testers", description: "mentored & onboarded" },
        { label: "MCA grad", description: "PET Engineering College" },
        { label: "🌏 India", description: "based in Tamil Nadu" }
    ]
    
    return (
        <Box 
            className="facts-grid"
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem',
                margin: '2rem 0 3rem'
            }}
        >
            {factItems.map((item, index) => (
                <Box 
                    key={index}
                    className="fact-item" 
                    sx={{
                        borderLeft: `${currentTheme === 'highcontrast' ? '4px' : '3px'} solid ${theme.palette.primary.main}`,
                        paddingLeft: '1.2rem'
                    }}
                >
                    <Typography
                        component="strong"
                        sx={{
                            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            display: 'block',
                            color: theme.palette.text.primary,
                            mb: 0.25
                        }}
                    >
                        {item.label}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: '0.82rem',
                            lineHeight: 1.5,
                            color: theme.palette.text.secondary,
                            margin: 0
                        }}
                    >
                        {item.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}