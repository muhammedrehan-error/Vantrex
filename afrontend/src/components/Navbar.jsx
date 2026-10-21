import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

import React from 'react'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll) // cleanup
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
    }, [menuOpen])


    const closeMenu = () => setMenuOpen(false)


    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#home" className="navbar__brand" aria-label="Vantrex Home">
                    <img src="/logo-dragon.png" alt="Vantrex dragon logo" className="navbar__dragon" />
                    <img src="/logo-wordmark.png" alt="Vantrex" className="navbar__wordmark" />
                </a>

                <nav className="navbar__links">
                    <a href="#services">Services</a>
                    <a href="#process">Process</a>
                    <a href="#estimator" className="navbar__estimator">
                        <span className="navbar__dot" /> Estimator
                    </a>
                    <a href="#faq">FAQ</a>
                </nav>

                <a href="#contact" className="btn-primary navbar__cta">
                    Initiate Project <ArrowUpRight size={14} />
                </a>

                <button
                    className="navbar__toggle"
                    aria-label="Toggle Navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="navbar__drawer">
                    <a href="#services" onClick={closeMenu}>Capabilities</a>
                    <a href="#process" onClick={closeMenu}>How We Build</a>
                    <a href="#estimator" onClick={closeMenu} className="navbar__drawer-estimator">
                        <span className="navbar__dot" /> Project Cost Estimator
                    </a>
                    <a href="#faq" onClick={closeMenu}>Questions &amp; Answers</a>
                    <a href="#contact" onClick={closeMenu} className="btn-primary navbar__drawer-cta">
                        Initiate Project
                    </a>
                </div>
            )}
        </header>
    )

}
