import { useState } from "react"
import NavLinks from "./NavLinks"
import Image from 'next/image'

export default function MobileNavBar() {

    const [openNav, setOpenNav] = useState(false)

    const hamburgerIcon = <Image className=' z-20 absolute right-6 cursor-pointer' onClick={() => setOpenNav(!openNav)} src="/images/hamburger-menu.png" alt="Menu" width="40" height="40" />
    const closeIcon = <Image className=' z-20 bg-purple-500 border-2 border-purple-600 rounded-md absolute right-6 cursor-pointer' onClick={() => setOpenNav(!openNav)} src="/images/close-icon.png" alt="Close" width="40" height="40"/>
    const navItems = <div className="absolute z-10 right-0 top-0 bg-white h-[100%] text-purple-700 p-[40px] text-center text-[18px]">
                        <br />
                        <br />
                        <NavLinks />
                    </div>

    return (
        <>
        <nav className=' flex justify-between text-white text-lg pt-3 items-center mx-10 sm:hidden'>
            <Image src="/images/logo.png" alt="logo" width="180" height="65" />
            {openNav ? closeIcon : hamburgerIcon}
            {openNav && navItems}
        </nav>
        </>
    )
}