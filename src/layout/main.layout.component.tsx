// Required imports
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Tooltip, Stack, IconButton, Icon, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from './../context/theme/theme.context.component.tsx'
// Required objects
// Icons imports
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code' // For CodePen (MUI doesn't have direct CodePen icon)
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import SvgIcon from '@mui/material/SvgIcon';

export default function MainLayout ({  }) {
	
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
	const theme = useTheme()
	const location = useLocation() // Get current location
	
	// Helper function to get theme-specific colors
	const getActiveBgColor = (themeName) => {
		if (currentTheme === themeName) {
			return theme.palette.primary.a30
		}
		return 'transparent'
	}
	
	const getActiveTextColor = (themeName) => {
		if (currentTheme === themeName) {
			return '#000'
		}
		return theme.palette.text.disabled
	}
	
	// Helper function to check if a path is active
	const isActivePath = (path) => {
		if (path === '/') {
			return location.pathname === '/'
		}
		return location.pathname.startsWith(path)
	}
	
	return (
		<Box sx={{ 
			width: '100vw', 
			minHeight: '100vh', 
			bgcolor: 'tonal.a10', 
			transition: 'background-color 0.4s ease-in-out',
			display: 'flex',
			flexDirection: 'column'
		}}>
			<Box sx={{ 
				width: 'calc(100% - 4.3rem)',
				maxWidth: '1400px',
				margin: '0 auto',
				px: '2.16rem', 
				display: 'flex', 
				flexDirection: 'column', 
				flex: 1
			}}>
				<Box sx={{ 
					display: 'flex', 
					py: '2rem',
					justifyContent: 'space-between', 
					alignItems: 'center', 
					borderBottom: '3px solid',
					borderColor: theme.palette.divider,
					marginBottom: '3.5rem',
					flexWrap: 'wrap',
					width: '100%'
				}}>
					<Box sx={{ 
						fontFamily: '"JetBrains Mono", monospace', 
						fontWeight: 600, 
						fontSize: '1.8rem'
					}}>
						<Link
							key={'Home'}
							to={'/'}
							href="#" 
							style={{
								fontFamily: '"JetBrains Mono", monospace',
								fontWeight: 600,
								fontSize: '1.8rem',
								textDecoration: 'none',
								color: theme.palette.mode === 'dark' ? '#eef4ff' : '#000',
								background: isActivePath('/') ? theme.palette.primary.a30 : theme.palette.primary.a30,
								padding: '0.3rem 1.2rem',
								border: '3px solid',
								borderColor: theme.palette.mode === 'highcontrast' ? '#ffff00' : '#000',
								boxShadow: `6px 6px 0 ${theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.primary.a40}`,
								transition: '0.1s linear',
								letterSpacing: '-0.03em',
								display: 'inline-block'
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
							bala.dev
						</Link>
					</Box>
					
					<Stack direction="row" spacing={3} alignItems="center">
						<Box sx={{ 
							display: 'flex', 
							gap: '2.8rem',
							fontFamily: '"JetBrains Mono", monospace',
							fontWeight: 500
						}}>
							{['/work', '/lab', '/resume', '/contact'].map((path) => {
								const isActive = isActivePath(path)
								const displayName = path.replace('/', '')
								
								return (
									<Link
										key={path}
										to={path}
										style={{
											textDecoration: 'none',
											color: isActive 
												? theme.palette.primary.main 
												: theme.palette.text.secondary,
											fontSize: '1rem',
											borderBottom: isActive 
												? `2px solid ${theme.palette.primary.main}` 
												: '2px solid transparent',
											paddingBottom: '5px',
											transition: 'border-color 0.2s, color 0.2s',
											fontWeight: isActive ? 600 : 500
										}}
										onMouseEnter={(e) => {
											if (!isActive) {
												e.currentTarget.style.borderBottom = `2px solid ${theme.palette.primary.main}`;
											}
										}}
										onMouseLeave={(e) => {
											if (!isActive) {
												e.currentTarget.style.borderBottom = '2px solid transparent';
											}
										}}
									>
										{displayName}
									</Link>
								)
							})}
						</Box>
						
						{/* Theme Toggle Component with Google Material Icons */}
						<Stack 
							direction="row" 
							spacing={0.5} 
							sx={{ 
								border: '2px solid',
								borderColor: theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.text.primary,
								borderRadius: '30px',
								p: '4px',
								bgcolor: theme.palette.mode === 'dark' ? '#2b3452' : 
										theme.palette.mode === 'highcontrast' ? '#ffff00' : '#fff'
							}}
						>
							<Tooltip title="Light mode">
								<IconButton 
									size="small"
									onClick={() => setCurrentTheme('light')}
									sx={{
										bgcolor: currentTheme === 'light' ? theme.palette.primary.a30 : 'transparent',
										color: currentTheme === 'light' ? '#000' : theme.palette.text.disabled,
										'&:hover': {
											bgcolor: currentTheme === 'light' ? theme.palette.primary.a30 : 
													theme.palette.mode === 'dark' ? '#3f4a6b' : '#f0f0f0'
										},
										borderRadius: '50%',
										width: '36px',
										height: '36px'
									}}
								>
									<Icon baseClassName="material-symbols-outlined">light_mode</Icon>
								</IconButton>
							</Tooltip>
							
							<Tooltip title="Dark mode">
								<IconButton 
									size="small"
									onClick={() => setCurrentTheme('dark')}
									sx={{
										bgcolor: currentTheme === 'dark' ? theme.palette.primary.a30 : 'transparent',
										color: currentTheme === 'dark' ? '#000' : theme.palette.text.disabled,
										'&:hover': {
											bgcolor: currentTheme === 'dark' ? theme.palette.primary.a30 : 
													theme.palette.mode === 'dark' ? '#3f4a6b' : '#f0f0f0'
										},
										borderRadius: '50%',
										width: '36px',
										height: '36px'
									}}
								>
									<Icon baseClassName="material-symbols-outlined">dark_mode</Icon>
								</IconButton>
							</Tooltip>
							
							<Tooltip title="High contrast">
								<IconButton 
									size="small"
									onClick={() => setCurrentTheme('highcontrast')}
									sx={{
										bgcolor: currentTheme === 'highcontrast' ? theme.palette.primary.a30 : 'transparent',
										color: currentTheme === 'highcontrast' ? '#000' : theme.palette.text.disabled,
										'&:hover': {
											bgcolor: currentTheme === 'highcontrast' ? theme.palette.primary.a30 : 
													theme.palette.mode === 'dark' ? '#3f4a6b' : '#f0f0f0'
										},
										borderRadius: '50%',
										width: '36px',
										height: '36px'
									}}
								>
									<Icon baseClassName="material-symbols-outlined">contrast</Icon>
								</IconButton>
							</Tooltip>
						</Stack>
					</Stack>
				</Box>
				
				<Box sx={{ flex: 1 }}>
					<Outlet />
				</Box>

				{/* Loud Contact Banner */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: 2,
						py: 2,
						px: 3,
						my: 4,
						border: '3px solid',
						borderColor: theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.divider,
						bgcolor: theme.palette.mode === 'dark' ? theme.palette.surface.a20 : 
								theme.palette.mode === 'highcontrast' ? '#000000' : theme.palette.primary.a30,
						boxShadow: `8px 8px 0 ${theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.primary.main}`,
					}}
				>
					<Box
						component="span"
						sx={{
							fontFamily: '"JetBrains Mono", monospace',
							fontWeight: 700,
							fontSize: '1.3rem',
							letterSpacing: '0.05em',
							color: theme.palette.mode === 'highcontrast' ? '#ffff00' : theme.palette.text.primary,
						}}
					>
						✦ let's build something bold ✦
					</Box>
					
					<Box sx={{ display: 'flex', gap: 2 }}>
						{[
							{ icon: GitHubIcon, url: '#', label: 'GitHub' },
							{ icon: CodeIcon, url: '#', label: 'CodePen' },
							{ icon: LinkedInIcon, url: '#', label: 'LinkedIn' },
							{ icon: EmailIcon, url: '#', label: 'Email' }
						].map((social) => (
							<Tooltip key={social.label} title={social.label}>
								<IconButton
									component="a"
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: currentTheme === 'highcontrast' 
											? theme.palette.text.primary 
											: theme.palette.text.secondary,
										fontSize: '1.5rem',
										border: '2px solid transparent',
										transition: 'all 0.2s',
										'&:hover': {
											color: theme.palette.primary.main,
											transform: 'translateY(-2px)',
										},
									}}
								>
									<social.icon />
								</IconButton>
							</Tooltip>
						))}
					</Box>
				</Box>

				{/* Footer */}
				<Box
					component="footer"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: 2,
						py: 3,
						px: 2,
						borderTop: '2px solid',
						borderColor: theme.palette.divider,
						mt: 2,
						mb: 3,
						fontFamily: '"JetBrains Mono", monospace',
						fontSize: '0.9rem',
						color: theme.palette.text.disabled,
					}}
				>
					<Box>© 2025 bala.dev – cc by-nc</Box>
					
					<Box sx={{ display: 'flex', gap: 3 }}>
						<Box
							sx={{
								position: 'relative',
								'&::after': {
									content: '""',
									position: 'absolute',
									bottom: -2,
									left: 0,
									width: '100%',
									height: '2px',
									bgcolor: theme.palette.primary.main,
									transform: 'scaleX(0)',
									transition: 'transform 0.2s',
								},
								'&:hover': {
									color: theme.palette.primary.main,
									'&::after': {
										transform: 'scaleX(1)',
									},
								},
								cursor: 'default',
							}}
						>
							source available
						</Box>
						<Box
							sx={{
								position: 'relative',
								'&::after': {
									content: '""',
									position: 'absolute',
									bottom: -2,
									left: 0,
									width: '100%',
									height: '2px',
									bgcolor: theme.palette.primary.main,
									transform: 'scaleX(0)',
									transition: 'transform 0.2s',
								},
								'&:hover': {
									color: theme.palette.primary.main,
									'&::after': {
										transform: 'scaleX(1)',
									},
								},
								cursor: 'default',
							}}
						>
							v.3 / terminal
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}