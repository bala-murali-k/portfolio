// Required imports
import { Link } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from './../../../context/theme/theme.context.component.tsx'
// Required objects

export function HeroSectionHomePageComponent({}) {
  
  const themeContext = useContext(ThemeContext)
  const { currentTheme } = themeContext as ThemeContextType
  const theme = useTheme()
  
  // Helper function to get accent secondary color
  const getAccentSecondary = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.primary.a20 // #f9c74f
      case 'highcontrast':
        return theme.palette.primary.a20 // #ff00ff
      default:
        return theme.palette.primary.a40 // #facc15 for light theme
    }
  }
  
  // Helper function for terminal background
  const getTerminalBackground = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.surface.a30 // #1d253b
      case 'highcontrast':
        return theme.palette.surface.a30 // #1a1a1a
      default:
        return theme.palette.surface.a30 // #d9e2ef for light theme
    }
  }
  
  // Helper function for prompt color
  const getPromptColor = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.primary.a20 // #f9c74f
      case 'highcontrast':
        return theme.palette.primary.a10 // #00ffff
      default:
        return theme.palette.primary.a20 // #f97316 for light theme
    }
  }
  
  // Helper function for badge background
  const getBadgeBackground = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.primary.a30 // #8196c9
      case 'highcontrast':
        return theme.palette.primary.a30 // #ffff00
      default:
        return '#000' // black for light theme
    }
  }
  
  // Helper function for badge text color
  const getBadgeTextColor = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.text.primary // #eef4ff
      case 'highcontrast':
        return '#000' // black for high contrast
      default:
        return '#fff' // white for light theme
    }
  }

  // Helper for card border color
  const getCardBorderColor = () => {
    switch (currentTheme) {
      case 'highcontrast':
        return theme.palette.primary.a30
      default:
        return '#000'
    }
  }

  // Helper for section divider
  const getSectionDivider = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.primary.a40
      case 'highcontrast':
        return theme.palette.primary.a30
      default:
        return '#000'
    }
  }

  // Helper for marquee background
  const getMarqueeBg = () => {
    switch (currentTheme) {
      case 'dark':
        return theme.palette.primary.a20
      case 'highcontrast':
        return theme.palette.primary.a30
      default:
        return '#000'
    }
  }

  // Helper for marquee text color
  const getMarqueeText = () => {
    switch (currentTheme) {
      case 'dark':
        return '#000'
      case 'highcontrast':
        return '#000'
      default:
        return '#fff'
    }
  }

  const projects = [
    {
      tag: 'THREE.JS',
      title: 'Particle Universe',
      desc: 'A generative 3D particle system that reacts to audio input in real time.',
      year: '2024',
      color: theme.palette.primary.a40,
    },
    {
      tag: 'REACT + GSAP',
      title: 'Type Sequence',
      desc: 'Animated editorial layout engine with custom scroll-driven type reveals.',
      year: '2024',
      color: theme.palette.surface.a40,
    },
    {
      tag: 'FRAMER MOTION',
      title: 'Fluid Nav',
      desc: 'Morphing navigation component with spring-physics gesture transitions.',
      year: '2023',
      color: getTerminalBackground(),
    },
  ]

  const skills = [
    { label: 'React', level: 90 },
    // { label: 'Three.js', level: 72 },
    { label: 'TypeScript', level: 85 },
    { label: 'JavaScript', level: 98 },
    // { label: 'Framer Motion', level: 80 },
    { label: 'Tailwind CSS', level: 73 },
    { label: 'MUI', level: 88 },
  ]
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <Box 
        className="hero-split"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          my: { xs: 2, md: 5 },
          alignItems: 'center'
        }}
      >
        {/* Hero Left */}
        <Box 
          className="hero-left"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRight: { md: '3px dashed' },
            borderColor: theme.palette.primary.a60,
            pr: { md: 4 }
          }}
        >
          <Box
            component="div"
            className="badge"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              background: getBadgeBackground(),
              color: getBadgeTextColor(),
              padding: '0.4rem 1.2rem',
              display: 'inline-block',
              width: 'fit-content',
              border: '2px solid',
              borderColor: currentTheme === 'highcontrast' ? theme.palette.primary.a30 : '#000',
              mb: 2
            }}
          >
            ✦ FRONTEND + CREATIVE CODING ✦
          </Box>
          
          <Box
            component="h1"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: theme.palette.text.primary,
              m: 0
            }}
          >
            building{' '}
            <Box
              component="span"
              className="underline"
              sx={{
                background: currentTheme === 'highcontrast' 
                  ? theme.palette.primary.a30 
                  : theme.palette.primary.a40,
                padding: '0 8px 2px 8px',
                textDecoration: 'underline overline wavy',
                textDecorationColor: currentTheme === 'highcontrast' 
                  ? theme.palette.primary.a10 
                  : '#000',
                textDecorationThickness: '2px',
                color: currentTheme === 'highcontrast' 
                  ? '#000' 
                  : theme.palette.text.primary
              }}
            >
              weird
            </Box>{' '}
            & wonderful interfaces
          </Box>
          
          <Box
            component="p"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              lineHeight: 1.5,
              color: theme.palette.text.secondary,
              maxWidth: '450px',
              my: 2
            }}
          >
            Bala Murali — developer exploring the intersection of motion, code, and user experience. based in nyc.
          </Box>
          
          <Box
            className="cta-grid"
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              mt: 2
            }}
          >
            <Box
              component={Link}
              to="/work"
              key="Home"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                padding: '0.8rem 2.2rem',
                backgroundColor: currentTheme === 'light' ? '#000' : 'transparent',
                color: currentTheme === 'light' 
                  ? '#fff' 
                  : currentTheme === 'highcontrast' 
                  ? theme.palette.primary.a30 
                  : theme.palette.text.primary,
                border: '3px solid',
                borderColor: currentTheme === 'highcontrast' 
                  ? theme.palette.primary.a30 
                  : '#000',
                boxShadow: `6px 6px 0 ${getAccentSecondary()}`,
                transition: 'all 0.15s',
                cursor: 'pointer',
                display: 'inline-block',
                '&:hover': {
                  transform: 'translate(4px, 4px)',
                  boxShadow: `2px 2px 0 ${getAccentSecondary()}`
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(2px, 2px)';
                e.currentTarget.style.boxShadow = `3px 3px 0 ${currentTheme === 'highcontrast' ? '#ffff00' : theme.palette.primary.a40}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = `6px 6px 0 ${currentTheme === 'highcontrast' ? '#ffff00' : theme.palette.primary.a40}`;
              }}
            >
              view projects
            </Box>
            
            <Box
              component="a"
              href="#"
              className="btn-outline-custom"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                padding: '0.8rem 2.2rem',
                backgroundColor: 'transparent',
                color: theme.palette.text.primary,
                border: '3px solid',
                borderColor: currentTheme === 'highcontrast' 
                  ? theme.palette.primary.a30 
                  : '#000',
                boxShadow: `6px 6px 0 ${theme.palette.primary.a50}`,
                transition: 'all 0.15s',
                cursor: 'pointer',
                display: 'inline-block',
                '&:hover': {
                  transform: 'translate(4px, 4px)',
                  boxShadow: `2px 2px 0 ${theme.palette.primary.a50}`
                }
              }}
            >
              playground
            </Box>
          </Box>
        </Box>
        
        {/* Hero Right - Terminal */}
        <Box
          className="hero-right"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            p: 3,
            bgcolor: getTerminalBackground(),
            border: '4px solid',
            borderColor: currentTheme === 'highcontrast' 
              ? theme.palette.primary.a30 
              : '#000',
            boxShadow: currentTheme === 'highcontrast'
              ? `14px 14px 0 ${theme.palette.primary.a10}` 
              : '14px 14px 0 #000',
            fontFamily: '"JetBrains Mono", monospace',
            minHeight: { md: '300px' },
            justifyContent: 'center'
          }}
        >
          <Box
            className="terminal-line"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.a60,
              pb: 0.8,
              mb: 0.8
            }}
          >
            <Box
              component="span"
              className="prompt"
              sx={{
                color: getPromptColor(),
                fontWeight: 700,
                fontFamily: '"JetBrains Mono", monospace'
              }}
            >
              $&gt;
            </Box>
            npx bala --skills 
          </Box>
          
          <Box
            className="terminal-line"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.a60,
              pb: 0.8,
              mb: 0.8
            }}
          >
            <Box
              component="span"
              className="prompt"
              sx={{
                color: getPromptColor(),
                fontWeight: 700
              }}
            >
              &gt;
            </Box>
            React · Three.js · Framer Motion
          </Box>
          
          <Box
            className="terminal-line"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.a60,
              pb: 0.8,
              mb: 0.8
            }}
          >
            <Box
              component="span"
              className="prompt"
              sx={{
                color: getPromptColor(),
                fontWeight: 700
              }}
            >
              &gt;
            </Box>
            TypeScript · Tailwind · Mui
          </Box>
          
          <Box
            className="terminal-line"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.a60,
              pb: 0.8,
              mb: 0.8
            }}
          >
            <Box
              component="span"
              className="prompt"
              sx={{
                color: getPromptColor(),
                fontWeight: 700
              }}
            >
              &gt;
            </Box>
            1.5+ yrs frontend · 1 yrs creative dev
          </Box>
          
          <Box
            className="terminal-line"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme.palette.text.primary
            }}
          >
            <Box
              component="span"
              className="prompt"
              sx={{
                color: getPromptColor(),
                fontWeight: 700
              }}
            >
              $&gt;
            </Box>
            currently: building generative UI
            <Box
              component="span"
              className="cursor-block"
              sx={{
                background: currentTheme === 'highcontrast' 
                  ? theme.palette.primary.a30 
                  : '#000',
                color: currentTheme === 'highcontrast' 
                  ? '#000' 
                  : theme.palette.surface.a20,
                padding: '0.2rem 0.6rem',
                ml: 0.5,
                display: 'inline-block'
              }}
            >
              ▊
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ─── MARQUEE TICKER ─────────────────────────────────────── */}
      <Box
        sx={{
          overflow: 'hidden',
          borderTop: '3px solid',
          borderBottom: '3px solid',
          borderColor: getSectionDivider(),
          my: { xs: 4, md: 6 },
          bgcolor: getMarqueeBg(),
          py: 1.2,
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee 18s linear infinite',
          }}
        >
          {Array(2).fill(null).map((_, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                gap: 4,
                pr: 4,
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                color: getMarqueeText(),
                whiteSpace: 'nowrap',
              }}
            >
              {['REACT', '✦', 'THREE.JS', '✦', 'FRAMER MOTION', '✦', 'TYPESCRIPT', '✦', 'CREATIVE CODING', '✦', 'GENERATIVE UI', '✦', 'MOTION DESIGN', '✦'].map((word, j) => (
                <Box component="span" key={j}>{word}</Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ─── FEATURED WORK ──────────────────────────────────────── */}
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            mb: 4,
            borderBottom: '3px solid',
            borderColor: getSectionDivider(),
            pb: 2,
          }}
        >
          <Box
            component="h2"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              color: theme.palette.text.primary,
              m: 0,
              letterSpacing: '-0.02em',
            }}
          >
            featured work
          </Box>
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.8rem',
              color: theme.palette.text.disabled,
              ml: 'auto',
            }}
          >
            [ 03 projects ]
          </Box>
        </Box>

        {/* Project Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {projects.map((project, idx) => (
            <Box
              key={idx}
              sx={{
                border: '3px solid',
                borderColor: getCardBorderColor(),
                bgcolor: project.color,
                boxShadow: currentTheme === 'highcontrast'
                  ? `8px 8px 0 ${theme.palette.primary.a10}`
                  : '8px 8px 0 #000',
                transition: 'all 0.15s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translate(-4px, -4px)',
                  boxShadow: currentTheme === 'highcontrast'
                    ? `14px 14px 0 ${theme.palette.primary.a10}`
                    : '14px 14px 0 #000',
                }
              }}
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  height: '160px',
                  borderBottom: '3px solid',
                  borderColor: getCardBorderColor(),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: getTerminalBackground(),
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '2rem',
                  color: getPromptColor(),
                  fontWeight: 700,
                }}
              >
                {['◈', '◉', '◎'][idx]}
              </Box>

              <Box sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: getPromptColor(),
                    mb: 1,
                  }}
                >
                  {project.tag}
                </Box>
                <Box
                  component="h3"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: theme.palette.text.primary,
                    m: 0,
                    mb: 1,
                  }}
                >
                  {project.title}
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.9rem',
                    color: theme.palette.text.secondary,
                    lineHeight: 1.5,
                    m: 0,
                    mb: 2,
                  }}
                >
                  {project.desc}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '2px dashed',
                    borderColor: getSectionDivider(),
                    pt: 1.5,
                  }}
                >
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    view case →
                  </Box>
                  <Box
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      color: theme.palette.text.disabled,
                    }}
                  >
                    {project.year}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ─── SKILLS + PROFICIENCY ───────────────────────────────── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 8 },
          mb: { xs: 6, md: 10 },
          borderTop: '3px solid',
          borderColor: getSectionDivider(),
          pt: { xs: 4, md: 6 },
        }}
      >
        {/* Left — About blurb */}
        <Box>
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: getPromptColor(),
              mb: 1.5,
            }}
          >
            // about.md
          </Box>
          <Box
            component="h2"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              color: theme.palette.text.primary,
              m: 0,
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            code is my{' '}
            <Box
              component="span"
              sx={{
                background: currentTheme === 'highcontrast'
                  ? theme.palette.primary.a30
                  : theme.palette.primary.a40,
                px: '6px',
                textDecoration: 'underline wavy',
                textDecorationColor: currentTheme === 'highcontrast'
                  ? theme.palette.primary.a10
                  : '#000',
                textDecorationThickness: '2px',
                color: currentTheme === 'highcontrast'
                  ? '#000'
                  : theme.palette.text.primary,
              }}
            >
              canvas
            </Box>
          </Box>
          <Box
            component="p"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: theme.palette.text.secondary,
              m: 0,
              mb: 2,
            }}
          >
            I bridge the gap between design and engineering — obsessing over micro-interactions,
            generative visuals, and the kind of UI details that users feel but can't name.
          </Box>
          <Box
            component="p"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: theme.palette.text.secondary,
              m: 0,
              mb: 3,
            }}
          >
            Currently exploring generative UI patterns, shader art with GLSL, and building
            tools that let creativity and code feed each other.
          </Box>
          <Box
            component={Link}
            to="/about"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              color: theme.palette.text.primary,
              border: '2px solid',
              borderColor: getCardBorderColor(),
              padding: '0.6rem 1.6rem',
              display: 'inline-block',
              boxShadow: `4px 4px 0 ${getAccentSecondary()}`,
              transition: 'all 0.15s',
              '&:hover': {
                transform: 'translate(2px, 2px)',
                boxShadow: `2px 2px 0 ${getAccentSecondary()}`,
              },
            }}
          >
            more about me →
          </Box>
        </Box>

        {/* Right — Skill bars */}
        <Box>
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: getPromptColor(),
              mb: 1.5,
            }}
          >
            // proficiency.json
          </Box>
          <Box
            component="h2"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              color: theme.palette.text.primary,
              m: 0,
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            stack at a glance
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {skills.map((skill) => (
              <Box key={skill.label}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {skill.label}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      color: theme.palette.text.disabled,
                    }}
                  >
                    {skill.level}%
                  </Box>
                </Box>
                {/* Track */}
                <Box
                  sx={{
                    height: '10px',
                    bgcolor: getTerminalBackground(),
                    border: '2px solid',
                    borderColor: getCardBorderColor(),
                  }}
                >
                  {/* Fill */}
                  <Box
                    sx={{
                      height: '100%',
                      width: `${skill.level}%`,
                      bgcolor: currentTheme === 'highcontrast'
                        ? theme.palette.primary.a30
                        : theme.palette.primary.a40,
                      transition: 'width 0.8s ease',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ─── CURRENTLY BUILDING ─────────────────────────────────── */}
      <Box
        sx={{
          border: '4px solid',
          borderColor: getCardBorderColor(),
          boxShadow: currentTheme === 'highcontrast'
            ? `10px 10px 0 ${theme.palette.primary.a10}`
            : '10px 10px 0 #000',
          mb: { xs: 6, md: 10 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
        }}
      >
        {/* Label column */}
        <Box
          sx={{
            bgcolor: currentTheme === 'highcontrast'
              ? theme.palette.primary.a30
              : '#000',
            color: currentTheme === 'highcontrast' ? '#000' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            borderRight: { md: '4px solid' },
            borderColor: getCardBorderColor(),
            borderBottom: { xs: '4px solid', md: 'none' },
          }}
        >
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textAlign: 'center',
              writingMode: { md: 'vertical-rl' },
              transform: { md: 'rotate(180deg)' },
            }}
          >
            NOW BUILDING
          </Box>
        </Box>

        {/* Content column */}
        <Box sx={{ p: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.78rem',
              color: getPromptColor(),
              fontWeight: 700,
              letterSpacing: '0.08em',
              mb: 1.5,
            }}
          >
            $&gt; status --current
          </Box>
          <Box
            component="h3"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.4rem', md: '1.8rem' },
              color: theme.palette.text.primary,
              m: 0,
              mb: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            Generative UI Component Library
          </Box>
          <Box
            component="p"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: theme.palette.text.secondary,
              m: 0,
              mb: 3,
              maxWidth: '520px',
            }}
          >
            A collection of React components driven by procedural algorithms — noise fields,
            cellular automata, and parametric shapes that respond to user interaction and
            system state.
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {['React', 'Canvas API', 'WebGL', 'Open Source'].map((tag) => (
              <Box
                key={tag}
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  border: '2px solid',
                  borderColor: getCardBorderColor(),
                  px: 1.2,
                  py: 0.4,
                  color: theme.palette.text.secondary,
                  bgcolor: getTerminalBackground(),
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ─── CONTACT CTA ────────────────────────────────────────── */}
      <Box
        sx={{
          borderTop: '3px solid',
          borderColor: getSectionDivider(),
          pt: { xs: 4, md: 6 },
          mb: { xs: 6, md: 8 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-end' },
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box>
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.78rem',
              color: getPromptColor(),
              fontWeight: 700,
              letterSpacing: '0.08em',
              mb: 1.5,
            }}
          >
            // contact.init()
          </Box>
          <Box
            component="h2"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              color: theme.palette.text.primary,
              m: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            let's make something{' '}
            <Box
              component="span"
              sx={{
                background: currentTheme === 'highcontrast'
                  ? theme.palette.primary.a30
                  : theme.palette.primary.a40,
                px: '6px',
                color: currentTheme === 'highcontrast'
                  ? '#000'
                  : theme.palette.text.primary,
              }}
            >
              strange.
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Box
            component="a"
            href="mailto:bala@example.com"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              padding: '0.8rem 2rem',
              backgroundColor: currentTheme === 'light' ? '#000' : 'transparent',
              color: currentTheme === 'light'
                ? '#fff'
                : currentTheme === 'highcontrast'
                ? theme.palette.primary.a30
                : theme.palette.text.primary,
              border: '3px solid',
              borderColor: currentTheme === 'highcontrast'
                ? theme.palette.primary.a30
                : '#000',
              boxShadow: `6px 6px 0 ${getAccentSecondary()}`,
              transition: 'all 0.15s',
              cursor: 'pointer',
              display: 'inline-block',
              '&:hover': {
                transform: 'translate(4px, 4px)',
                boxShadow: `2px 2px 0 ${getAccentSecondary()}`,
              },
            }}
          >
            say hello →
          </Box>
          <Box
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              padding: '0.8rem 2rem',
              backgroundColor: 'transparent',
              color: theme.palette.text.primary,
              border: '3px solid',
              borderColor: currentTheme === 'highcontrast'
                ? theme.palette.primary.a30
                : '#000',
              boxShadow: `6px 6px 0 ${theme.palette.primary.a50}`,
              transition: 'all 0.15s',
              cursor: 'pointer',
              display: 'inline-block',
              '&:hover': {
                transform: 'translate(4px, 4px)',
                boxShadow: `2px 2px 0 ${theme.palette.primary.a50}`,
              },
            }}
          >
            github ↗
          </Box>
        </Box>
      </Box>

    </Box>
  )
}