import { Route, Routes } from "react-router-dom"
import { Auth } from "./pages/auth/Auth"

export const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<>Home</>}/>
            <Route path='/auth' element={<Auth />}/>
        </Routes>
    )
}