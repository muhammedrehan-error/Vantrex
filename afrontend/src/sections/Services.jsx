import { Code2, Zap, Palette, GraduationCap } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { useReveal } from '../hooks/useReveal'
import './Services.css'

const services = [
    {
        id: 'fullstack',
        icon: Code2,
        color: 'crimson',
        wide: true,
        title: 'Full-Stack Web & Software Engineering',
        text: 'From scalable client-facing web applications to high-converting landing pages, we build maintainable codebases with clean architectural boundaries.',
        badges: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'REST & GraphQL', 'PostgreSQL / Supabase'],
    },
    {
        id: 'speed',
        icon: Zap,
        color: 'emerald',
        title: 'Speed & Performance Architecture',
        text: 'Zero-bloat assets, pre-rendered static generation, fast load times, and clean SEO metadata structures.',
    },
    {
        id: 'design',
        icon: Palette,
        color: 'purple',
        title: 'Design Systems & Prototyping',
        text: 'Editorial typography pairing, systematic spacing tokens, and Figma-to-code implementations with obsessive attention to detail.',
        handoff: { label: 'Figma Hand-off', value: 'Pixel Precision' },
    },
    {
        id: 'mentorship',
        icon: GraduationCap,
        color: 'crimson',
        wide: true,
        title: 'Developer Mentorship & Hands-on Logic Acceleration',
        text: 'We bridge the gap between academic theory and real-world software engineering. Hands-on code reviews, practical Git workflows, logic formulation, and modern frontend mastery for students and aspiring developers.',
        points: [
            { title: '01. Real Codebases', text: 'No copy-paste syntax drills.' },
            { title: '02. Direct Feedback', text: 'Line-by-line pull request audits.' },
            { title: '03. Career Ready', text: 'Build demonstrable ship-ready apps.' },
        ],
    },
]

import React from 'react'

export const Services = () => {
    const [headRef, headVisible] = useReveal()

    return (
        <section id="services" className="services">
            <div className="container">
                <div
                    ref={headRef}
                    className={`services__head reveal ${headVisible ? 'reveal--active' : ''}`}
                >
                    <div className="services__label">
                        <span className="services__label-dot" />
                        <span>STUDIO CAPABILITIES</span>
                    </div>
                    <h2 className="services__title">Engineered for scale. Built with taste.</h2>
                    <p className="services__sub">
                        We don't use generic templates or fragile visual page-builders. Every build is
                        handcrafted using standard-compliant code.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((item) => {
                        const Icon = item.icon // JSX me component ka naam capital se shuru hona chahiye

                        return (
                            <GlassCard
                                key={item.id}
                                className={`service ${item.wide ? 'service--wide' : ''}`}
                            >
                                <div className="service__top">
                                    <div className={`service__icon service__icon--${item.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="service__title">{item.title}</h3>
                                    <p className="service__text">{item.text}</p>
                                </div>

                                {item.badges && (
                                    <div className="service__badges">
                                        {item.badges.map((badge) => (
                                            <span key={badge} className="service__badge">{badge}</span>
                                        ))}
                                    </div>
                                )}

                                {item.handoff && (
                                    <div className="service__handoff">
                                        <span>{item.handoff.label}</span>
                                        <strong>{item.handoff.value}</strong>
                                    </div>
                                )}

                                {item.points && (
                                    <div className="service__points">
                                        {item.points.map((p) => (
                                            <div key={p.title} className="service__point">
                                                <strong>{p.title}</strong>
                                                {p.text}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </GlassCard>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

