import React from 'react'
import {Link} from 'react-router-dom'
export default function Contactb(props) {
  return (
    <div id='container' style={{marginTop:'7rem ', marginBottom:'3rem'}}>
    <div id='item-container'>
        <div id='card' style={{ background:'rgba(80, 77, 77, 0.02)', margin:'2rem', padding:'2rem'}}>
            <Link to={props.path}><img id="logo" src={props.img} alt={props.alt} style={{border: 'solid 1px #980E0E',borderRadius:'50%', padding:'1rem'}} /> </Link>
            <Link to={props.path}><h2 id="deno" style={{fontFamily:"poppins", textTransform:'capitalize'}}>{props.type}</h2></Link>
        </div>
    </div>

    </div>
  )
}
