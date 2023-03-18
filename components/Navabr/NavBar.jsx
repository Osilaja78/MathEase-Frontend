import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
        <nav className='hidden sm:flex justify-between text-white text-lg pt-3 items-center mx-10'>
            <div className="flex items-center gap-4 ml-10">
                <Image src="/images/logo.png" alt="logo" width="55" height="55" />
                <Link href="/"><p className="text-[30px]">MATHEASE</p></Link>
            </div>
            <NavLinks />
        </nav>
        </>
    )
}