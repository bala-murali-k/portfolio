// Required imports
import { Box, useTheme, Grid, Modal, Fade } from '@mui/material'
import { useContext, useState } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'

export function WorkListSectionWorkPageComponent() {
	const { currentTheme } = useContext(ThemeContext)
	const theme = useTheme()
	
	// Preview modal state
	const [previewOpen, setPreviewOpen] = useState(false)
	const [previewUrl, setPreviewUrl] = useState('')
	const [previewTitle, setPreviewTitle] = useState('')
	
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
	
	// Project data with demo URLs
	const projects = [
		{
			icon: '📚',
			title: 'Task Library',
			description: 'async task queue with retry & schedule.',
			tech: ['rust', 'wasm', 'js'],
			links: { 
				github: '#',
				demo: 'https://www.wikipedia.org' 
			}
		},
		{
			icon: '🌀',
			title: 'WebSocket Terminal',
			description: 'browser-based terminal over websockets.',
			tech: ['go', 'websocket', 'react'],
			links: { 
				github: '#', 
				demo: 'https://www.bbc.com' 
			}
		},
		{
			icon: '⌨️',
			title: 'Practice Typing',
			description: 'minimal typing test with code snippets.',
			tech: ['react.js', 'typescript', 'mui'],
			links: { 
				github: 'https://github.com/bala-murali-k/typing', 
				demo: 'https://typing-xo4r.onrender.com' 
			}
		},
	]
	
	// Handle demo click
	const handleDemoClick = (e, url, title) => {
		e.preventDefault()
		setPreviewUrl(url)
		setPreviewTitle(title)
		setPreviewOpen(true)
	}
	
	// Handle close preview
	const handleClosePreview = () => {
		setPreviewOpen(false)
		setPreviewUrl('')
	}
	
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
				spacing={2}
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
								height: '100%',
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

							{/* Card Actions */}
							<Box
								className="card-actions"
								sx={{
									display: 'flex',
									gap: 2,
									mt: 'auto',
									pt: 2,
									fontFamily: '"JetBrains Mono", "Space Mono", monospace',
									flexWrap: 'wrap',
									alignItems: 'center'
								}}
							>
								{project.links.github && (
									<Box
										component="a"
										href={project.links.github}
										target='_blank'
										rel="noopener"
										// onClick={(e) => {
										// 	e.preventDefault()
										// 	console.log('RRRRRRRRRR ', project.links.github)
										// 	// alert('GitHub repo (simulated)')
										// }}
										sx={{
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											borderBottom: '2px solid',
											borderColor: currentTheme === 'highcontrast' 
												? theme.palette.primary.a30 
												: theme.palette.primary.main,
											cursor: 'pointer',
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
										onClick={(e) => handleDemoClick(e, project.links.demo, project.title)}
										sx={{
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											borderBottom: '2px solid',
											borderColor: currentTheme === 'highcontrast' 
												? theme.palette.primary.a30 
												: theme.palette.primary.main,
											cursor: 'pointer',
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
								{project.links.demo && (
									<Box
										component="a"
										href={project.links.demo}
										target="_blank"
										rel="noopener"
										sx={{
											marginLeft: 'auto',
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											fontSize: '0.85rem',
											textTransform: 'uppercase',
											letterSpacing: '0.5px',
											background: theme.palette.background.paper,
											border: '2px solid',
											borderColor: currentTheme === 'highcontrast' 
												? theme.palette.primary.a30 
												: '#000',
											px: 1,
											py: 0.5,
											boxShadow: `3px 3px 0 ${currentTheme === 'highcontrast' 
												? theme.palette.primary.a10 
												: '#000'}`,
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
										↗ new tab
									</Box>
								)}
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>

			{/* Preview Modal */}
			<Modal
				open={previewOpen}
				onClose={handleClosePreview}
				closeAfterTransition
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					p: 2
				}}
			>
				<Fade in={previewOpen}>
					<Box
						sx={{
							width: '100%',
							maxWidth: '1100px',
							height: '80vh',
							bgcolor: theme.palette.background.paper,
							border: '3px solid',
							borderColor: currentTheme === 'highcontrast' 
								? theme.palette.primary.a30 
								: '#000',
							boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
								? theme.palette.primary.a10 
								: '#000'}`,
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						{/* Modal Header */}
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								p: '1rem 1.5rem',
								borderBottom: '3px solid',
								borderColor: currentTheme === 'highcontrast' 
									? theme.palette.primary.a30 
									: '#000',
								fontFamily: '"JetBrains Mono", "Space Mono", monospace'
							}}
						>
							<Box
								sx={{
									fontSize: '1.4rem',
									fontWeight: 600,
									color: theme.palette.text.primary
								}}
							>
								preview · {previewTitle}
							</Box>
							<Box
								component="button"
								onClick={handleClosePreview}
								sx={{
									background: 'none',
									border: 'none',
									fontSize: '2rem',
									cursor: 'pointer',
									color: theme.palette.text.primary,
									lineHeight: 1,
									padding: '0 0.5rem',
									'&:hover': {
										color: theme.palette.primary.main
									}
								}}
							>
								✕
							</Box>
						</Box>

						{/* Modal Content - Iframe */}
						<Box
							sx={{
								flex: 1,
								overflow: 'hidden',
								bgcolor: '#fff'
							}}
						>
							<iframe
								src={previewUrl}
								title={`Preview - ${previewTitle}`}
								sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads allow-storage-access-by-user-activation"
								style={{
									width: '100%',
									height: '100%',
									border: 'none',
									background: '#fff'
								}}
							/>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Box>
	)
}