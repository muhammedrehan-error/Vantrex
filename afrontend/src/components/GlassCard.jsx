import { useReveal } from '../hooks/useReveal'

import React from 'react'

export const GlassCard = ({ children, className = '' }) => {
    const [ref, visible] = useReveal()

    const handleMouseMove = (e) => {
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={`glass-card reveal ${visible ? 'reveal--active' : ''} ${className}`}
        >
            {children}
        </div>
    )
}

