import React, { useState, useEffect } from 'react';
// import './Nav.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux'; //redux
import { logout } from '../../store/actions/index'; //logout action of redux

const Nav = () => {
    const dispatch = useDispatch();
    let history = useNavigate();

    const [navbar, setNavbar] = useState(false);

    const changeNavBg = () => {
        if (window.scrollY >= 120) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const logoutHandler = () => {
        dispatch(logout());
        history('/auth');
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);

        return () => {
            //cleanup
            setNavbar(false);
            window.removeEventListener('scroll', changeNavBg);
        };
    }, []);

    return (
        <header className='header-area'>
            <div className='main-menu'>
                <nav className={`navbar ${navbar ? 'active' : ''}`}>
                    <div className='navbar-container max-window'>
                        <Link className='navbar-logo' to='/'>
                            Profile
                        </Link>

                        <div className='nav-items'>
                            <ul className='nav-menu'>
                                <li className='nav-item'>
                                    <a onClick={logoutHandler}>Se déconnecter</a>
                                    {/* <Link to='/auth'>Logout</Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
