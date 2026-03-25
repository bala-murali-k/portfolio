// Required Imports
import { Routes, Route } from 'react-router-dom'

// Component Imports
import MainLayout from './layout/main.layout.component.tsx'
import HomePage from './pages/home/index.tsx'
import WorkPage from './pages/work/index.tsx'
import ResumePage from './pages/resume/index.tsx'
import { CoreContactPageComponent } from './components/contact/core.contact.component.tsx'
import ThemeContextComponent from './context/theme/theme.context.component.tsx'

function App() {

  return (
	<Routes>
		<Route element={
			<ThemeContextComponent>
				<MainLayout />
			</ThemeContextComponent>
			}
		>
			<Route path="" element={<HomePage />} />
			<Route path="*" element={ <>This is the error page for this.</> } />
			<Route path="/work" element={ <WorkPage /> } />
			<Route path="/contact" element={ <CoreContactPageComponent /> } />
			<Route path="/resume" element={ <ResumePage /> } />
		</Route>
	</Routes>
  )
}

export default App
