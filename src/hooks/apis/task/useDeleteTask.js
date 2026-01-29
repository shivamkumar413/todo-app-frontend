import { deleteTask } from "@/apis/tasks/deleteTask";
import { useMutation } from "@tanstack/react-query";

export function useDeleteTask(){
    const {isPending,isSuccess,mutateAsync : deleteTaskMutation,error} = useMutation({
        mutationFn : deleteTask,
        onSuccess : (data)=>{
            console.log("Successfully deleted task : ",data);
        },
        onError : (error)=>{
            console.log("Error while deleting task : ",error);
        }
    })

    return {
        isPending,
        isSuccess,
        deleteTaskMutation,
        error,
    }
}