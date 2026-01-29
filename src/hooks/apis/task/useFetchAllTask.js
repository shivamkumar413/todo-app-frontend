import { fetchAllTask } from "@/apis/tasks/fetchAllTasks";
import { useQuery } from "@tanstack/react-query";

export function useFetchAllTask(){
    const {isPending,isSuccess,data : tasksData,error} = useQuery({
        queryFn : fetchAllTask,
        queryKey : ['fetchtask'],
        staleTime : 30000
    })

    return {
        isPending,
        isSuccess,
        tasksData,
        error
    }

}