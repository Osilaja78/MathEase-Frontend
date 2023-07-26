import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (Component) => {
    const Auth = (props) => {
        const router = useRouter();
        useEffect(() => {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                router.push("/login")
            }
        }, []);
        return <Component {...props} />;
    };
    return Auth;
};

export default withAuth;