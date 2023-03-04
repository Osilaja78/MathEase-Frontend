import React from "react"

export default function LoginForm() {
    return(
        <>
            <div className=" mx-6 mt-16 md:m-auto border border-gray-400 rounded-xl p-20 max-w-[550px] md:mt-16">
                <h2 className="text-[23px]">Login</h2>
                <form action="" className="flex flex-col">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" className=" border border-gray-300 rounded-md outline-none p-2"/>
                    <label htmlFor="password">Password</label>
                    <input type="pasword" name="password" className=" border border-gray-300 rounded-md outline-none p-2"/>
                    <p>Frogot Password?</p>
                    <button type="submit" className=" bg-purple-600 p-4 m-auto rounded-md mt-6 text-white">Login</button>
                </form>
            </div>
        </>
    )
}