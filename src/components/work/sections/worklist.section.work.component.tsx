// Required imports
import { Box, useTheme, Grid } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'

export function WorkListSectionWorkPageComponent() {
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
	
	// Filter categories
	const filterCategories = ['All', 'Web Apps', 'Backend', 'Experiments', 'Tools']
	
	// Project data
	const projects = [
		{
			icon: '📚',
			title: 'Task Library',
			description: 'async task queue with retry & schedule.',
			tech: ['rust', 'wasm', 'js'],
			links: { github: '#' }
		},
		{
			icon: '🌀',
			title: 'WebSocket Terminal',
			description: 'browser-based terminal over websockets.',
			tech: ['go', 'websocket', 'react'],
			links: { github: '#', demo: '#' }
		},
		{
			icon: '⌨️',
			title: 'Typing Practice',
			description: 'minimal typing test with code snippets.',
			tech: ['vue', 'indexedDB'],
			links: { github: '#', demo: '#' }
		},
	]
	
	return (
		<Box 
			className="work-list-section"
			sx={{
				my: { xs: 4, md: 6 }
			}}
		>
			{/* Filter Bar - Visual Only */}
			<Box
				className="filter-bar"
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '0.8rem 1.5rem',
					my: 3,
					py: 2,
					borderTop: '3px solid',
					borderBottom: '3px solid',
					borderColor: currentTheme === 'highcontrast' 
						? theme.palette.primary.a30 
						: '#000'
				}}
			>
				{filterCategories.map((filter) => (
					<Box
						key={filter}
						className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
						sx={{
							fontFamily: '"JetBrains Mono", "Space Mono", monospace',
							background: filter === 'All' 
								? (currentTheme === 'highcontrast' ? theme.palette.primary.a30 : theme.palette.primary.main)
								: 'transparent',
							color: filter === 'All'
								? (currentTheme === 'highcontrast' ? '#000' : theme.palette.background.default)
								: theme.palette.text.primary,
							border: '3px solid',
							borderColor: currentTheme === 'highcontrast' 
								? theme.palette.primary.a30 
								: '#000',
							px: 2,
							py: 1,
							fontSize: '1rem',
							fontWeight: 600,
							boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
								? theme.palette.primary.a10 
								: '#000'}`,
							cursor: 'default',
							display: 'inline-block'
						}}
					>
						{filter}
					</Box>
				))}
			</Box>

			{/* Project Grid */}
			<Grid 
				container 
				spacing={3}
				sx={{
					mt: 2,
				}}
			>
				{projects.map((project, index) => (
					<Grid 
						item 
						xs={12} 
						sm={6} 
						md={4} 
						key={index}
					>
						<Box
							className="card"
							sx={{
								background: theme.palette.background.paper,
								border: '3px solid',
								borderColor: currentTheme === 'highcontrast' 
									? theme.palette.primary.a30 
									: '#000',
								boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
									? theme.palette.primary.a10 
									: '#000'}`,
								p: 2.5,
								display: 'flex',
								flexDirection: 'column',
								transition: 'transform 0.1s ease, box-shadow 0.1s ease',
								'&:hover': {
									transform: 'translate(-4px, -4px)',
									boxShadow: `12px 12px 0 ${currentTheme === 'highcontrast' 
										? theme.palette.primary.a10 
										: '#000'}`
								}
							}}
						>
							{/* Preview Area */}
							<Box
								className="preview-area"
								sx={{
									width: '100%',
									height: '130px',
									background: getBadgeBackground(),
									border: '3px solid',
									borderColor: currentTheme === 'highcontrast' 
										? theme.palette.primary.a30 
										: '#000',
									mb: 2,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: '"JetBrains Mono", "Space Mono", monospace',
									fontSize: '2.5rem',
									color: getBadgeTextColor(),
									boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
										? theme.palette.primary.a10 
										: '#000'}`
								}}
							>
								{project.icon}
							</Box>

							{/* Card Title */}
							<Box
								className="card-title"
								sx={{
									fontFamily: '"Inter", sans-serif',
									fontSize: '1.8rem',
									fontWeight: 700,
									lineHeight: 1.2,
									mb: 1,
									color: theme.palette.text.primary
								}}
							>
								{project.title}
							</Box>

							{/* Card Description */}
							<Box
								className="card-desc"
								sx={{
									color: theme.palette.text.secondary,
									mb: 2,
									fontSize: '0.95rem',
									fontFamily: '"Inter", sans-serif'
								}}
							>
								{project.description}
							</Box>

							{/* Tech Pills */}
							<Box
								className="tech-pills"
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: '0.6rem',
									my: 1
								}}
							>
								{project.tech.map((tech, i) => (
									<Box
										key={i}
										className="pill"
										sx={{
											fontFamily: '"JetBrains Mono", "Space Mono", monospace',
											background: getBadgeBackground(),
											color: getBadgeTextColor(),
											px: 1,
											py: 0.5,
											border: '2px solid',
											borderColor: currentTheme === 'highcontrast' 
												? theme.palette.primary.a30 
												: '#000',
											fontSize: '0.75rem',
											textTransform: 'uppercase',
											display: 'inline-block'
										}}
									>
										{tech}
									</Box>
								))}
							</Box>

							{/* Card Links */}
							<Box
								className="card-links"
								sx={{
									display: 'flex',
									gap: 2,
									mt: 'auto',
									pt: 2,
									fontFamily: '"JetBrains Mono", "Space Mono", monospace'
								}}
							>
								{project.links.github && (
									<Box
										component="a"
										href={project.links.github}
										sx={{
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											borderBottom: '2px solid',
											borderColor: currentTheme === 'highcontrast' 
												? theme.palette.primary.a30 
												: theme.palette.primary.main,
											'&:hover': {
												background: currentTheme === 'highcontrast' 
													? theme.palette.primary.a30 
													: theme.palette.primary.main,
												color: currentTheme === 'highcontrast' 
													? '#000' 
													: theme.palette.background.default
											}
										}}
									>
										GitHub
									</Box>
								)}
								{project.links.demo && (
									<Box
										component="a"
										href={project.links.demo}
										sx={{
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											borderBottom: '2px solid',
											borderColor: currentTheme === 'highcontrast' 
												? theme.palette.primary.a30 
												: theme.palette.primary.main,
											'&:hover': {
												background: currentTheme === 'highcontrast' 
													? theme.palette.primary.a30 
													: theme.palette.primary.main,
												color: currentTheme === 'highcontrast' 
													? '#000' 
													: theme.palette.background.default
											}
										}}
									>
										Demo
									</Box>
								)}
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
