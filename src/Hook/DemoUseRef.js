import React, { useState, useRef } from 'react'

export default function DemoUseRef(props) {
    let userName = useRef(null);
    let password = useRef(null);
    let [userLogin, setUserLogin] = useState({ userName: "" });
    let userNameEmpty = useRef("")
    const handleLogin = () => {
        userNameEmpty.current = "abc";
        setUserLogin({
            userName: userNameEmpty.current
        })
        console.log('userName', userName.current);
        console.log('userName', userLogin.userName);

    }
    return (
        <div className='container'>
            <h1>Login</h1>
            <div className='form-group'>
                <h3>User Name</h3>
                <input ref={userName} name='userName' className='form-control'></input>
            </div>
            <div className='form-group'>
                <h3>Password</h3>
                <input ref={password} name='userName' className='form-control'></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success' onClick={() => {
                    handleLogin()
                }}>Login</button>
            </div>
        </div>
    )
}
