import React from 'react'
import Banner from '../components/Banner'
import Counter from '../components/counter'
import Presentation from '../components/presentation'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Banner title="A propos" />
      
      <Counter />
      <Presentation />
      <Footer />
    </div>
  )
}
