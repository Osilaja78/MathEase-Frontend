import React, {useState} from "react"
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { baseApiUrl } from "@/pages/api/hello";

export default function RegistrationForm() {

    const [response, setResponse] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const router = useRouter();

    // main action for registration form
    const handleSubmit = async (event) => {
        setLoading(true)
        setResponse(null)
        setError('')
        event.preventDefault();

        try {
            const res = await axios.post(`${baseApiUrl}/user`, {
                name: name,
                email: email,
                password: password,
                confirm_password: confirmPassword
            });
            setResponse(res.data);
            setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
    };

    let theError, loadingAnimation, theResponse

    // chaeck status code if there is an error
    if (error.response && error.response.status === 400) {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 max-w-max m-auto'>User with email already exists!</div>;
    } else {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 max-w-max m-auto'>Something went wrong: {error.message}</div>;
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
        if (response.message) {
            theResponse = <div className="text-[25px] text-gray-500 text-center">{response.message ? response.message : response.error}</div>;
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } else if (response.error) {
            theResponse = <div className="text-[25px] text-red-500 text-center">{response.message ? response.message : response.error}</div>;
        }
    }
      

    return(
        <>
            <div className=" mx-6 mt-10 bg-gray-100 md:m-auto border border-gray-400 rounded-xl p-10 max-w-[550px] md:mt-10">
                <div className="flex items-center gap-5 mb-4">
                    <Image src="/images/logo2.png" alt="logo" width="60" height="60" />
                    <p className="text-[25px]">MATHEASE</p>
                </div>
                {/* <h2 className="text-[23px]">Sign Up</h2> */}
                {/* ***********************REGISTRATIN FORM ************************ */}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {error.message ? theError : null}
                    <b>{response ? theResponse : null}</b>
                    {/* NAME INPUT */}
                    <label htmlFor="email">Name</label>
                    <input type="text" value={name} onChange={handleNameChange} className=" border border-gray-300 rounded-md mb-2 p-2"/>
                    {/* EMAIL INPUT */}
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} onChange={handleEmailChange} className=" border border-gray-300 rounded-md mb-2 p-2"/>
                    {/* PASSWORD INPUT */}
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={handlePasswordChange} className=" border border-gray-300 rounded-md mb-2 p-2"/>
                    {/* CONFIRM PASSWORD INPUT */}
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className=" border border-gray-300 rounded-md mb-2 p-2"/>
                    {/* SUBMIT BUTTON */}
                    <button type="submit" className=" bg-purple-600 m-auto rounded-md mt-6 text-white">{loading ? loadingAnimation : <p className=" p-4">Sign Up</p>}</button>
                </form>
            </div>
        </>
    )
}