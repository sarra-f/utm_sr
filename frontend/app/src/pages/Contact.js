import React from 'react'
import Contactb from '../components/contactb'
import chercheur from '../assets/images/chercheur.png'
import directeur from '../assets/images/directeur.png'
import partenaire from '../assets/images/partenaire.png'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
    <Contactb path="/chercheur" type="Chercheurs" alt="chercheur" img={chercheur}/>
    <Contactb path="/directeur" type="Directeurs" alt="directeur" img={directeur} />
    <Contactb path="/partenaire" type="Partenaires" alt="partenaire" img={partenaire}/>
    <Footer/>
    </>
  )
}
