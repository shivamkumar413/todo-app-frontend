import { create } from "zustand";

export const useCreateTaskModalStateStore = create((set)=>({
    openCreateTaskModal : false,
    setOpenCreateTaskModal : (incomingValue)=>{
        set({
            openCreateTaskModal : incomingValue
        })
    }
}))