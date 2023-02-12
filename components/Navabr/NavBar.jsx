import NavLinks from "./NavLinks"
import Image from "next/image"

export default function NavBar() {

    return (
        <>
        <nav className='hidden sm:flex justify-between text-white text-lg pt-3 items-center mx-10'>
            <Image src="/images/logo.png" alt="logo" width="180" height="65" />
            <NavLinks />
        </nav>
        </>
    )
}