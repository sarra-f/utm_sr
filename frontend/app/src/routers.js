import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';

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
import Directeur from './pages/Directeur';
import EditUser from './components/Home/EditUser/EditUser';
import WithNav from './WithNav';
import WithoutNav from './WithoutNav';
export default function Routers() {
  return (
  <div>
    <Router>
      <ToastContainer></ToastContainer>
     
        <Routes>
        <Route element={<WithoutNav />}> 
        <Route path='/auth' element={<Auth/>}  />
        <Route path='/user/:id' element={<Home/>} />
        </Route>
        <Route element={<WithNav />}>
                <Route path="/"  element={<Landingpage/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/sr" element={<Sr/>}></Route>
                <Route path="/these" element={<These/>}></Route>
                <Route path="/pub" element={<Pub/>}></Route>
                <Route path="/partenaire" element={<Partenaire/>}></Route>
                <Route path="/projet" element={<Projet/>}></Route>
                <Route path="/pci" element={<Pci/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/chercheur" element={<Chercheur />} />
                <Route path='/directeur' element={<Directeur />} />
            </Route>
          </Routes>
      </Router>
    </div>
  )
}
