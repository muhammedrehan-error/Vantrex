import React from 'react'
import { useRef, useState, useEffect } from 'react'

export const useReveal = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        const el = ref.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(el) // ek hi baar animate karo
                }
            },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return [ref, visible]

}
