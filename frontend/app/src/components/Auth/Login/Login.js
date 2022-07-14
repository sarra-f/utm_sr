import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import axios from '../../../axios';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


// Compnents
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';

import { useDispatch } from 'react-redux'; //redux
import { login } from '../../../store/actions/index'; //login action of redux

const Login = (props) => {
    //Access Redux States, actions
    const dispatch = useDispatch();

    let history = useNavigate();

    const [values, setValues] = useState({
        username: '',
        password: '',
    }); //textfields
    const [errors, setErrors] = useState({});
    const [showLoader, setShowLoader] = useState(false);

    // Text Input Change Handler
    function textInputHandler(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const loginFormHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);

        axios
            .post('/auth/login', values)
            .then(function (response) {
                setShowLoader(false);

                if (Object.keys(response.data.errors).length > 0) {
                    setErrors(response.data.errors);
                } else {
                    toast.success(' Login Successfull', { position: 'top-center' });

                    //Redux action
                    dispatch(login(response.data.user, response.data.token));

                    const userId = response.data.user.id;
                    history('/user/' + userId);
                }
            })
            .catch(function (error) {
                setShowLoader(false);
                setErrors({ ...errors, failure: error.message });
            });
    };

    return (
        <form className='sign-in-form' onSubmit={loginFormHandler}>
            <h2 className='title'>Se connecter</h2>

            {Object.keys(errors).length > 0 && (
                <div className='form__errors'>
                    <ul className='errors-ul'>
                        {Object.values(errors).map((value, i) => (
                            <li key={i}>*{value}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className='input-field'>
                <PersonIcon />
                <input type='text' name='username' placeholder='Nom utilisateur' onChange={textInputHandler} />
            </div>
            <div className='input-field'>
                <LockIcon />
                <input type='password' name='password' placeholder='Mot de passe' onChange={textInputHandler} />
            </div>

            {showLoader ? <Loader /> : <Button type='submit' value='Se connecter' classesArr={['solid']} />}

           
        </form>
    );
};

export default Login;
