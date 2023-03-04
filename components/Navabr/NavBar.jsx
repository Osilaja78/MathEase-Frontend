import NavLinks from "./NavLinks"
import Image from "next/image"

export default function NavBar() {

    return (
        <>
        <nav className='hidden sm:flex justify-between text-white text-lg pt-3 items-center mx-10'>
            <div className="flex items-center gap-4">
                <Image src="/images/logo.png" alt="logo" width="55" height="55" />
                <p className="text-[30px]">MATHEASE</p>
            </div>
            <NavLinks />
        </nav>
        </>
    )
}