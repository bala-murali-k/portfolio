// Required imports
import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'

export function PhilosophySectionWorkPageComponent() {
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
	
	// Philosophy items data
	const philosophyItems = [
		{
			icon: '⚡',
			title: 'performance first',
			description: 'measure, then optimize. every kb counts.'
		},
		{
			icon: '📦',
			title: 'minimal deps',
			description: 'own your stack — fewer surprises.'
		},
		{
			icon: '🛠️',
			title: 'dev‑focused tools',
			description: 'build what developers actually enjoy using.'
		},
		{
			icon: '🔭',
			title: 'curiosity driven',
			description: 'learn by building, break things on purpose.'
		}
	]
	
	return (
		<Box 
			className="philosophy-section"
			sx={{
				my: { xs: 4, md: 6 }
			}}
		>
			{/* Section Heading */}
			<Box
				component="h2"
				sx={{
					fontFamily: '"Inter", sans-serif',
					fontWeight: 700,
					fontSize: { xs: '2rem', md: '2.5rem' },
					lineHeight: 1.1,
					letterSpacing: '-0.02em',
					color: theme.palette.text.primary,
					borderLeft: '3px solid',
					borderColor: currentTheme === 'highcontrast' 
						? theme.palette.primary.a30 
						: theme.palette.primary.main,
					pl: 2.5,
					my: { xs: 3, md: 4 }
				}}
			>
				dev philosophy
			</Box>

			{/* Philosophy Grid */}
			<Box
				className="philosophy-grid"
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(4, 1fr)'
					},
					gap: { xs: 2, md: 3 },
					mt: 3
				}}
			>
				{philosophyItems.map((item, index) => (
					<Box
						key={index}
						className="philo-item"
						sx={{
							borderLeft: '3px solid',
							borderColor: currentTheme === 'highcontrast' 
								? theme.palette.primary.a30 
								: theme.palette.primary.main,
							pl: 2,
							py: 1
						}}
					>
						<Box
							component="strong"
							sx={{
								fontFamily: '"JetBrains Mono", "Space Mono", monospace',
								fontSize: '1.1rem',
								display: 'block',
								mb: 0.5,
								color: theme.palette.text.primary
							}}
						>
							{item.icon} {item.title}
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
							{item.description}
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	)
}
