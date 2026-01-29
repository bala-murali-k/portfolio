// Required imports
import { useContext } from 'react'
import { Box, Tooltip, Stack, IconButton, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from './../context/theme/theme.context.component.tsx'
// Required objects


export default function MainLayout ({  }) {
	
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
	
	return (
		<Box sx={{ width: '100vw', height: '100vh', bgcolor: 'tonal.a10', transition: 'background-color 0.4s ease-in-out' }}>
			<Box sx={{ width: '100%', height: '8%', boxShadow: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
				<IconButton variant='small' 
					onClick={() => {
						setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
					}}
				>
					<span className="material-symbols-outlined" style={{ fontSize: '15px' }}>routine</span>
				</IconButton>
			</Box>
			<Box>
				<Outlet />
			</Box>
		</Box>
	)
}
