import React, {useState} from "react"
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';

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

    const handleSubmit = async (event) => {
        setLoading(true)
        setResponse(null)
        event.preventDefault();

        try {
            const res = await axios.post('http://localhost:8000/user', {
                name: name,
                email: email,
                password: password,
                confirm_password: confirmPassword
            });
            setResponse(res.data);
            setTimeout(() => {
                router.push('/');
            }, 2000);
            setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        //   console.log(response)
    };

    let theError, loadingAnimation, theResponse

    if (error) {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 w-max m-auto'>Something went wrong: {error.message}</div>;
    }

    if (loading) {
        loadingAnimation = <div>Loading...</div>;
      }

    if (response) {
        theResponse = <div className="text-[25px] text-gray-500 text-center">{response.message ? response.message : response.error}</div>
    }
      

    return(
        <>
            <div className=" mx-6 mt-16 md:m-auto border border-gray-400 rounded-xl p-20 max-w-[550px] md:mt-16">
                <div className="flex items-center gap-5">
                    <Image src="/images/logo2.png" alt="logo" width="60" height="60" />
                    <p className="text-[25px]">MATHEASE</p>
                </div>
                {/* <h2 className="text-[23px]">Sign Up</h2> */}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {error ? theError : null}
                    <b>{response ? theResponse : null}</b>
                    {/* NAME INPUT */}
                    <label htmlFor="email">Name</label>
                    <input type="text" value={name} onChange={handleNameChange} className=" border border-gray-300 rounded-md outline-none p-2"/>
                    {/* EMAIL INPUT */}
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} onChange={handleEmailChange} className=" border border-gray-300 rounded-md outline-none p-2"/>
                    {/* PASSWORD INPUT */}
                    <label htmlFor="password">Password</label>
                    <input type="pasword" value={password} onChange={handlePasswordChange} className=" border border-gray-300 rounded-md outline-none p-2"/>
                    {/* CONFIRM PASSWORD INPUT */}
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="pasword" value={confirmPassword} onChange={handleConfirmPasswordChange} className=" border border-gray-300 rounded-md outline-none p-2"/>
                    {/* SUBMIT BUTTON */}
                    <button type="submit" className=" bg-purple-600 p-4 m-auto rounded-md mt-6 text-white">{loading ? loadingAnimation : <p>Sign Up</p>}</button>
                </form>
            </div>
        </>
    )
}