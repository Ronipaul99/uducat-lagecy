import React from 'react'; 
import './Auth.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Auth = () => {
    const { register, handleSubmit } = useForm();

    const Submit = (data: any) => {
        console.log(data)
        window.localStorage.setItem("isLoggedin", "false")
        axios.post("http://localhost:4001/login", data).then((res) => {
            window.localStorage.setItem("isLoggedin", "true")
            window.location.reload();
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
