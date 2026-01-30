import { useAuthStore } from "@/store/authStore";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children})=>{

    const { auth } = useAuthStore()

    console.log("Auth at protected route : ",auth)

    if(!auth){
        return <Navigate to='/auth/signin' />
    }

    return children;
}