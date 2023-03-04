import MobileNavBar from "@/components/Navabr/mobileNavBar";
import NavBar from "@/components/Navabr/NavBar";
import RegistrationForm from "@/components/auth/registerForm";


export default function register() {
    return(
        <>
            <section className=" bg-purple-700 pb-4">
                <NavBar />
                <MobileNavBar />
            </section>
            <RegistrationForm />
        </>
    )
}