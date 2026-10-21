import { siteInfo } from '../data/siteInfo'
import './Footer.css'

const links = [
  { href: '#services', label: 'Capabilities' },
  { href: '#estimator', label: 'Scope Estimator' },
  { href: '#process', label: 'Development Protocol' },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logos">
              <img src="/logo-dragon.png" alt="Vantrex dragon logo" className="footer__dragon" />
              <img src="/logo-wordmark.png" alt="Vantrex" className="footer__wordmark" />
            </div>
            <p>
              Precision software engineering, high-converting digital interfaces, and modern
              technology mentorship.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Architecture</p>
            <ul>
              {links.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Studio Communications</p>
            <p className="footer__line">Direct: {siteInfo.phones.join(', ')}</p>
            <p className="footer__line">Inquiries: {siteInfo.email}</p>
            <p className="footer__place">{siteInfo.location}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} VANTREX. Engineered with precision.</p>
          <a href="#home">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}

