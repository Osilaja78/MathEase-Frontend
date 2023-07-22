import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import { ScaleLoader } from "react-spinners";
import { baseApiUrl } from "@/pages/api/hello";

export default function VerifyToken() {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const token = router.query.token;

    const verifyToken = async (e) => {

        try {
            const res = await axios.get(`${baseApiUrl}/auth/verify-token`, {
                params: {
                    token: token
                }
            });
            setResponse(res.data);
            setError('');
            setLoading(false)
        } catch (err) {
            setError(err);
            setLoading(false)
        }
    }

    React.useEffect(() => {
        setLoading(true)
        verifyToken();
    }, [router]);

    let theError, theResponse, loadingAnimation

    if (error) {
        theError = <div className="text-[25px] text-red-500 mx-auto pt-20 max-w-max">{error.response.statusText === "Unauthorized" ? "Invalid Token" : error.response.statusText}</div>;
    }

    if (response) {
        theResponse = <div className="text-[25px] text-green-500 pt-20 mx-auto max-w-max">{response.message}</div>;
    }

    if (loading) {
        loadingAnimation = <div className=' w-max mx-auto pt-20'>
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
            <section className=" bg-gray-200 h-[100vh]">
                {loading ? loadingAnimation : null}
                {error ? theError : null}
                <b>{response ? theResponse : null}</b>
            </section>
        </>
    )
}