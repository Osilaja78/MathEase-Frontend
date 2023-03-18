import React from "react";
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function LoginForm() {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // main action for login form
    const handleSubmit = async (event) => {
        setLoading(true)
        setError('')
        event.preventDefault();

        const formData = {
            username: email,
            password: password,
        }

        try {
            const res = await axios.post('http://localhost:8000/auth/login', formData, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            setResponse(res.data);
            // localStorage.setItem('token', response.token); // store token in local storage
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
            setResponse(null)
        }
    };

    let theError, loadingAnimation, theResponse

    // if (error) {
    //     console.log(error.response)
    //     theError = <div className="text-[25px] text-gray-500 text-center">{error.response}</div>;
    // }
    if (error.response && error.response.status === 404) {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 w-max m-auto'>User with email does not exist!</div>;
    } else if (error.response && error.response.status === 401) {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 w-max m-auto'>Email or password incorrect!</div>;
    } else {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 w-max m-auto'>Something went wrong: {error.message}</div>;
    }

    // LOADING ANIMAITON *******************
    if (loading) {
        loadingAnimation = <div className=' w-max mx-auto mt-4 px-2 pb-2'>
                              <ScaleLoader
                                color={"#fdfdfd"}
                                loading={loading}
                                height={15}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                            </div>;
    }

    // RESPONSE MODAL ***********************
    if (response) {
        theResponse = <div className="text-[25px] text-red-500 text-center">{response.message}</div>;
    }
    // if (response) {
    //     if (response.message) {
    //         theResponse = <div className="text-[25px] text-gray-500 text-center">{response.message ? response.message : response.error}</div>;
    //         setTimeout(() => {
    //             router.push('/');
    //         }, 2000);
    //     } else if (response.error) {
    //         theResponse = <div className="text-[25px] text-red-500 text-center">{response.message ? response.message : response.error}</div>;
    //     }
    // }

    return(
        <>
            <div className=" mx-6 mt-10 bg-gray-100 md:m-auto border border-gray-400 rounded-xl p-10 max-w-[550px] md:mt-20">
                <div className="flex items-center gap-5 mb-4">
                    <Image src="/images/logo2.png" alt="logo" width="60" height="60" />
                    <p className="text-[25px]">MATHEASE</p>
                </div>
                {/* <h2 className="text-[23px]">Login</h2> */}
                {/* ***********************LOGIN FORM*************************** */}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {error ? theError : null}
                    <b>{response ? theResponse : null}</b>
                    {/* EMAIL INPUT */}
                    <label htmlFor="email">Email Address</label>
                    <input type="text" value={email} onChange={handleEmailChange} className=" border border-gray-300 rounded-md outline-none p-2 mb-3"/>
                    {/* PASSWORD INPUT */}
                    <label htmlFor="password">Password</label>
                    <input type="pasword" value={password} onChange={handlePasswordChange} className=" border border-gray-300 rounded-md outline-none p-2 mb-3"/>
                    <p>Frogot Password?</p>
                    <button type="submit" className=" bg-purple-600 m-auto rounded-md mt-6 text-white">{loading ? loadingAnimation : <p className=" p-4">Login</p>}</button>
                </form>
            </div>
        </>
    )
}