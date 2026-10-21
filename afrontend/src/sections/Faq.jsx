import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { SectionHeader } from '../components/SectionHeader'
import './Faq.css'

const faqs = [
    {
        id: 1,
        question: 'How is Vantrex different from cheap agency templates?',
        answer: 'We don’t use generic drag-and-drop builders or unmaintained bloated WordPress themes. We write bespoke code with modern frameworks (Next.js, Tailwind, clean JavaScript), ensuring instant load times, zero security vulnerabilities, and 100% design exclusivity.',
    },
    {
        id: 2,
        question: 'How does your developer mentorship / internship program work?',
        answer: 'Our education is built around genuine project work. Instead of watching lectures, students learn by writing logic, participating in code reviews, understanding Git team workflows, and shipping live web applications for their portfolios.',
    },
    {
        id: 3,
        question: 'How are payments and project milestones structured?',
        answer: 'We typically operate on a phased 50/50 model: 50% upfront to kick off architecture and design, and 50% upon final delivery and client deployment sign-off.',
    },
    {
        id: 4,
        question: 'What support do you provide post-launch?',
        answer: 'Every build includes 30 days of complimentary bug monitoring, performance checks, and operational guidance, with affordable ongoing retainer options available.',
    },
]

export const Faq = () => {
    // Ek hi state: kaunsa panel khula hai (null = koi nahi)
    const [openId, setOpenId] = useState(null)

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id) // wahi dabaya to band, warna naya kholo
    }

    return (
        <section id="faq" className="faq">
            <div className="faq__wrap">
                <SectionHeader label="CLARIFICATIONS" title="Frequently Answered Queries" />

                <div className="faq__list">
                    {faqs.map((item) => {
                        const isOpen = openId === item.id

                        return (
                            <GlassCard key={item.id} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                                <button
                                    type="button"
                                    className="faq-item__btn"
                                    aria-expanded={isOpen}
                                    onClick={() => handleToggle(item.id)}
                                >
                                    <span>{item.question}</span>
                                    <ChevronDown size={16} className="faq-item__chevron" />
                                </button>

                                <div className="faq-item__panel">
                                    <div className="faq-item__panel-inner">
                                        <p className="faq-item__answer">{item.answer}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

