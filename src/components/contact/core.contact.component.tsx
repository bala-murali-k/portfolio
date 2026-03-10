// Required imports
import { Box } from '@mui/material'
// Components imports
import { HeroSectionContactPageComponent } from './sections/hero.section.contact.component.tsx'
import { ContactFormsSectionContactPageComponent } from './sections/contactform.section.component.tsx'
import { QuickLinksSectionContactPageComponent } from './sections/quicklinks.section.contact.component.tsx'
// Required objects

export function CoreContactPageComponent ({  }) {
	
	return (
		<Box>
			<HeroSectionContactPageComponent />
			<ContactFormsSectionContactPageComponent />
			<QuickLinksSectionContactPageComponent />
		</Box>
	)
}
