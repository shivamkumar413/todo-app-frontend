import { create } from "zustand";

export const useUserStore = create((set)=>({
    userDetail : null,
    setUserDetail : (incomingValue)=>{
        set({
            userDetail : incomingValue
        })
    }
}))