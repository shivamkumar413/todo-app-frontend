import { create } from "zustand";

export const useAuthStore = create((set)=>({
    auth : false,
    setAuth : (incomingValue)=>{
        set({
            auth : incomingValue
        })
    }
}))