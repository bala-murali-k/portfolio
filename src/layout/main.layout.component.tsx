// Required imports
import { createContext } from 'react'
import { Box, Tooltip, Stack, IconButton, Typography, CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'

// Required objects
export const GlobalContext = createContext(null)


export default function MainLayout ({  }) {
	
	const globalVariables = {
		primaryTheme: 'light',
	}
	
	return (
		<GlobalContext.Provider value={globalVariables}>
			<Box sx={{ width: '100vw', height: '100vh' }}>
				<Box sx={{ width: '100%', height: '8%', boxShadow: 3, display: 'flex', alignItems: 'center' }}>
					
				</Box>
				<Box>
					<Outlet />
				</Box>
			</Box>
		</GlobalContext.Provider>
	)
}
