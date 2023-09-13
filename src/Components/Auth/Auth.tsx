import React from 'react';
import './Auth.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';

const Auth = () => {
    const [cookies, setCookie] = useCookies(['UserData']);
    const { register, handleSubmit } = useForm();

    const Submit = (data: any) => {
        window.localStorage.setItem("isLoggedin", "false")
        axios.post("http://localhost:4001/login", data).then((res) => {
            setCookie('UserData', res.data, { path: 'localhost:3000/' });
            window.location.reload();
            console.log("success");
            window.localStorage.setItem("isLoggedin", "true")
            // JWT Auth
            // axios.post("http://localhost:4001/welcome", { headers: { 'x-access-token': `${res.data.token}`, 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then((res) => {

            // }).catch(() => {
            //     console.log("Invalid JWT token");
            // });
        }).catch(() => {
            console.log("Email or Password is incorrect");
        });
    }
    return (
        <div className='Full'>
            <div className="auth">
                <form onSubmit={handleSubmit(Submit)}>
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
