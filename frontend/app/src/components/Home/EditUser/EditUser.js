import React, { useRef, useState } from 'react';
import './EditUser.css';
import axios, { SERVER_URL } from '../../../axios';
import { toast } from 'react-toastify';

import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';

import ProfileImg from '../../../assets/images/test.jpg';
import LockIcon from '@material-ui/icons/Lock';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import FaceIcon from '@material-ui/icons/Face';
import MailIcon from '@material-ui/icons/Mail';

import { useSelector, useDispatch } from 'react-redux'; //redux
import { login } from '../../../store/actions/index'; //login action of redux
import { BookRounded } from '@material-ui/icons';

const EditUser = ({ clickHandler, user }) => {
    // Access Redux State
    const auth = useSelector((state) => state);
    const dispatch = useDispatch();

    const [currentProfilePic, setCurrentProfilePic] = useState(`${SERVER_URL}/${user.profilePic}`);
    const [values, setValues] = useState({
        name: user.name,
        email: user.email,
        password: '',
        newPassword: '',
        avancement: user.avancement,
        experience:user.experience,
        spacialite:user.specialite,
        cursus: user.cursus,
      

    }); //textfields
    const [errors, setErrors] = useState({});
    const [imageFileObj, setImageFileObj] = useState({});
    const [showLoader, setShowLoader] = useState(false);

    const inputFile = useRef(null);

    const showInputDialog = () => {
        inputFile.current.click();
    };

    const fileDialogChange = (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            // change src of profilePic
            const profilePic = files[0];

            var oFReader = new FileReader();
            oFReader.readAsDataURL(profilePic);
            oFReader.onload = function (oFREvent) {
                setCurrentProfilePic(oFREvent.target.result);
            };
            setImageFileObj(profilePic); //save as file object
        } else {
            setCurrentProfilePic(ProfileImg);
            setImageFileObj({});
        }
    };

    // Text Input Change Handler
    function textInputHandler(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const updateFormHandler = (e) => {
        e.preventDefault();
        setShowLoader(true);

        const formData = new FormData(); //Needed to post files
        formData.append('updateProfilePic', imageFileObj);
        formData.append('id', auth.user.id); //Dynamic Id from state
        formData.append('token', auth.token); //Dynamic Id from state

        Object.keys(values).forEach(function (key) {
            console.log(values)
            formData.append(key, values[key]);
            console.log(formData)
        });

        axios
            .post('/user/updateUser', formData)
            .then(function (response) {
                setShowLoader(false);

                if (Object.keys(response.data.errors).length > 0) {
                    setErrors(response.data.errors);
                } else {
                    dispatch(login(response.data.user, auth.token));
                    toast.success('Profile Updated Successfully', { position: 'top-center' });
                }
            })
            .catch(function (error) {
                setShowLoader(false);

                setErrors({ ...errors, failure: error.message });
            });
    };

    return (
        <>
            <div className='user-content'>
                <div className='user-details'>
                    <div className='user-picture edit-user'>
                        <img src={currentProfilePic} alt='' className='user-image' />
                        <div className='overlay'>
                            <Button
                                type='submit'
                                value='Change'
                                classesArr={['small', 'overlay-btn', 'transparent']}
                                clickHandler={showInputDialog}
                            />
                        </div>
                    </div>
                    <div className='user-data'>
                        <form className='update-user-form' onSubmit={updateFormHandler} encType='multipart/form-data'>
                            <input type='file' name='updateProfilePic' ref={inputFile} onChange={fileDialogChange} style={{ display: 'none' }} />

                            <h2 className='title'>Edit Details</h2>

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
                                <FaceIcon />
                                <input type='text' name='name' placeholder='Name' onChange={textInputHandler} defaultValue={user.name} />
                            </div>
                            <div className='input-field'>
                                <MailIcon />
                                <input type='email' name='email' placeholder='Email' onChange={textInputHandler} defaultValue={user.email} />
                            </div>
                            <div className='input-field'>
                                <LockIcon />
                                <input type='password' name='password' placeholder='Old Password' onChange={textInputHandler} />
                            </div>
                            <div className='input-field'>
                                <EnhancedEncryptionIcon />
                                <input type='password' name='newPassword' placeholder='New Password' onChange={textInputHandler} />
                            </div>
                            <div className='input-field'>
                                
                                <input type='text' name='specialite' placeholder='Spécialité' onChange={textInputHandler} />
                            </div>
                            <div className='input-field'>
                                
                                <input type='text' name='avancement' placeholder="Stade d'avancement" onChange={textInputHandler} />
                            </div>
                            <div className='input-field'>
                                
                                <input type='text' name='experience' placeholder='Experience' onChange={textInputHandler} />
                            </div>
                            <div className='input-field'>
                                <input type='text' name='cursus' placeholder='Cursus' onChange={textInputHandler} />                            </div>
                    
                            <div className='user-btns'>
                                {showLoader ? (
                                    <Loader />
                                ) : (
                                    <>
                                        <Button type='button' value='Back' classesArr={['solid']} clickHandler={clickHandler} />
                                        <Button type='submit' value='Update' classesArr={['solid']} />
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditUser;
