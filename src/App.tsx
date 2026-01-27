// Required Imports
import { Routes, Route } from 'react-router-dom'

// Component Imports
import MainLayout from './layout/main.layout.component.tsx'

function App() {

  return (
	<Routes>
		<Route element={ <MainLayout /> }>
			<Route path="" element={<>This is the home page</>} />
			<Route path="*" element={ <>This is the error page for this.</> } />
		</Route>
	</Routes>
  )
}

export default App
