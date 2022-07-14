import React from 'react'

const Footer = () => {
  return (
    <footer className="footer_style_2" style={{marginTop: '80px' ,height:'90px'}}>
  <div className="container-fuild">
    <div className="row">
      <div className="footer_blog">
          <div className="col-md-6">
            <div className="main-heading left_text">
              <h2>Lien utiles</h2>
            </div>
            <ul className="footer-menu">
              <li><a href="it_about.html"><i className="fa fa-angle-right"></i> A propos</a></li>
              <li><a href="it_term_condition.html"><i className="fa fa-angle-right"></i> Termes et conditions</a></li>
              <li><a href="it_privacy_policy.html"><i className="fa fa-angle-right"></i> Politique </a></li>
              <li><a href="it_contact.html"><i className="fa fa-angle-right"></i> Contact us</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
  
</footer>
  )
 }
export default Footer 
