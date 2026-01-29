import { createTask } from "@/apis/tasks/createTask";
import { useMutation } from "@tanstack/react-query";

export function useCreateTask(){
    const {isPending,isSuccess,mutateAsync : createTaskMutation,error} = useMutation({
        mutationFn : createTask,
        onSuccess : (data)=>{
            console.log("New task created successfully : ",data);
        },
        onError : (error)=>{
            console.log("Error while creating new task : ",error);
        }
    })

    return {
        isPending,
        isSuccess,
        createTaskMutation,
        error
    }
}