import React, { useEffect, useState, useContext } from "react";
import NavBar from "@/components/Navabr/NavBar";
import MobileNavBar from "@/components/Navabr/mobileNavBar";
import axios from "axios";
import { baseApiUrl } from "../api/hello";
import { AuthContext } from "@/components/auth/AuthContext";
import { useRouter } from "next/router";
import MathMLRenderer from "@/components/mathMLRender";

export default function QuestionHistory() {

    const [history, setHistory] = useState([]);
    const [loading, isLoading] = useState(false);

    const router = useRouter();

    const { accessToken, logout } = useContext(AuthContext);

    if (!accessToken) {
        logout();
        if (typeof window !== "undefined") {
            router.push("/auth/login");
        }
    }

    useEffect(() => {
        if (accessToken) {
            isLoading(true);
            const getHistory = async () => {
                try {
                    const res = await axios.get(`${baseApiUrl}/question-history`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                    setHistory(res.data);
                    isLoading(false);
                } catch (err) {
                    isLoading(false);
                }
            }
            getHistory();
        } else {
            router.push("/auth/login");
        };
    }, []);

    return (
        <>
            <section className=" bg-purple-700 pb-2">
                <NavBar />
                <MobileNavBar />
            </section>
            <div className="max-w-[80%] m-auto my-20">
                {loading && <i className=" text-[25px] max-w-max h-max mx-auto mt-36 text-center">Loading...</i>}
                <h1 className="text-[34px] font-medium mb-7 gradient-text-purple-blue-green">Your Learning journey.</h1>
                {history[0] ? <table className="w-[100%] text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="w-[30%]">Date</th>
                            <th className="w-[30%]">Question</th>
                            <th className="w-[40%] pb-3">Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.id} className="gap-5 border-b">
                                <td>{item.date_created}</td>
                                <td>{item.question}</td>
                                <td className="py-4"><MathMLRenderer mathML={item.answer} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : <p className=" text-[25px] max-w-max h-max mx-auto mt-36 text-center">Empty!</p>}
            </div>
        </>
    )
}