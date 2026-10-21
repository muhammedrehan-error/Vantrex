import {useReveal} from '../hooks/useReveal'
import './SectionHeader.css'


 export const SectionHeader = ({ label, title, text }) => {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`section-header reveal ${visible ? 'reveal--active' : ''}`}>
      <div className="section-header__label">
        <span className="section-header__dot" />
        <span>{label}</span>
      </div>
      <h2 className="section-header__title">{title}</h2>
      {text && <p className="section-header__text">{text}</p>}
    </div>
  )
}

