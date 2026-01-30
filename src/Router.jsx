import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/auth/Auth"
import { SignupCard } from "@/components/organisms/Auth/signupCard"
import { SigninCard } from "@/components/organisms/Auth/signinCard"
import { Home } from "./pages/Home/Home"
import { ProtectedRoute } from "./components/atoms/ProtectedRoute/ProtectedRoute"

export const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<>Home</>}/>
            <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
            <Route path='/auth/signup' element={<Auth> <SignupCard /> </Auth>}/>
            <Route path='/auth/signin' element={<Auth> <SigninCard /> </Auth>}/>
        </Routes>
    )
}