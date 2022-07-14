import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import Nav from '../Nav/Nav';
import ShowUser from './ShowUser/ShowUser';
import EditUser from './EditUser/EditUser';


import axios from '../../axios';

// Redux
import { useSelector } from 'react-redux'; //redux

const Home = () => {
    // Access Redux State
    const auth = useSelector((state) => state);

    let history = useNavigate();

    const [showEditUser, setShowEditUser] = useState(false);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: '',
        id: '',
        name: '',
        profilePic: '',
        username: '',
        experience:'',
        avancement:'',
        specialite:'',
        cursus:'',
       
      
    });

    const toggleUserModel = () => {
        setShowEditUser(!showEditUser);
    };

    useEffect(() => {
        // effect
        if (!auth.user) {
            //Relogin Token Expired
            toast.warning( 'Session Expirée Connectez vous ', { position: 'top-center' });
            history('/auth');
        } else {
            axios
                .post(`/user/${auth.user.id}`, { token: auth.token })
                .then(function (response) {
                    if (Object.keys(response.data.errors).length > 0) {
                        setErrors(response.data.errors);
                    } else {
                        setValues({ ...values, ...response.data.user });
                    }
                })
                .catch(function (error) {
                    setErrors({ ...errors, failure: error.message });
                });
        }
    }, [auth]);

    return (
        <>
            <Nav />

            <div className='home-banner-area'>
                <div className='spacer' >&nbsp;</div>

                {Object.keys(errors).length > 0 && (
                    <div className='form__errors'>
                        <ul className='errors-ul'>
                            {Object.values(errors).map((value, i) => (
                                <li key={i}>*{value}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* User Details Modal */}
                {showEditUser ? <EditUser user={values} clickHandler={toggleUserModel} /> : <ShowUser user={values} clickHandler={toggleUserModel} />}
            </div>

           
        </>
    );
};

export default Home;
