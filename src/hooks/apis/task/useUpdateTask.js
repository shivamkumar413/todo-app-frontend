import { updateTask } from "@/apis/tasks/updateTask";
import { useMutation } from "@tanstack/react-query";

export function useUpdateTask(){
    const {isPending,isSuccess,mutateAsync : updateTaskMutation,error} = useMutation({
        mutationFn : updateTask,
        onSuccess : (data)=>{
            console.log("Successfully updated the data : ",data);
        },
        onError : (error)=>{
            console.log("Error while updating the data : ",data);
        }
    })

    return {
        isPending,
        isSuccess,
        updateTaskMutation,
        error,
    }
}