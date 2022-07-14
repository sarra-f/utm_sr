import React from 'react'
import Event from '../components/event'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Opportunitie from '../components/opportunitie'
import Slider from '../components/Slider'
import { Actu } from './Actu'

export default function Landingpage() {
  return (
    <div>
        
        
        <Slider/>
        <Actu/>
        <Event/>
        <Opportunitie/>
        <Footer/>
    </div>
  )
}
