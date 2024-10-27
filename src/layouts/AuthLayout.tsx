import useTokenStore from "@/store/store";
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";
const AuthLayout = () => {
    const token = useTokenStore((state)=>state.token);
    if(token){
        return <Navigate to={'/dashboard/home'} replace />;
    }
    return (
        <>
            {
                <Outlet />
            }
        </>
    )
}

export default AuthLayout