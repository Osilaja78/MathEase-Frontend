import React from "react";
import NavBar from "@/components/Navabr/NavBar";
import MobileNavBar from "@/components/Navabr/mobileNavBar";

export default function OurProducts() {
    return (
        <>
            <section className=" bg-purple-700 pb-2">
                <NavBar />
                <MobileNavBar />
            </section>
            <div  className=" text-[25px] w-max h-max mx-auto mt-36">
                <i>Coming Soon...</i>
            </div>
        </>
    )
}