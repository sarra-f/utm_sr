import React from 'react'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Counter() {
  return (

    <div className="container" >
    
      <div className='row' >
          <div className='col-md-4'>
            <div className="counter"> <div><i className="fa fa-graduation-cap" style={{color:"#980E0E"}}></i></div><strong className='counter-count'style={{color:"gray"}}> <CountUp 
              start={8}
              end={25}
              duration={5}
              separator=" "
              decimal=","
              prefix="+ "
              suffix='  Doctorants'
              
              /></strong>
            </div>
          </div>

          <div className='col-md-4'>
            <div className="counter"> <div><i className="fa fa-flask" style={{color:"#980E0E"}}></i></div><strong className='counter-count'style={{color:"gray"}}> <CountUp 
              start={90} 
              end={107}
              duration={5}
              separator=" "
              decimal=","
              prefix="+ "
              suffix='  Structures de recherche' 
              /></strong>
            </div>
          </div>

          <div className='col-md-4'>
            <div className="counter"><div> <i className="fa fa-book"  style={{color:"#980E0E"}}/></div><strong className='counter-count'style={{color:"gray"}}> <CountUp 
              start={50}
              end={74}
              duration={3}
              separator=" "
              decimal=","
              prefix="+ "
              suffix='  Masters de recherche'
              /></strong>
            </div>
          </div> 

      </div>
    </div>
    
  )
}
