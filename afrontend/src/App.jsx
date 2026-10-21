import React, { useState } from 'react'
import { Hero } from './sections/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './sections/Services'
import { Estimator } from './sections/Estimator'
import { Process } from './sections/Process'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import {Footer} from './components/Footer'

export const App = () => {
  const [estimate, setEstimate] = useState(null)

  const handleApplyEstimate = (data) => {
    setEstimate(data)
    console.log('Estimate mila:', data) // abhi sirf check karne ke liye
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Estimator onApply={handleApplyEstimate} />
        <Process />
        <Faq />
        <Contact estimate={estimate} />
      </main>
      <Footer />
    </>
  )

}
