// import React from "react";
// import "./Login.css";
// import img from "../../Assets/login.png";
// import logo from "../../Assets/Login Logo.png";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Fragment } from "react";
// import { loginUser } from "../../features/auth/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { BeatLoader } from "react-spinners";
// import { toast } from "react-hot-toast";
import React, { useState } from 'react';

const Login = () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password })
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.log('Form submission failed.');
      }
    } catch (error) {
      console.log('An error occurred while submitting the form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <label className="block mb-2">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </label>

      <button
        type="submit"
        className="bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;


//Old Login Page

// const Login = () => {

//     const { register, handleSubmit } = useForm();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { isLoading, token } = useSelector((state) => state.auth)

//     const onSubmit = async (data) => {
//         console.log(data);
//         try {
//             dispatch(loginUser({ username: data.username, password: data.password }));
//             toast.success('Login Success!')
//             navigate('/');
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <Fragment>

//             <div className='login-main'>
//                 <div>
//                     <img src={logo} alt="" className='w-[70%] mx-auto' />
//                 </div>
//                 <div className='hr-line-login'></div>

//                 <div className='login-page'>

//                     <img src={img} alt="" className='w-[60%]' />

//                     <div className='px-5 lg:px-20'>
//                         <form onSubmit={handleSubmit(onSubmit)}>

//                             <div className='login w-full'>
//                                 <p>User Name:</p>
//                                 <input type="text" {...register("username")} placeholder='Login Mail' />
//                             </div>

//                             <div className='login mt-[20px]'>
//                                 <p>Password:</p>
//                                 <input type="password"
//                                     {...register("password")} placeholder='*******' />
//                             </div>

//                             <div className='login-btn'>

//                             <button type='submit'>Login</button>

//                                     {/*
//                                 {
//                                     isLoading === true ? (
//                                         <>
//                                             <button><BeatLoader/></button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <button type='submit'>Login</button>
//                                         </>
//                                     )
//                                 }  */}

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </Fragment>
//     );
// };
// export default Login;
