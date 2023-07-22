import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (Component) => {
    const Auth = (props) => {
        const router = useRouter();
        useEffect(() => {
            const token = localStorage.getItem('token')
            if (!token) {
                router.push("/login")
            }
        }, []);
        return <Component {...props} />;
    };
    return Auth;
};

export default withAuth;