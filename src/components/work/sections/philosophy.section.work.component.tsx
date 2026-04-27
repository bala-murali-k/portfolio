// Required imports
import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

export function PhilosophySectionWorkPageComponent() {
	const themeContext = useContext(ThemeContext)
	const { currentTheme } = themeContext as ThemeContextType
	const theme = useTheme()
	
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
					py: { xs: 3, md: 4 }
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
