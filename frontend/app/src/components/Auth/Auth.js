import React, { useState } from 'react';
import './Auth.css';

// Images
import LoginImg from '../../assets/images/img.svg';
import RegisterImg from '../../assets/images/IMGTEST.svg'
// Compnents
import Button from '../UI/Button/Button';
import Register from './Login/Login';
import Login from './Register/Register';

const Auth = () => {
    // States
    const [showSignUp, setSignUp] = useState(false);

    const toggleSignup = () => {
        setSignUp(!showSignUp);
    };

    return (
        <div className={`containerr ${showSignUp ? 'sign-up-mode' : ''}`}>
            <div className='forms-container'>
                <div className='sigin-signup'>
                    <Register />

                    <Login />
                </div>
            </div>

            <div className='panels-container'>
                <div className='panel left-panel'>
                    <div className='content'>
                        <h3>Vous n'avez pas de compte?</h3>
                        <p></p>
                        <Button type='button' value='Créer compte' classesArr={['transparent']} id='sign-up-btn' clickHandler={toggleSignup} />
                    </div>

                    <img src={LoginImg} alt='Login' className='image' />
                </div>

                <div className='panel right-panel'>
                    <div className='content'>
                        <h3>Vous êtes déjà inscrit?</h3>
                        <p></p>
                        <Button type='button' value='Se connecter' classesArr={['transparent']} id='sign-in-btn' clickHandler={toggleSignup} />
                    </div>

                    <img src={RegisterImg} alt='Login' className='image' />
                </div>
            </div>
        </div>
    );
};

export default Auth;
