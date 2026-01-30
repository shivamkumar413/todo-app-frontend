import { create } from "zustand";

export const useUpdateTaskModalStore = create((set)=>({
    openUpdateModal : false,
    setOpenUpdateModal : (incomingValue)=>{
        set({
            openUpdateModal : incomingValue
        })
    }
}))