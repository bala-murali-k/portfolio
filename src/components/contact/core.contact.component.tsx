// Required imports
import { Box } from '@mui/material'
// Components imports
import { HeroSectionContactPageComponent } from './sections/hero.section.contact.component.tsx'
import { ContactFormsSectionContactPageComponent } from './sections/contactform.section.component.tsx'
// import { PhilosophySectionWorkPageComponent } from './sections/philosophy.section.work.component.tsx'
// Required objects

export function CoreContactPageComponent ({  }) {
	
	return (
		<Box>
			<HeroSectionContactPageComponent />
			<ContactFormsSectionContactPageComponent />
			{/* <PhilosophySectionWorkPageComponent /> */}
		</Box>
	)
}
