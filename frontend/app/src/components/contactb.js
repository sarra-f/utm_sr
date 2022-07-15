import React from 'react'
import {Link} from 'react-router-dom'
export default function Contactb(props) {
  return (
    <div id='container' style={{marginTop:'7rem ', marginBottom:'3rem'}}>
    <div id='item-container'>
        <div id='card'>
            <Link to={props.path}><img id="logo" src={props.img} alt={props.alt} /> </Link>
            <Link to={props.path}><h2 id="deno" style={{fontFamily:"poppins"}}>{props.type}</h2></Link>
        </div>
    </div>

    </div>
  )
}
