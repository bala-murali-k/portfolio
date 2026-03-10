// Required imports
import { Box, useTheme, Grid } from '@mui/material'
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from './../../../context/theme/theme.context.component.tsx'
import emailjs from '@emailjs/browser'

export function ContactFormsSectionContactPageComponent() {
    const { currentTheme } = useContext(ThemeContext)
    const theme = useTheme()
    const formRef = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' })

    // Form submission handler - SENDS REAL EMAILS
// Form submission handler - SENDS REAL EMAILS with your template
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const form = event.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const subject = form.subject.value.trim() || 'No subject provided'
    const message = form.message.value.trim()

    // Validation
    if (!name || !email || !message) {
        setSubmitStatus({
            type: 'error',
            message: 'Please fill in all required fields (name, email, message)'
        })
        setIsSubmitting(false)
        return
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        setSubmitStatus({
            type: 'error',
            message: 'Please enter a valid email address'
        })
        setIsSubmitting(false)
        return
    }

    try {
        // Prepare template parameters to match your EmailJS template
        const templateParams = {
            to_name: 'Bala', // or you can make this dynamic
            from_name: name,
            name: name,
            email: email,
            subject: subject,
            message: message,
            title: subject, // For the subject line: "Contact Us: {{title}}"
            reply_to: email
        }

        // Send email using EmailJS
        const result = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        if (result.status === 200) {
            setSubmitStatus({
                type: 'success',
                message: '✓ Message sent successfully! Thank you for reaching out.'
            })
            form.reset()
        } else {
            throw new Error('Failed to send email')
        }
    } catch (error) {
        console.error('Email error:', error)
        setSubmitStatus({
            type: 'error',
            message: '❌ Failed to send message. Please try again later.'
        })
    } finally {
        setIsSubmitting(false)
    }
}
    
    return (
        <Box 
            className="contact-forms-section"
            sx={{
                py: { xs: 4, md: 6 },
            }}
        >
            {/* Two Column Grid */}
            <Grid 
                container 
                spacing={2}
                sx={{ mt: 2 }}
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
                                color: theme.palette.text.primary,
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
                            ref={formRef}
                            id="contactForm"
                            onSubmit={handleSubmit}
                            sx={{ width: '100%' }}
                            noValidate
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
                                    name <Box component="span" sx={{ color: theme.palette.error.main }}>*</Box>
                                </Box>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box
                                        component="input"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="your name"
                                        required
                                        sx={{
                                            flex: 1,
                                            minWidth: 0,
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
                                    email <Box component="span" sx={{ color: theme.palette.error.main }}>*</Box>
                                </Box>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box
                                        component="input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        sx={{
                                            flex: 1,
                                            minWidth: 0,
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
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box
                                        component="input"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="what's this about?"
                                        sx={{
                                            flex: 1,
                                            minWidth: 0,
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
                                    message <Box component="span" sx={{ color: theme.palette.error.main }}>*</Box>
                                </Box>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box
                                        component="textarea"
                                        id="message"
                                        name="message"
                                        placeholder="your message..."
                                        required
                                        rows={4}
                                        sx={{
                                            flex: 1,
                                            minWidth: 0,
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
                            </Box>

                            {/* Submit button with loading state */}
                            <Box
                                component="button"
                                type="submit"
                                disabled={isSubmitting}
                                sx={{
                                    width: '100%',
                                    fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                    background: isSubmitting 
                                        ? theme.palette.action.disabledBackground
                                        : theme.palette.background.paper,
                                    border: '3px solid',
                                    borderColor: currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a30 
                                        : '#000',
                                    p: '0.8rem 2rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: isSubmitting
                                        ? theme.palette.text.disabled
                                        : theme.palette.text.primary,
                                    boxShadow: `4px 4px 0 ${currentTheme === 'highcontrast' 
                                        ? theme.palette.primary.a10 
                                        : '#000'}`,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.1s',
                                    textAlign: 'center',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    '&:hover': isSubmitting ? {} : {
                                        background: theme.palette.primary.main,
                                        color: theme.palette.background.default,
                                        transform: 'translate(-2px, -2px)',
                                        boxShadow: `6px 6px 0 ${currentTheme === 'highcontrast' 
                                            ? theme.palette.primary.a10 
                                            : '#000'}`
                                    }
                                }}
                            >
                                {isSubmitting ? 'sending...' : 'send message →'}
                            </Box>

                            {/* Status message */}
                            {submitStatus.type && (
                                <Box
                                    sx={{
                                        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
                                        fontSize: '0.8rem',
                                        mt: 2,
                                        textAlign: 'center',
                                        color: submitStatus.type === 'success' 
                                            ? theme.palette.success.main 
                                            : theme.palette.error.main
                                    }}
                                >
                                    {submitStatus.message}
                                </Box>
                            )}
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
                                color: theme.palette.text.primary,
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
                                            git/bala-murali-k
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