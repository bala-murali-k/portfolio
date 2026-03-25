import { Box, useTheme, Grid, Modal, Fade } from '@mui/material'
import { useContext, useState } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'

// Define the allowed filter categories - removed 'Backend' since it's not in the filter bar
type FilterCategory = 'All' | 'Web Apps' | 'Tools' | 'Experiments'

interface Project {
	icon: string
	title: string
	description: string
	tech: string[]
	category: FilterCategory
	links: {
		github?: string
		demo?: string
	}
}

const FILTER_CATEGORIES: FilterCategory[] = ['All', 'Web Apps', 'Tools', 'Experiments']

const PROJECTS: Project[] = [
	{
		icon: '🎨',
		title: 'ChromaLab',
		description: 'full-spectrum color toolkit — picker, palettes, gradients, contrast & a11y.',
		tech: ['html', 'css', 'js'],
		category: 'Tools',
		links: {
			demo: 'https://bala-murali-k.github.io/chromalab/'
		}
	},
	{
		icon: '{}',
		title: 'JSONLens',
		description: 'visual JSON explorer — tree, node map & raw view with pan/zoom.',
		tech: ['html', 'css', 'js'],
		category: 'Tools',
		links: {
			demo: 'https://bala-murali-k.github.io/jsonlens/'
		}
	},
	{
		icon: '.*',
		title: 'RegexLab',
		description: 'regex tester with plain-english explanations, breakdown & cheat sheet.',
		tech: ['html', 'css', 'js'],
		category: 'Tools',
		links: {
			demo: 'https://bala-murali-k.github.io/regexlab/'
		}
	},
	{
		icon: '▲',
		title: 'VectraView',
		description: 'SVG & Lottie studio — preview, animate and export to React, HTML, PNG & more.',
		tech: ['html', 'css', 'js'],
		category: 'Tools',
		links: {
			demo: 'https://bala-murali-k.github.io/vectraview/'
		}
	},
	{
		icon: '📚',
		title: 'Task Library',
		description: 'async task queue with retry & schedule.',
		tech: ['rust', 'wasm', 'js'],
		category: 'Tools', // Changed from 'Backend' to 'Tools' since 'Backend' isn't in FilterCategory
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
		category: 'Web Apps',
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
		category: 'Web Apps',
		links: {
			github: 'https://github.com/bala-murali-k/typing',
			demo: 'https://typing-xo4r.onrender.com'
		}
	},
]

export function WorkListSectionWorkPageComponent() {
	// Add null check for context
	const themeContext = useContext(ThemeContext)
	const { currentTheme } = themeContext as ThemeContextType
	const theme = useTheme()

	const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')
	const [previewOpen, setPreviewOpen] = useState(false)
	const [previewUrl, setPreviewUrl] = useState('')
	const [previewTitle, setPreviewTitle] = useState('')

	const isHighContrast = currentTheme === 'highcontrast'
	const isDark = currentTheme === 'dark'

	const borderColor = isHighContrast ? theme.palette.primary.a30 : '#000'
	const shadowColor = isHighContrast ? theme.palette.primary.a10 : '#000'

	const badgeBg = isDark
		? theme.palette.primary.a30
		: isHighContrast
		? theme.palette.primary.a30
		: '#000'

	const badgeText = isDark
		? theme.palette.text.primary
		: isHighContrast
		? '#000'
		: '#fff'

	const filteredProjects =
		activeFilter === 'All'
			? PROJECTS
			: PROJECTS.filter((p) => p.category === activeFilter)

	const handleDemoClick = (e: React.MouseEvent, url: string, title: string) => {
		e.preventDefault()
		setPreviewUrl(url)
		setPreviewTitle(title)
		setPreviewOpen(true)
	}

	const handleClosePreview = () => {
		setPreviewOpen(false)
		setPreviewUrl('')
	}

	return (
		<Box className="work-list-section" sx={{ py: { xs: 4, md: 6 } }}>

			{/* Filter Bar */}
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '0.8rem 1.5rem',
					my: 3,
					py: 2,
					borderTop: '3px solid',
					borderBottom: '3px solid',
					borderColor
				}}
			>
				{FILTER_CATEGORIES.map((filter) => {
					const isActive = activeFilter === filter
					return (
						<Box
							key={filter}
							onClick={() => setActiveFilter(filter)}
							sx={{
								fontFamily: '"JetBrains Mono", "Space Mono", monospace',
								background: isActive
									? isHighContrast
										? theme.palette.primary.a30
										: theme.palette.primary.main
									: 'transparent',
								color: isActive
									? isHighContrast
										? '#000'
										: theme.palette.background.default
									: theme.palette.text.primary,
								border: '3px solid',
								borderColor,
								px: 2,
								py: 1,
								fontSize: '1rem',
								fontWeight: 600,
								boxShadow: `4px 4px 0 ${shadowColor}`,
								cursor: 'pointer',
								userSelect: 'none',
								display: 'inline-block',
								transition: 'background 0.1s ease, color 0.1s ease',
								'&:hover': {
									background: isActive
										? undefined
										: isHighContrast
										? theme.palette.primary.a30
										: theme.palette.primary.main + '22'
								}
							}}
						>
							{filter}
						</Box>
					)
				})}
			</Box>

			{/* Project Grid */}
			<Grid
				container
				spacing={3}
				sx={{ mt: 1, mb: 2, alignItems: 'flex-start' }}
			>
				{filteredProjects.map((project, index) => (
					<Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
						<Box
							sx={{
								background: theme.palette.background.paper,
								border: '3px solid',
								borderColor,
								boxShadow: `6px 6px 0 ${shadowColor}`,
								p: 2.5,
								display: 'flex',
								flexDirection: 'column',
								height: '100%',
								transition: 'transform 0.1s ease, box-shadow 0.1s ease',
								'&:hover': {
									transform: 'translate(-4px, -4px)',
									boxShadow: `12px 12px 0 ${shadowColor}`
								}
							}}
						>
							{/* Preview Area */}
							<Box
								sx={{
									width: '100%',
									height: '130px',
									background: badgeBg,
									border: '3px solid',
									borderColor,
									mb: 2,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: '"JetBrains Mono", "Space Mono", monospace',
									fontSize: '2.5rem',
									color: badgeText,
									boxShadow: `4px 4px 0 ${shadowColor}`
								}}
							>
								{project.icon}
							</Box>

							{/* Title */}
							<Box
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

							{/* Description */}
							<Box
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
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', my: 1 }}>
								{project.tech.map((tech, i) => (
									<Box
										key={i}
										sx={{
											fontFamily: '"JetBrains Mono", "Space Mono", monospace',
											background: badgeBg,
											color: badgeText,
											px: 1,
											py: 0.5,
											border: '2px solid',
											borderColor,
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
										target="_blank"
										rel="noopener"
										sx={{
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											borderBottom: '2px solid',
											borderColor: isHighContrast
												? theme.palette.primary.a30
												: theme.palette.primary.main,
											'&:hover': {
												background: isHighContrast
													? theme.palette.primary.a30
													: theme.palette.primary.main,
												color: isHighContrast ? '#000' : theme.palette.background.default
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
										onClick={(e) => handleDemoClick(e, project.links.demo!, project.title)}
										sx={{
											color: theme.palette.text.primary,
											textDecoration: 'none',
											fontWeight: 600,
											cursor: 'pointer',
											borderBottom: '2px solid',
											borderColor: isHighContrast
												? theme.palette.primary.a30
												: theme.palette.primary.main,
											'&:hover': {
												background: isHighContrast
													? theme.palette.primary.a30
													: theme.palette.primary.main,
												color: isHighContrast ? '#000' : theme.palette.background.default
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
											borderColor,
											px: 1,
											py: 0.5,
											boxShadow: `3px 3px 0 ${shadowColor}`,
											'&:hover': {
												background: isHighContrast
													? theme.palette.primary.a30
													: theme.palette.primary.main,
												color: isHighContrast ? '#000' : theme.palette.background.default
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
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
			>
				<Fade in={previewOpen}>
					<Box
						sx={{
							width: '100%',
							maxWidth: '1100px',
							height: '80vh',
							bgcolor: theme.palette.background.paper,
							border: '3px solid',
							borderColor,
							boxShadow: `6px 6px 0 ${shadowColor}`,
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
								borderColor,
								fontFamily: '"JetBrains Mono", "Space Mono", monospace'
							}}
						>
							<Box sx={{ fontSize: '1.4rem', fontWeight: 600, color: theme.palette.text.primary }}>
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
									'&:hover': { color: theme.palette.primary.main }
								}}
							>
								✕
							</Box>
						</Box>

						{/* Iframe */}
						<Box sx={{ flex: 1, overflow: 'hidden', bgcolor: '#fff' }}>
							<iframe
								src={previewUrl}
								title={`Preview - ${previewTitle}`}
								sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads allow-storage-access-by-user-activation"
								style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }}
							/>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Box>
	)
}