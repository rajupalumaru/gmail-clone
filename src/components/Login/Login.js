import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../firebase';
import { signin } from '../../redux/userSlice';
import './Login.css';

const Login = () => {
    const dispatch=useDispatch();

    const handleLogin=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(signin({
                displayName:user.displayName,
                photoURL:user.photoURL,
                email:user.email
            }))
        }).catch((error)=>{
            alert(error)
        })

    }
    return (
        <div className='loginWrapper'>
            <div className='login'>
                <img src='https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg' />
            
            <button className='gmail-login' onClick={handleLogin}>Login with Gmail</button>
            </div>
        </div>
    )
}

export default Login
