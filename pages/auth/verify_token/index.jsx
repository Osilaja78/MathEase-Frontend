import {React, useState} from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import { ScaleLoader } from "react-spinners";

export default function VerifyToken() {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const token = router.query;

    const verifyToken = async (e) => {
        console.log(token)
        setLoading(true)

        try {
            const res = await axios.get(`http://localhost:8000/auth/verify-token?token=${token}`);
            setResponse(res.data);
            setLoading(false)
            console.log(token)
        } catch (err) {
            setError(err);
            setLoading(false)
        }
    }
    verifyToken();

    let theError, theResponse, loadingAnimation

    if (error) {
        console.log(error.response)
        theError = <div className="text-[25px] text-gray-500 text-center">{error.response}</div>;
    }

    if (response) {
        theResponse = <div className="text-[25px] text-red-500 text-center">{response.message}</div>;
    }

    if (loading) {
        loadingAnimation = <div className=' w-max mx-auto mt-20'>
                              <ScaleLoader
                                color={"#9223d8"}
                                loading={loading}
                                size={15}
                                height={25}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                            </div>;
      }

    return (
        <>
            <section>
                {loading ? loadingAnimation : null}
                {error ? theError : null}
                <b>{response ? theResponse : null}</b>
            </section>
        </>
    )
}