// Required imports
import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'

export function HeroSectionWorkPageComponent() {
	const { currentTheme } = useContext(ThemeContext)
	const theme = useTheme()
	
	// Helper function to get accent secondary color
	const getAccentSecondary = () => {
		switch (currentTheme) {
			case 'dark':
				return theme.palette.primary.a20 // #f9c74f
			case 'highcontrast':
				return theme.palette.primary.a20 // #ff00ff
			default:
				return theme.palette.primary.a40 // #facc15 for light theme
		}
	}
	
	// Helper function for badge background
	const getBadgeBackground = () => {
		switch (currentTheme) {
			case 'dark':
				return theme.palette.primary.a30 // #8196c9
			case 'highcontrast':
				return theme.palette.primary.a30 // #ffff00
			default:
				return '#000' // black for light theme
		}
	}
	
	// Helper function for badge text color
	const getBadgeTextColor = () => {
		switch (currentTheme) {
			case 'dark':
				return theme.palette.text.primary // #eef4ff
			case 'highcontrast':
				return '#000' // black for high contrast
			default:
				return '#fff' // white for light theme
		}
	}
	
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
