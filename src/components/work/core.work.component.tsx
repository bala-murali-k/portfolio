// Required imports
import { Box } from '@mui/material'
import { ThemeContext } from './../../../../context/theme/theme.context.component.tsx'
// Components imports
import { HeroSectionWorkPageComponent } from './sections/hero.section.work.component.tsx'
import { WorkListSectionWorkPageComponent } from './sections/worklist.section.work.component.tsx'
import { PhilosophySectionWorkPageComponent } from './sections/philosophy.section.work.component.tsx'
// Required objects

export function CoreWorkPageComponent ({  }) {
	
	return (
		<Box>
			<HeroSectionWorkPageComponent />
			<WorkListSectionWorkPageComponent />
			<PhilosophySectionWorkPageComponent />
		</Box>
	)
}
