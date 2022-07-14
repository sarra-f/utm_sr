import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    
        <header id="default_header" className="header_style_1">
        <div className="header_top">
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                <div className="full">
                    <div className="topbar-left">
                    <ul className="list-inline">
                        <li> <span className="topbar-label"><i className="fa fa-address-book-o" aria-hidden="true"></i></span> <span className="topbar-hightlight"><Link to="/contact">Contact</Link></span> </li>
                        <li> <span className="topbar-label"><i className="fa fa-envelope-o"></i></span> <span className="topbar-hightlight"><a href="mailto:utm@utm.tn">utm@utm.tn</a></span> </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-md-4 right_section_header_top">
                <div className="float-left">
                    <div className="social_icon">
                    <ul className="list-inline">
                        <li><a className="fa fa-facebook" href="https://www.facebook.com/" title="Facebook" target="_blank"></a></li>
                        <li><a className="fa fa-linkedin" href="https://www.linkedin.com" title="LinkedIn" target="_blank"></a></li>
                        <li><i className='fa fa-youtube-play'><a href="https://youtube.com" title="Youtube" target="_blank"></a></i></li>
                        <li><i className= "fa fa-map-marker"><a  href="https://maps.com/" title="Maps" target="_blank"></a></i></li>
                    </ul>
                    </div>
                </div>
                <div className="float-right">
                    <div className="make_appo"> <Link className="btn white_btn" to="/auth" >Connexion/Inscription </Link></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="header_bottom">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="logo"> <Link to="/"><img src="assets/images/logos/logo.png" alt="logo" /></Link> </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="menu_side">
                    <div id="navbar_menu">
                    <ul className="first-ul">
                        <li> <Link to="/" className="active">Accueil</Link>
                        </li>
                        <li><Link to="/about">A propos</Link></li>
                        <li> <Link to="/sr">Structures de recherche</Link>
                        </li>
                        <li> <Link to="#">Digithéque UTM</Link>
                        <ul>
                            <li><Link to="/these">Thèses et doctorats</Link></li>
                            <li><Link to="/pub">Publications scientifiques</Link></li>
                        </ul>
                        </li>
                        <li> <Link to="#">Monde économique</Link>
                        <ul>
                            <li><Link to="/partenaire">Partenaires et investisseurs</Link></li>
                            <li><Link to="/projet">Projets nationaux et internationaux</Link></li>
                        </ul>
                        </li>
                        <li> <Link to="/pci">PCI</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="search_icon">
                    <ul>
                        <li><Link to="#" data-toggle="modal" data-target="#search_bar"><i className="fa fa-search" aria-hidden="true"></i></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header> 
    </>
  )
}
