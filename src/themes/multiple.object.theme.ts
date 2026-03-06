// Required imports
import { createTheme } from '@mui/material/styles'

export const themeObject = {
	light: createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: "#f59e0b", // Orange from hover state
				a10: "#f59e0b",
				a20: "#f97316", // Terminal prompt orange
				a30: "#fdea73", // Logo yellow
				a40: "#facc15", // Underline yellow
				a50: "#94a3b8", // Outline button shadow
				a60: "#65748c", // Terminal border
			},
			surface: {
				main: "#ffffff",
				a10: "#ffffff",
				a20: "#f0f3f8", // Body background
				a30: "#d9e2ef", // Terminal background
				a40: "#f7eec9", // Project image background
				a50: "#fff7e6", // About block background
				a60: "#fdea73", // Logo background
			},
			tonal: {
				main: "#f0f3f8", // Body background
				a10: "#f0f3f8",
				a20: "#e5dede",
				a30: "#d8d1d1",
				a40: "#cbc5c5",
				a50: "#beb9b9",
				a60: "#b1aeae",
			},
			text: {
				primary: "#1a253b", // Updated to match HTML
				secondary: "#2f3e5a", // Updated to match HTML
				disabled: "#4b5b73", // Updated to match HTML
			},
			background: {
				default: "#f4f7fc", // Updated to match HTML
				paper: "#ffffff",
			},
			success: {
				main: "#22946e",
				a10: "#22946e",
				a20: "#47d5a6",
				a30: "#9ae8ce",
				a40: "#bfeee0",
				a50: "#e0f7f0",
				a60: "#f2fcf9",
			},
			warning: {
				main: "#f59e0b", // Orange hover
				a10: "#f59e0b",
				a20: "#f97316", // Bright orange
				a30: "#fdea73", // Light yellow
				a40: "#facc15", // Gold yellow
				a50: "#f7efdc",
				a60: "#fdf9f1",
			},
			error: {
				main: "#9c2121",
				a10: "#9c2121",
				a20: "#d94a4a",
				a30: "#eb9e9e",
				a40: "#f2c4c4",
				a50: "#f8dddd",
				a60: "#fdf3f3",
			},
			info: {
				main: "#21498a",
				a10: "#21498a",
				a20: "#4077d1",
				a30: "#92b2e5",
				a40: "#bfd3f1",
				a50: "#e2ecfa",
				a60: "#f3f7fd",
			},
			divider: "#cbd5e1", // Updated to match HTML nav-border
			action: {
				hover: "#f59e0b",
				selected: "#fdea73",
			},
		},
		typography: {
			fontFamily: '"Inter", sans-serif',
			h1: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			h2: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			h3: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			body1: {
				fontFamily: '"Inter", sans-serif',
			},
			body2: {
				fontFamily: '"Inter", sans-serif',
			},
			button: {
				fontFamily: '"JetBrains Mono", monospace',
				fontWeight: 600,
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						backgroundColor: '#f4f7fc',
						color: '#1a253b',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 0,
						border: '3px solid #000',
						textTransform: 'none',
						fontFamily: '"JetBrains Mono", monospace',
						fontWeight: 600,
						padding: '0.8rem 2.2rem',
						boxShadow: '6px 6px 0 #000',
						transition: 'all 0.15s',
						'&:hover': {
							transform: 'translate(4px, 4px)',
							boxShadow: '2px 2px 0 #000',
						},
					},
					contained: {
						backgroundColor: '#000',
						color: '#fff',
						boxShadow: '6px 6px 0 #facc15',
						'&:hover': {
							backgroundColor: '#000',
							boxShadow: '2px 2px 0 #facc15',
						},
					},
					outlined: {
						backgroundColor: 'transparent',
						color: '#000',
						border: '3px solid #000',
						boxShadow: '6px 6px 0 #94a3b8',
						'&:hover': {
							backgroundColor: 'transparent',
							border: '3px solid #000',
							boxShadow: '2px 2px 0 #94a3b8',
						},
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						border: '3px solid #000',
						borderRadius: 0,
						boxShadow: '8px 8px 0 #000',
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						border: '3px solid #000',
						borderRadius: 0,
						boxShadow: '8px 8px 0 #000',
						transition: '0.15s',
						'&:hover': {
							transform: 'translate(-4px, -4px)',
							boxShadow: '14px 14px 0 #000',
						},
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						borderBottom: '3px solid #000',
						boxShadow: 'none',
					},
				},
			},
			MuiDivider: {
				styleOverrides: {
					root: {
						borderColor: '#cbd5e1',
						borderWidth: '2px',
					},
				},
			},
		},
	}),

	dark: createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: "#6d9eff", // accent-primary from dark theme
				a10: "#6d9eff",
				a20: "#f9c74f", // accent-secondary from dark theme
				a30: "#8196c9", // border-strong from dark theme
				a40: "#31415f", // nav-border from dark theme
				a50: "#9dafd4", // text-muted from dark theme
				a60: "#2b3452", // theme-toggle-bg from dark theme
			},
			surface: {
				main: "#1e2538", // bg-surface from dark theme
				a10: "#1e2538",
				a20: "#232b40", // bg-card from dark theme
				a30: "#1d253b", // code-bg from dark theme
				a40: "#2f3b58", // border-light from dark theme
				a50: "#8196c9", // border-strong from dark theme
				a60: "#ffd966", // theme-toggle-icon from dark theme
			},
			tonal: {
				main: "#121826", // bg-primary from dark theme
				a10: "#121826",
				a20: "#1e2538", // bg-surface
				a30: "#232b40", // bg-card
				a40: "#2f3b58", // border-light
				a50: "#31415f", // nav-border
				a60: "#1d253b", // code-bg
			},
			text: {
				primary: "#eef4ff", // text-primary from dark theme
				secondary: "#c9d4f0", // text-secondary from dark theme
				disabled: "#9dafd4", // text-muted from dark theme
			},
			background: {
				default: "#121826", // bg-primary from dark theme
				paper: "#1e2538", // bg-surface from dark theme
			},
			success: {
				main: "#22946e",
				a10: "#22946e",
				a20: "#47d5a6",
				a30: "#9ae8ce",
				a40: "#bfeee0",
				a50: "#e0f7f0",
				a60: "#f2fcf9",
			},
			warning: {
				main: "#a87a2a",
				a10: "#a87a2a",
				a20: "#d7ac61",
				a30: "#ecd7b2",
				a40: "#f2e4c8",
				a50: "#f7efdc",
				a60: "#fdf9f1",
			},
			error: {
				main: "#9c2121",
				a10: "#9c2121",
				a20: "#d94a4a",
				a30: "#eb9e9e",
				a40: "#f2c4c4",
				a50: "#f8dddd",
				a60: "#fdf3f3",
			},
			info: {
				main: "#21498a",
				a10: "#21498a",
				a20: "#4077d1",
				a30: "#92b2e5",
				a40: "#bfd3f1",
				a50: "#e2ecfa",
				a60: "#f3f7fd",
			},
			divider: "#31415f", // nav-border from dark theme
			action: {
				hover: "#6d9eff", // accent-primary
				selected: "#f9c74f", // accent-secondary
			},
		},
		typography: {
			fontFamily: '"Inter", sans-serif',
			h1: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			h2: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			h3: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			body1: {
				fontFamily: '"Inter", sans-serif',
			},
			body2: {
				fontFamily: '"Inter", sans-serif',
			},
			button: {
				fontFamily: '"JetBrains Mono", monospace',
				fontWeight: 600,
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						backgroundColor: '#121826',
						color: '#eef4ff',
					},
				},
			},
			MuiDivider: {
				styleOverrides: {
					root: {
						borderColor: '#31415f',
						borderWidth: '2px',
					},
				},
			},
		},
	}),

	highcontrast: createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: "#00ffff", // cyan accent-primary from highcontrast
				a10: "#00ffff",
				a20: "#ff00ff", // magenta accent-secondary from highcontrast
				a30: "#ffff00", // yellow border-strong from highcontrast
				a40: "#ffffff", // white border-light from highcontrast
				a50: "#ffffaa", // light yellow text-muted from highcontrast
				a60: "#ffff00", // theme-toggle-bg from highcontrast
			},
			surface: {
				main: "#0f0f0f", // bg-surface from highcontrast
				a10: "#0f0f0f",
				a20: "#1e1e1e", // bg-card from highcontrast
				a30: "#1a1a1a", // code-bg from highcontrast
				a40: "#ffffff", // border-light from highcontrast
				a50: "#ffff00", // border-strong from highcontrast
				a60: "#000000", // theme-toggle-icon from highcontrast
			},
			tonal: {
				main: "#000000", // bg-primary from highcontrast
				a10: "#000000",
				a20: "#0f0f0f", // bg-surface
				a30: "#1e1e1e", // bg-card
				a40: "#ffffff", // border-light
				a50: "#ffff00", // border-strong
				a60: "#1a1a1a", // code-bg
			},
			text: {
				primary: "#ffff00", // bright yellow text-primary from highcontrast
				secondary: "#ffffff", // white text-secondary from highcontrast
				disabled: "#ffffaa", // light yellow text-muted from highcontrast
			},
			background: {
				default: "#000000", // bg-primary from highcontrast
				paper: "#0f0f0f", // bg-surface from highcontrast
			},
			success: {
				main: "#00ffff", // using cyan for success
				a10: "#00ffff",
				a20: "#47d5a6",
				a30: "#9ae8ce",
				a40: "#bfeee0",
				a50: "#e0f7f0",
				a60: "#f2fcf9",
			},
			warning: {
				main: "#ff00ff", // using magenta for warning
				a10: "#ff00ff",
				a20: "#d7ac61",
				a30: "#ecd7b2",
				a40: "#f2e4c8",
				a50: "#f7efdc",
				a60: "#fdf9f1",
			},
			error: {
				main: "#ff0000", // bright red for error
				a10: "#ff0000",
				a20: "#d94a4a",
				a30: "#eb9e9e",
				a40: "#f2c4c4",
				a50: "#f8dddd",
				a60: "#fdf3f3",
			},
			info: {
				main: "#00ffff", // cyan for info
				a10: "#00ffff",
				a20: "#4077d1",
				a30: "#92b2e5",
				a40: "#bfd3f1",
				a50: "#e2ecfa",
				a60: "#f3f7fd",
			},
			divider: "#ffffff", // white border from highcontrast
			action: {
				hover: "#ffff00", // yellow hover
				selected: "#00ffff", // cyan selected
			},
		},
		typography: {
			fontFamily: '"Inter", sans-serif',
			h1: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			h2: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			h3: {
				fontFamily: '"Inter", sans-serif',
				fontWeight: 700,
			},
			body1: {
				fontFamily: '"Inter", sans-serif',
			},
			body2: {
				fontFamily: '"Inter", sans-serif',
			},
			button: {
				fontFamily: '"JetBrains Mono", monospace',
				fontWeight: 600,
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						backgroundColor: '#000000',
						color: '#ffff00',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						border: '3px solid #ffff00',
						boxShadow: '6px 6px 0 #ffff00',
						'&:hover': {
							boxShadow: '2px 2px 0 #ffff00',
						},
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						border: '3px solid #ffff00',
						boxShadow: '8px 8px 0 #ffff00',
					},
				},
			},
			MuiDivider: {
				styleOverrides: {
					root: {
						borderColor: '#ffffff',
						borderWidth: '3px',
					},
				},
			},
		},
	}),
}
