// Required imports
import { Box, useTheme, Grid } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'

export function ContactFormsSectionContactPageComponent() {
    const { currentTheme } = useContext(ThemeContext)
    const theme = useTheme()

    // Form submission handler
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const message = form.message.value.trim()

        if (!name || !email || !message) {
            alert('❌ please fill in all required fields (name, email, message)')
            return false
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('❌ enter a valid email address')
            return false
        }
        alert('✓ message sent (simulated) — thank you for reaching out!')
        form.reset()
        return false
    }

    // Info link click handlers
    const handleGithubClick = (e) => {
    }

    const handleLinkedinClick = (e) => {
        e.preventDefault()
        alert('linkedin profile (simulated)')
    }
    
    return (
        <Box 
            className="contact-forms-section"
            sx={{
                my: { xs: 4, md: 6 }
            }}
        >
            {/* Two Column Grid */}
            <Grid 
                container 
                spacing={2}
                sx={{
                    mt: 2,
                }}
            >
                {/* LEFT SIDE: CONTACT FORM CARD */}
                <Grid item size={{ xs:12, md:6 }}>
                    <Box
                        className="contact-card"
                        sx={{
                            background: theme.palette.background.paper,
                            border: '3px solid',
                            borderColor: currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a30 
                                : '#000',
                            boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a10 
                                : '#000'}`,
                            p: 3,
                            transition: 'transform 0.1s ease, box-shadow 0.1s ease',
                            height: '100%',
                            '&:hover': {
                                transform: 'translate(-4px, -4px)',
                                boxShadow: `12px 12px 0 ${currentTheme === 'highcontrast' 
                                    ? theme.palette.primary.a10 
                                    : '#000'}`
                            }
                        }}
                    >
                        <Box
                            className="card-title"
                            sx={{
                                fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                fontSize: '1.8rem',
                                fontWeight: 600,
                                mb: 3,
                                borderLeft: '3px solid',
                                borderColor: currentTheme === 'highcontrast' 
                                    ? theme.palette.primary.a30 
                                    : theme.palette.primary.main,
                                pl: 2
                            }}
                        >
                            send a message
                        </Box>

                        <Box
                            component="form"
                            id="contactForm"
                            onSubmit={handleSubmit}
                            sx={{ width: '100%' }}
                        >
                            {/* Name field */}
                            <Box sx={{ mb: 2.5 }}>
                                <Box
                                    component="label"
                                    htmlFor="name"
                                    sx={{
                                        display: 'block',
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        mb: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    name
                                </Box>
                                <Box
                                    component="input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="your name"
                                    required
                                    sx={{
                                        width: '100%',
                                        background: theme.palette.background.default,
                                        border: '3px solid',
                                        borderColor: currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a30 
                                            : '#000',
                                        p: '0.8rem 1rem',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '1rem',
                                        color: theme.palette.text.primary,
                                        boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`,
                                        transition: 'all 0.1s',
                                        '&:focus': {
                                            outline: 'none',
                                            borderColor: theme.palette.primary.main,
                                            boxShadow: `6px 6px 0 ${theme.palette.primary.main}`,
                                            transform: 'translate(-2px, -2px)'
                                        }
                                    }}
                                />
                            </Box>

                            {/* Email field */}
                            <Box sx={{ mb: 2.5 }}>
                                <Box
                                    component="label"
                                    htmlFor="email"
                                    sx={{
                                        display: 'block',
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        mb: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    email
                                </Box>
                                <Box
                                    component="input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    sx={{
                                        width: '100%',
                                        background: theme.palette.background.default,
                                        border: '3px solid',
                                        borderColor: currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a30 
                                            : '#000',
                                        p: '0.8rem 1rem',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '1rem',
                                        color: theme.palette.text.primary,
                                        boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`,
                                        transition: 'all 0.1s',
                                        '&:focus': {
                                            outline: 'none',
                                            borderColor: theme.palette.primary.main,
                                            boxShadow: `6px 6px 0 ${theme.palette.primary.main}`,
                                            transform: 'translate(-2px, -2px)'
                                        }
                                    }}
                                />
                            </Box>

                            {/* Subject field */}
                            <Box sx={{ mb: 2.5 }}>
                                <Box
                                    component="label"
                                    htmlFor="subject"
                                    sx={{
                                        display: 'block',
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        mb: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    subject
                                </Box>
                                <Box
                                    component="input"
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="what's this about?"
                                    sx={{
                                        width: '100%',
                                        background: theme.palette.background.default,
                                        border: '3px solid',
                                        borderColor: currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a30 
                                            : '#000',
                                        p: '0.8rem 1rem',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '1rem',
                                        color: theme.palette.text.primary,
                                        boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`,
                                        transition: 'all 0.1s',
                                        '&:focus': {
                                            outline: 'none',
                                            borderColor: theme.palette.primary.main,
                                            boxShadow: `6px 6px 0 ${theme.palette.primary.main}`,
                                            transform: 'translate(-2px, -2px)'
                                        }
                                    }}
                                />
                            </Box>

                            {/* Message field */}
                            <Box sx={{ mb: 2.5 }}>
                                <Box
                                    component="label"
                                    htmlFor="message"
                                    sx={{
                                        display: 'block',
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        mb: 1,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    message
                                </Box>
                                <Box
                                    component="textarea"
                                    id="message"
                                    name="message"
                                    placeholder="your message..."
                                    required
                                    sx={{
                                        width: '100%',
                                        minHeight: '120px',
                                        background: theme.palette.background.default,
                                        border: '3px solid',
                                        borderColor: currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a30 
                                            : '#000',
                                        p: '0.8rem 1rem',
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: '1rem',
                                        color: theme.palette.text.primary,
                                        boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`,
                                        transition: 'all 0.1s',
                                        resize: 'vertical',
                                        '&:focus': {
                                            outline: 'none',
                                            borderColor: theme.palette.primary.main,
                                            boxShadow: `6px 6px 0 ${theme.palette.primary.main}`,
                                            transform: 'translate(-2px, -2px)'
                                        }
                                    }}
                                />
                            </Box>

                            {/* Submit button */}
                            <Box
                                component="button"
                                type="submit"
                                sx={{
                                    width: '100%',
                                    fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                    background: theme.palette.background.paper,
                                    border: '3px solid',
                                    borderColor: currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a30 
                                        : '#000',
                                    p: '0.8rem 2rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a10 
                                        : '#000'}`,
                                    cursor: 'pointer',
                                    transition: 'all 0.1s',
                                    textAlign: 'center',
                                    '&:hover': {
                                        background: theme.palette.primary.main,
                                        color: theme.palette.background.default,
                                        transform: 'translate(-2px, -2px)',
                                        boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`
                                    }
                                }}
                            >
                                send message →
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* RIGHT SIDE: CONTACT INFO CARDS */}
                <Grid item  size={{ xs:12, md:6 }}>
                    <Box
                        className="contact-card"
                        sx={{
                            background: theme.palette.background.paper,
                            border: '3px solid',
                            borderColor: currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a30 
                                : '#000',
                            boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                ? theme.palette.primary.a10 
                                : '#000'}`,
                            p: 3,
                            transition: 'transform 0.1s ease, box-shadow 0.1s ease',
                            height: '100%',
                            '&:hover': {
                                transform: 'translate(-4px, -4px)',
                                boxShadow: `12px 12px 0 ${currentTheme === 'highcontrast' 
                                    ? theme.palette.primary.a10 
                                    : '#000'}`
                            }
                        }}
                    >
                        <Box
                            className="card-title"
                            sx={{
                                fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                fontSize: '1.8rem',
                                fontWeight: 600,
                                mb: 3,
                                borderLeft: '3px solid',
                                borderColor: currentTheme === 'highcontrast' 
                                    ? theme.palette.primary.a30 
                                    : theme.palette.primary.main,
                                pl: 2
                            }}
                        >
                            connect
                        </Box>

                        <Box
                            className="info-grid"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.5
                            }}
                        >
                            {/* Email */}
                            <Box
                                className="info-item"
                                sx={{
                                    background: theme.palette.background.default,
                                    border: '3px solid',
                                    borderColor: currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a30 
                                        : '#000',
                                    boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a10 
                                        : '#000'}`,
                                    p: '1.2rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    transition: 'all 0.1s',
                                    '&:hover': {
                                        transform: 'translate(-2px, -2px)',
                                        boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '2rem',
                                        lineHeight: 1
                                    }}
                                >
                                    📧
                                </Box>
                                <Box sx={{ fontFamily: '"JetBrains Mono", "Space Mono", monospace' }}>
                                    <Box
                                        sx={{
                                            fontSize: '0.8rem',
                                            textTransform: 'uppercase',
                                            color: theme.palette.text.secondary,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        email
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        <Box
                                            component="a"
                                            href="mailto:bala@example.com"
                                            sx={{
                                                color: theme.palette.text.primary,
                                                textDecoration: 'none',
                                                borderBottom: '2px solid',
                                                borderColor: currentTheme === 'highcontrast' 
                                                    ? theme.palette.primary.a30 
                                                    : theme.palette.primary.main,
                                                '&:hover': {
                                                    background: currentTheme === 'highcontrast' 
                                                        ? theme.palette.primary.a30 
                                                        : theme.palette.primary.main,
                                                    color: currentTheme === 'highcontrast' 
                                                        ? '#000' 
                                                        : theme.palette.background.default
                                                }
                                            }}
                                        >
                                            k.balamurali@gmail.com
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            {/* GitHub */}
                            <Box
                                className="info-item"
                                sx={{
                                    background: theme.palette.background.default,
                                    border: '3px solid',
                                    borderColor: currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a30 
                                        : '#000',
                                    boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a10 
                                        : '#000'}`,
                                    p: '1.2rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    transition: 'all 0.1s',
                                    '&:hover': {
                                        transform: 'translate(-2px, -2px)',
                                        boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '2rem',
                                        lineHeight: 1
                                    }}
                                >
                                    💻
                                </Box>
                                <Box sx={{ fontFamily: '"JetBrains Mono", "Space Mono", monospace' }}>
                                    <Box
                                        sx={{
                                            fontSize: '0.8rem',
                                            textTransform: 'uppercase',
                                            color: theme.palette.text.secondary,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        github
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        <Box
                                            component="a"
                                            href="https://github.com/bala-murali-k"
                                            target='_blank'
                                            // onClick={(event: any) => {
                                            //     event.preventDefault()
                                            //     alert('github profile (simulated)')
                                            // }}
                                            sx={{
                                                color: theme.palette.text.primary,
                                                textDecoration: 'none',
                                                borderBottom: '2px solid',
                                                borderColor: currentTheme === 'highcontrast' 
                                                    ? theme.palette.primary.a30 
                                                    : theme.palette.primary.main,
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    background: currentTheme === 'highcontrast' 
                                                        ? theme.palette.primary.a30 
                                                        : theme.palette.primary.main,
                                                    color: currentTheme === 'highcontrast' 
                                                        ? '#000' 
                                                        : theme.palette.background.default
                                                }
                                            }}
                                        >
                                            /bala
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            {/* LinkedIn */}
                            <Box
                                className="info-item"
                                sx={{
                                    background: theme.palette.background.default,
                                    border: '3px solid',
                                    borderColor: currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a30 
                                        : '#000',
                                    boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a10 
                                        : '#000'}`,
                                    p: '1.2rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    transition: 'all 0.1s',
                                    '&:hover': {
                                        transform: 'translate(-2px, -2px)',
                                        boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '2rem',
                                        lineHeight: 1
                                    }}
                                >
                                    💼
                                </Box>
                                <Box sx={{ fontFamily: '"JetBrains Mono", "Space Mono", monospace' }}>
                                    <Box
                                        sx={{
                                            fontSize: '0.8rem',
                                            textTransform: 'uppercase',
                                            color: theme.palette.text.secondary,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        linkedin
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        <Box
                                            component="a"
                                            href="https://www.linkedin.com/in/bala-murali-k0701/"
                                            target='_blank'
                                            sx={{
                                                color: theme.palette.text.primary,
                                                textDecoration: 'none',
                                                borderBottom: '2px solid',
                                                borderColor: currentTheme === 'highcontrast' 
                                                    ? theme.palette.primary.a30 
                                                    : theme.palette.primary.main,
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    background: currentTheme === 'highcontrast' 
                                                        ? theme.palette.primary.a30 
                                                        : theme.palette.primary.main,
                                                    color: currentTheme === 'highcontrast' 
                                                        ? '#000' 
                                                        : theme.palette.background.default
                                                }
                                            }}
                                        >
                                            in/bala-murali-k
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Location */}
                            <Box
                                className="info-item"
                                sx={{
                                    background: theme.palette.background.default,
                                    border: '3px solid',
                                    borderColor: currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a30 
                                        : '#000',
                                    boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a10 
                                        : '#000'}`,
                                    p: '1.2rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    transition: 'all 0.1s',
                                    '&:hover': {
                                        transform: 'translate(-2px, -2px)',
                                        boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '2rem',
                                        lineHeight: 1
                                    }}
                                >
                                    📍
                                </Box>
                                <Box sx={{ fontFamily: '"JetBrains Mono", "Space Mono", monospace' }}>
                                    <Box
                                        sx={{
                                            fontSize: '0.8rem',
                                            textTransform: 'uppercase',
                                            color: theme.palette.text.secondary,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        location
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            wordBreak: 'break-word',
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        India
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}