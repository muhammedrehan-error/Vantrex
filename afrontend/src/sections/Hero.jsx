import { useRef } from 'react'
import { Calculator } from 'lucide-react'
import './Hero.css'

import React from 'react'

export const Hero = () => {

  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect()
    glowRef.current.style.setProperty('--hx', `${e.clientX - rect.left}px`)
    glowRef.current.style.setProperty('--hy', `${e.clientY - rect.top}px`)
  }

  return (
    <section id="home" className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="hero__grid" />
      <div className="hero__glow-static" />
      <div className="hero__glow-cursor" ref={glowRef} />

      <div className="container hero__content">
        <div className="hero__pill">
          <span className="hero__pill-dot" />
          <span>PRECISION DIGITAL ENGINEERING</span>
        </div>

        <h1 className="hero__title">
          We engineer digital products that{' '}
          <span className="hero__accent">command attention.</span>
        </h1>

        <p className="hero__text">
          Vantrex bridges high-end UI design with production-ready software engineering.
          From high-converting web applications to bespoke cloud architectures, we build
          software designed to scale.
        </p>

        <a href="#estimator" className="btn-primary hero__cta">
          <span>Calculate Project Scope</span>
          <Calculator size={16} />
        </a>
      </div>
    </section>
  )
}
