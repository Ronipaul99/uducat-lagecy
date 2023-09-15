import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';

const Auth = () => {
    const [cookies, setCookie] = useCookies(['UserData']);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(false);

    const Submit = (data: any) => {
        setError(false);
        window.localStorage.setItem("isLoggedin", "false")
        axios.post("http://localhost:4001/login", data).then((res) => {
            setCookie('UserData', res.data, { path: 'localhost:3000/' });
            // JWT Auth
            axios.post("http://localhost:4001/welcome", { token: res.data.token }, { headers: { 'x-access-token': `${res.data.token}`, 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then((res) => {
                window.location.reload();
                console.log("Successfully verified");
                window.localStorage.setItem("isLoggedin", "true")
            }).catch(() => {
                console.log("Invalid JWT token");
            });
        }).catch(() => {
            console.log("Email or Password is incorrect");
            setError(true);
        });
    }
    return (
        <div className='Full'>
            <div className="auth">
                <form onSubmit={handleSubmit(Submit)}>
                    {error && <p>Please enter currect credential</p>}
                    <div className="form">
                        <input {...register("email")} placeholder='Enter email' type="email" />
                        <input {...register("password")} placeholder='Enter a password' type="password" />
                        <button className='login' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth;
