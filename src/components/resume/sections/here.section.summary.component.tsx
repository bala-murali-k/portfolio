// Required imports
import { Box, useTheme } from '@mui/material'

export function SummarySectionResumePageComponent() {
    const theme = useTheme()
    
    return (
        <Box 
            className="pull-quote"
            sx={{
                fontFamily: '"Space Mono", "JetBrains Mono", monospace',
                fontSize: '1.35rem',
                lineHeight: 1.4,
                borderLeft: `3px solid ${theme.palette.primary.main}`,
                paddingLeft: '1.5rem',
                margin: '2rem 0',
                color: theme.palette.text.primary
            }}
        >
            "junior full stack dev with 1+ yr shipping internal web apps — REST APIs, React, clean code, agile team player."
        </Box>
    )
}