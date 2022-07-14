import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./structure.css"







const SrList = () => {

  const [sr, setSr] = useState([]);
    const [q, setQ]= useState([])
  

  useEffect(()=>{
      Srfetch();
  },[]);
    const Srfetch= ()=>{
    axios
        .get('http://localhost:5000/sr')
        .then((res) => {
        console.log(res);
        setSr(res.data);
        setQ(res.data)
        
        })
        .catch((err) => {
        console.log(err);
        });
    
    }   
    const search = event => {
        const value = event.target.value.toLowerCase();
        const filteredSr = sr.filter(srs => (`${srs.denomination} ${srs.directeur}`.toLowerCase().includes(value)));
        setQ(filteredSr);
      }
    
    return (
        <>
        <div className='container'>
        <div className='row'>
            <div className='col-md-5'>
                <div className='side_bar_blog'>
              <div className="side_bar_search">
                  <div className="input-group stylish-input-group">
                      <input className="form-control" placeholder="Chercher par dénomination ou directeur" type="text" onInput={search}/>
                      <span className="input-group-addon">
                          <i className="fa fa-search" aria-hidden="true"></i>
                      </span>
                  </div>
              </div>
              </div>
          </div>
      </div>
      </div>
    <div id='container'>
        <div id='item-container'>
            {q.map((srs) => 
            <div id='card' key={srs._id}>
                <img id="logo" src={srs.logo} alt='' /> 
                <p><span id="code">{srs.code}</span></p>
                <Link to="#"><h3 id="deno">{srs.denomination}</h3></Link>
                <p id="pp"><i className='fa fa-map-marker' style={{color:"#980E0E"}}></i>{srs.etablissement}</p>
                <Link to="#"><p id="ppp"><i className='fa fa-user' style={{color:"#980E0E"}}></i>{srs.directeur}</p></Link>
            </div>
            )}
        </div>
    
        </div>
        
        </>   
    );
   
};
export default SrList;