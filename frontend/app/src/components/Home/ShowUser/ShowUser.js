import React from 'react';

import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';

import Button from '../../UI/Button/Button';

import { SERVER_URL } from '../../../axios';

const ShowUser = ({ clickHandler, user }) => {
    return (
        <div className='user-content'>
            <div className='user-details'>
                <div className='user-picture'>
                    <img src={`${SERVER_URL}/${user.profilePic}`} alt='' className='user-image' />
                </div>
                <div className='user-data'>
                    <h2>{user.name}</h2>

                    <div className='email-address'>
                        <MailIcon fontSize='large' />
                        <h3>{user.email}</h3>
                    </div>

                    <div className='email-address'>
                        <FaceIcon fontSize='large' />
                        <h3>{user.username}</h3>
                    </div>
                    <div >
                        <h3>Experience</h3>
                        <div>
                        <p>{user.experience}</p>
                        </div>
                    </div>
                    <div >
                       
                        <h3>Spécialité</h3>
                        <div>
                        <p>{user.specialite}</p>
                        </div>
                    </div>
                    <div >
                        
                        <h3>Stade d'avancement</h3>
                        
                        <p>{user.avancement}</p>
                    </div>
                    <div >
                        
                        <h3>Cursus</h3>
                        <p>{user.cursus}</p>
                    </div>
                 
                    <Button type='button' value='Edit Details' classesArr={['solid']} id='sign-up-btn' clickHandler={clickHandler} />
                </div>
            </div>
        </div>
    );
};

export default ShowUser;
