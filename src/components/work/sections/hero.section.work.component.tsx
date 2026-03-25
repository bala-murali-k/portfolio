// Required imports
import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function HeroSectionWorkPageComponent() {
	const themeContext = useContext(ThemeContext)
	const { currentTheme } = themeContext as ThemeContextType
	const theme = useTheme()
	
	return (
		<Box 
			className="hero-split"
			sx={{
				my: { xs: 2, md: 5 }
			}}
		>
			{/* Work Hero Header */}
			<Box 
				className="work-hero"
				sx={{
					mb: { xs: 4, md: 5 }
				}}
			>
				<Box
					component="h1"
					sx={{
						fontFamily: '"Inter", sans-serif',
						fontWeight: 700,
						fontSize: { xs: '2.5rem', md: '3rem' },
						lineHeight: 1.1,
						letterSpacing: '-0.02em',
						color: theme.palette.text.primary,
						m: 0,
						mb: 1
					}}
				>
					selected work
				</Box>
				
				<Box
					className="hero-desc"
					sx={{
						fontFamily: '"JetBrains Mono", "Space Mono", monospace',
						fontSize: { xs: '1rem', md: '1.2rem' },
						lineHeight: 1.5,
						color: theme.palette.text.secondary,
						maxWidth: '700px',
						borderLeft: '3px solid',
						borderColor: currentTheme === 'highcontrast' 
							? theme.palette.primary.a30 
							: theme.palette.primary.main,
						pl: 3,
						py: 0.5
					}}
				>
					projects built for learning, clients, and curiosity —<br /> 
					from terminal UIs to backend tools.
				</Box>
			</Box>
		</Box>
	)
}
