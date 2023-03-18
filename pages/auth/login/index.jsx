import MobileNavBar from "@/components/Navabr/mobileNavBar";
import NavBar from "@/components/Navabr/NavBar";
import LoginForm from "@/components/auth/loginForm";


export default function login() {
    return(
        <>
            <section className=" bg-purple-700 pb-3">
                <NavBar />
                <MobileNavBar />
            </section>
            <LoginForm />
        </>
    )
}