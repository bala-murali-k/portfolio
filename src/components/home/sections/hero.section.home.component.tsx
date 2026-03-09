// Required imports
import { Link } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'
// Required objects

export function HeroSectionHomePageComponent ({  }) {
	
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
	
	// Helper function for terminal background
	const getTerminalBackground = () => {
		switch (currentTheme) {
			case 'dark':
				return theme.palette.surface.a30 // #1d253b
			case 'highcontrast':
				return theme.palette.surface.a30 // #1a1a1a
			default:
				return theme.palette.surface.a30 // #d9e2ef for light theme
		}
	}
	
	// Helper function for prompt color
	const getPromptColor = () => {
		switch (currentTheme) {
			case 'dark':
				return theme.palette.primary.a20 // #f9c74f
			case 'highcontrast':
				return theme.palette.primary.a10 // #00ffff
			default:
				return theme.palette.primary.a20 // #f97316 for light theme
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
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
				gap: { xs: 4, md: 6 },
				my: { xs: 2, md: 5 },
				alignItems: 'center'
			}}
		>
			{/* Hero Left */}
			<Box 
				className="hero-left"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					borderRight: { md: '3px dashed' },
					borderColor: theme.palette.primary.a60,
					pr: { md: 4 }
				}}
			>
				<Box
					component="div"
					className="badge"
					sx={{
						fontFamily: '"JetBrains Mono", monospace',
						fontSize: '0.85rem',
						fontWeight: 600,
						letterSpacing: '0.05em',
						background: getBadgeBackground(),
						color: getBadgeTextColor(),
						padding: '0.4rem 1.2rem',
						display: 'inline-block',
						width: 'fit-content',
						border: '2px solid',
						borderColor: currentTheme === 'highcontrast' ? theme.palette.primary.a30 : '#000',
						mb: 2
					}}
				>
					✦ FRONTEND + CREATIVE CODING ✦
				</Box>
				
				<Box
					component="h1"
					sx={{
						fontFamily: '"Inter", sans-serif',
						fontWeight: 700,
						fontSize: { xs: '2.5rem', md: '3.5rem' },
						lineHeight: 1.1,
						letterSpacing: '-0.02em',
						color: theme.palette.text.primary,
						m: 0
					}}
				>
					building{' '}
					<Box
						component="span"
						className="underline"
						sx={{
							background: currentTheme === 'highcontrast' 
								? theme.palette.primary.a30 
								: theme.palette.primary.a40,
							padding: '0 8px 2px 8px',
							textDecoration: 'underline overline wavy',
							textDecorationColor: currentTheme === 'highcontrast' 
								? theme.palette.primary.a10 
								: '#000',
							textDecorationThickness: '2px',
							color: currentTheme === 'highcontrast' 
								? '#000' 
								: theme.palette.text.primary
						}}
					>
						weird
					</Box>{' '}
					& wonderful interfaces
				</Box>
				
				<Box
					component="p"
					sx={{
						fontFamily: '"Inter", sans-serif',
						fontSize: { xs: '1.1rem', md: '1.2rem' },
						lineHeight: 1.5,
						color: theme.palette.text.secondary,
						maxWidth: '450px',
						my: 2
					}}
				>
					Bala Murali — developer exploring the intersection of motion, code, and user experience. based in nyc.
				</Box>
				
				<Box
					className="cta-grid"
					sx={{
						display: 'flex',
						gap: 3,
						flexWrap: 'wrap',
						mt: 2
					}}
				>
					<Box
						component={Link}
						to="/work"
						key="Home"
						sx={{
							fontFamily: '"JetBrains Mono", monospace',
							fontWeight: 600,
							fontSize: '1rem',
							textDecoration: 'none',
							padding: '0.8rem 2.2rem',
							backgroundColor: theme.palette.mode === 'light' ? '#000' : 'transparent',
							color: theme.palette.mode === 'light' 
							? '#fff' 
							: currentTheme === 'highcontrast' 
							? theme.palette.primary.a30 
							: theme.palette.text.primary,
							border: '3px solid',
							borderColor: currentTheme === 'highcontrast' 
							? theme.palette.primary.a30 
							: '#000',
							boxShadow: `6px 6px 0 ${getAccentSecondary()}`,
							transition: 'all 0.15s',
							cursor: 'pointer',
							display: 'inline-block',
							'&:hover': {
							transform: 'translate(4px, 4px)',
							boxShadow: `2px 2px 0 ${getAccentSecondary()}`
							}
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translate(2px, 2px)';
							e.currentTarget.style.boxShadow = `3px 3px 0 ${theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.primary.a40}`;
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translate(0, 0)';
							e.currentTarget.style.boxShadow = `6px 6px 0 ${theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.primary.a40}`;
						}}
					>
						view projects
					</Box>
					
					<Box
						component="a"
						href="#"
						className="btn-outline-custom"
						sx={{
							fontFamily: '"JetBrains Mono", monospace',
							fontWeight: 600,
							fontSize: '1rem',
							textDecoration: 'none',
							padding: '0.8rem 2.2rem',
							backgroundColor: 'transparent',
							color: theme.palette.text.primary,
							border: '3px solid',
							borderColor: currentTheme === 'highcontrast' 
								? theme.palette.primary.a30 
								: '#000',
							boxShadow: `6px 6px 0 ${theme.palette.primary.a50}`,
							transition: 'all 0.15s',
							cursor: 'pointer',
							display: 'inline-block',
							'&:hover': {
								transform: 'translate(4px, 4px)',
								boxShadow: `2px 2px 0 ${theme.palette.primary.a50}`
							}
						}}
					>
						playground
					</Box>
				</Box>
			</Box>
			
			{/* Hero Right - Terminal */}
			<Box
				className="hero-right"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 0.5,
					p: 3,
					bgcolor: getTerminalBackground(),
					border: '4px solid',
					borderColor: currentTheme === 'highcontrast' 
						? theme.palette.primary.a30 
						: '#000',
					boxShadow: currentTheme === 'highcontrast'
						? `14px 14px 0 ${theme.palette.primary.a10}` 
						: '14px 14px 0 #000',
					fontFamily: '"JetBrains Mono", monospace',
					minHeight: { md: '300px' },
					justifyContent: 'center'
				}}
			>
				<Box
					className="terminal-line"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						fontSize: '1rem',
						lineHeight: 1.8,
						color: theme.palette.text.primary,
						borderBottom: '1px solid',
						borderColor: theme.palette.primary.a60,
						pb: 0.8,
						mb: 0.8
					}}
				>
					<Box
						component="span"
						className="prompt"
						sx={{
							color: getPromptColor(),
							fontWeight: 700,
							fontFamily: '"JetBrains Mono", monospace'
						}}
					>
						$&gt;
					</Box>
					npx bala --skills 
				</Box>
				
				<Box
					className="terminal-line"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						fontSize: '1rem',
						lineHeight: 1.8,
						color: theme.palette.text.primary,
						borderBottom: '1px solid',
						borderColor: theme.palette.primary.a60,
						pb: 0.8,
						mb: 0.8
					}}
				>
					<Box
						component="span"
						className="prompt"
						sx={{
							color: getPromptColor(),
							fontWeight: 700
						}}
					>
						&gt;
					</Box>
					React · Three.js · Framer Motion
				</Box>
				
				<Box
					className="terminal-line"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						fontSize: '1rem',
						lineHeight: 1.8,
						color: theme.palette.text.primary,
						borderBottom: '1px solid',
						borderColor: theme.palette.primary.a60,
						pb: 0.8,
						mb: 0.8
					}}
				>
					<Box
						component="span"
						className="prompt"
						sx={{
							color: getPromptColor(),
							fontWeight: 700
						}}
					>
						&gt;
					</Box>
					TypeScript · Tailwind · Mui
				</Box>
				
				<Box
					className="terminal-line"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						fontSize: '1rem',
						lineHeight: 1.8,
						color: theme.palette.text.primary,
						borderBottom: '1px solid',
						borderColor: theme.palette.primary.a60,
						pb: 0.8,
						mb: 0.8
					}}
				>
					<Box
						component="span"
						className="prompt"
						sx={{
							color: getPromptColor(),
							fontWeight: 700
						}}
					>
						&gt;
					</Box>
					1.5+ yrs frontend · 1 yrs creative dev
				</Box>
				
				<Box
					className="terminal-line"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						fontSize: '1rem',
						lineHeight: 1.8,
						color: theme.palette.text.primary
					}}
				>
					<Box
						component="span"
						className="prompt"
						sx={{
							color: getPromptColor(),
							fontWeight: 700
						}}
					>
						$&gt;
					</Box>
					currently: building generative UI
					<Box
						component="span"
						className="cursor-block"
						sx={{
							background: currentTheme === 'highcontrast' 
								? theme.palette.primary.a30 
								: '#000',
							color: currentTheme === 'highcontrast' 
								? '#000' 
								: theme.palette.surface.a20,
							padding: '0.2rem 0.6rem',
							ml: 0.5,
							display: 'inline-block'
						}}
					>
						▊
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
