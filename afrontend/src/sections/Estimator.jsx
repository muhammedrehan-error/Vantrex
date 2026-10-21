import { useState } from 'react'
import { Calculator, ArrowRight } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { useReveal } from '../hooks/useReveal'
import './Estimator.css'

// Data component ke bahar: ye kabhi badalta nahi, har render par dobara nahi banta
const projectTypes = [
    { id: 'landing', sprint: 'SPRINT 01', name: 'High-Converting Landing Page', desc: 'Editorial, responsive, conversion-focused.', basePrice: 15000, baseDays: 5 },
    { id: 'webapp', sprint: 'SPRINT 02', name: 'Full Web Application', desc: 'Authentication, database, dashboards.', basePrice: 35000, baseDays: 14 },
    { id: 'ecommerce', sprint: 'SPRINT 03', name: 'E-Commerce Platform', desc: 'Headless store, cart, payment gateways.', basePrice: 45000, baseDays: 20 },
]

const addons = [
    { id: 'seo', name: 'SEO & Schema Optimization', cost: 5000, extraDays: 2 },
    { id: 'auth', name: 'User Auth & Permissions', cost: 8000, extraDays: 3 },
    { id: 'payment', name: 'Payment Gateway / Invoicing', cost: 7000, extraDays: 3 },
    { id: 'motion', name: 'Custom Motion / Micro-UI', cost: 6000, extraDays: 2 },
]

export const Estimator = ({ onApply }) => {
    const [headRef, headVisible] = useReveal()

    const [selectedType, setSelectedType] = useState('landing')
    const [selectedAddons, setSelectedAddons] = useState([]) // ids ka array

    // DERIVED: state se nikala hua, alag state banane ki zarurat nahi
    const type = projectTypes.find((t) => t.id === selectedType)
    const chosenAddons = addons.filter((a) => selectedAddons.includes(a.id))

    const total = type.basePrice + chosenAddons.reduce((sum, a) => sum + a.cost, 0)
    const minDays = type.baseDays + chosenAddons.reduce((sum, a) => sum + a.extraDays, 0)
    const maxDays = minDays + 3

    const toggleAddon = (id) => {
        // State ko kabhi seedha badalte nahi (push mat karo), hamesha naya array banao
        setSelectedAddons((prev) =>
            prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
        )
    }

    const handleApply = () => {
        // Parent (App) ko estimate bhej do
        onApply?.({
            typeId: type.id,
            typeName: type.name,
            modules: chosenAddons.map((a) => a.name),
            total,
            minDays,
            maxDays,
        })
    }

    return (
        <section id="estimator" className="estimator">
            <div className="estimator__wrap">
                <div
                    ref={headRef}
                    className={`estimator__head reveal ${headVisible ? 'reveal--active' : ''}`}
                >
                    <div className="estimator__pill">
                        <Calculator size={14} />
                        TRANSPARENT SCOPING TOOL
                    </div>
                    <h2 className="estimator__title">Interactive Project Estimator</h2>
                    <p className="estimator__sub">
                        Configure your project specifications below to get a transparent investment
                        estimate and delivery schedule instantly.
                    </p>
                </div>

                <GlassCard className="estimator__card">
                    {/* Step 1 */}
                    <div>
                        <label className="estimator__label">01. Select Primary Architecture</label>
                        <div className="estimator__types">
                            {projectTypes.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    className={`type-btn ${selectedType === t.id ? 'type-btn--active' : ''}`}
                                    onClick={() => setSelectedType(t.id)}
                                >
                                    <span className="type-btn__sprint">{t.sprint}</span>
                                    <span className="type-btn__name">{t.name}</span>
                                    <span className="type-btn__desc">{t.desc}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div>
                        <label className="estimator__label">02. Select Additional Modules</label>
                        <div className="estimator__addons">
                            {addons.map((a) => (
                                <label
                                    key={a.id}
                                    className={`addon ${selectedAddons.includes(a.id) ? 'addon--checked' : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedAddons.includes(a.id)}
                                        onChange={() => toggleAddon(a.id)}
                                    />
                                    <span>{a.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Live result */}
                    <div className="estimator__result">
                        <div>
                            <span className="estimator__result-label">Estimated Investment</span>
                            <div className="estimator__price-row">
                                <span className="estimator__price">₹{total.toLocaleString('en-IN')}</span>
                                <span className="estimator__approx">(Approx. Base)</span>
                            </div>
                            <span className="estimator__timeline">
                                Estimated Sprint Duration: ~{minDays}-{maxDays} Business Days
                            </span>
                        </div>

                        <button type="button" className="btn-primary estimator__apply" onClick={handleApply}>
                            <span>Lock In Scope &amp; Discuss</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </GlassCard>
            </div>
        </section>
    )
}
