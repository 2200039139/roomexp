import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');

    const loginUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response) => {
            console.log();
            if (response.data.message || loginUserName == '' || loginPassword == '') {
                navigateTo('/')
                setLoginStatus(`Invalid Login Credentials!`)
            }
            else {
                navigateTo('/dashboard')
            }
        })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage')
            setTimeout(() => {
                setStatusHolder('message')
            }, 2000);
        }
    }, [loginStatus])

    const onSubmit = () => {
        setLoginUserName('')
        setLoginPassword('')
    }

    return (
        <div className="loginPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Track Your Room Expenses Efficiently</h2>
                        <p>Manage your living costs with ease!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text ">Need to track your expenses?</span>
                        <Link to={'/register'}>
                            <button className="btn">Create Account</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome to Room Expense Manager!</h3>
                    </div>

                    <form action="" className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='username' placeholder='Enter Username'
                                    onChange={(event) => setLoginUserName(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='password' placeholder='Enter Password'
                                    onChange={(event) => setLoginPassword(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Login to Dashboard</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Forgot your password? <a href="">Reset Here</a>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login