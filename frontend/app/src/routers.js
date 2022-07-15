import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Landingpage from './pages/Home'
import Partenaire from './pages/Partenaire'
import Pci from './pages/Pci'
import Projet from './pages/Projet'
import Pub from './pages/Pub'
import Sr from './pages/Sr'
import These from './pages/These'
import Chercheur from './pages/Chercheur';

export default function Routers() {
  return (
  <div>
    <Router>
      <ToastContainer></ToastContainer>
      <Navbar/>
        <Routes>
                <Route path="/"  element={<Landingpage/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/sr" element={<Sr/>}></Route>
                <Route path="/these" element={<These/>}></Route>
                <Route path="/pub" element={<Pub/>}></Route>
                <Route path="/partenaire" element={<Partenaire/>}></Route>
                <Route path="/projet" element={<Projet/>}></Route>
                <Route path="/pci" element={<Pci/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path='/auth' element={<Auth/>}  />
                <Route path='/user' element={<Home/>} />
                <Route path="/chercheur" element={<Chercheur />} />
          </Routes>
      </Router>
    </div>
  )
}
