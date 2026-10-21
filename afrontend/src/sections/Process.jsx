import {GlassCard} from '../components/GlassCard'
import {SectionHeader} from '../components/SectionHeader'
import './Process.css'


const stages = [
  { id: 1, title: 'Discovery & Scope Spec', accent: 'crimson', text: 'We map out technical constraints, business goals, user pathways, and lock in milestone deliverables.' },
  { id: 2, title: 'Design & Blueprinting', accent: 'crimson', text: 'Crafting high-fidelity UI wireframes and database architecture diagrams for explicit approval.' },
  { id: 3, title: 'Precision Development', accent: 'crimson', text: 'Production code authored in strict TypeScript, responsive CSS, and tested on all modern viewports.' },
  { id: 4, title: 'Launch & Monitoring', accent: 'emerald', text: 'Cloud deployment with DNS routing, SSL security, performance profiling, and direct handover training.' },
]

 export const Process = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <SectionHeader
          label="EXECUTION PROTOCOL"
          title="How We Ship: From Spec to Production"
          text="No ambiguous hand-offs or surprise delays. Every milestone is transparent."
        />

        <div className="process__grid">
          {stages.map((s) => (
            <GlassCard key={s.id} className="process-card">
              <span className={`process-card__stage process-card__stage--${s.accent}`}>
                STAGE {String(s.id).padStart(2, '0')}
              </span>
              <h3 className="process-card__title">{s.title}</h3>
              <p className="process-card__text">{s.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
