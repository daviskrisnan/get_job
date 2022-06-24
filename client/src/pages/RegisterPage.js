import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../actions/userAction';

import "./style.css";
import Swal from "sweetalert2";


const RegisterPage = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const {addUserResult} = useSelector((state) => state.userReducers);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addUser({
            name: name,
            username: username,
            email: email,
            password: password
        }))
    };

    useEffect( () => {
        if (addUserResult) {
            Swal.fire(
                'Register Successfully!',
                'Click the button!',
                'success'
            )
            navigation('/');
        }
    })


    return (
        <>
            <div className='container-md'>
                <div className='col-5 bg-col-2'>
                    <h1>Create Account</h1>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='text' className='form-control' placeholder='input your name'
                        onChange={(e) => setName(e.target.value)} value={name} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='text' className='form-control' placeholder='input your username'
                        onChange={(e) => setUsername(e.target.value)} value={username} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='email' className='form-control' placeholder='email@example.com'
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='password' className='form-control' placeholder='password'
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>

                    <div className='justify-content-center input-group flex-nowrap submit-btn input-align-login'>
                        <button className='btn text-add' onClick={submitHandler}>Sign Up</button>
                    </div>

                    <div className='container text-center'>
                        <p>Already have an account ? <a href='/'>Sign In</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage