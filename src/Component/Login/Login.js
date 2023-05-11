import React from 'react';
import "./Login.css";
import img from "../../Assets/login.png";
import logo from "../../Assets/Login Logo.png";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { loginUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, token } = useSelector((state) => state.auth)



    console.log(token)

    const onSubmit = async (data) => {
        console.log(data);

        try {
            dispatch(loginUser({ username: data.username, password: data.password }));

            toast.success('Login Success!')

            navigate('/');
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <Fragment>

            <div className='login-main'>
                <div>
                    <img src={logo} alt="" className='w-[70%] mx-auto' />
                </div>
                <div className='hr-line-login'></div>

                <div className='login-page'>

                    <img src={img} alt="" className='w-[60%]' />

                    <div className='px-5 lg:px-20'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='login w-full'>
                                <p>User Name:</p>
                                <input type="text" {...register("username")} placeholder='Login Mail' />
                            </div>

                            <div className='login mt-[20px]'>
                                <p>Password:</p>
                                <input type="password"
                                    {...register("password")} placeholder='*******' />
                            </div>

                            <div className='login-btn'>
                                {
                                    isLoading === true ? (
                                        <>
                                            <button><BeatLoader
                                            /></button></>
                                    ) : (
                                        <>
                                            <button type='submit'>Login</button></>
                                    )
                                }


                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Login;