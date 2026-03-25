// Required imports
import { Box } from '@mui/material'
// Components imports
import { HeroSectionResumePageComponent } from './sections/hero.section.resume.component.tsx'
import { QuickFactSectionResumePageComponent } from './sections/hero.section.quickfact.component.tsx'
import { SummarySectionResumePageComponent } from './sections/here.section.summary.component.tsx'
import { ExperienceSectionResumePageComponent } from './sections/experience.section.resume.component.tsx'
import { ProjectSectionResumePageComponent } from './sections/projects.section.resume.component.tsx'
import { EducationSectionResumePageComponent } from './sections/education.section.resume.component.tsx'
import { LeadershipSectionResumePageComponent } from './sections/leadership.section.resume.component.tsx'
import { DownloadSectionResumePageComponent } from './sections/download.section.resume.component.tsx'
import { CTASectionResumePageComponent } from './sections/cta.section.resume.component.tsx'
// Required objects

export function CoreResumePageComponent ({  }) {
	
	return (
		<Box>
			<HeroSectionResumePageComponent />
			<QuickFactSectionResumePageComponent />
			<SummarySectionResumePageComponent />
			<ExperienceSectionResumePageComponent />
			<ProjectSectionResumePageComponent />
			<EducationSectionResumePageComponent />
			<LeadershipSectionResumePageComponent />
			<DownloadSectionResumePageComponent />
			<CTASectionResumePageComponent />
		</Box>
	)
}
