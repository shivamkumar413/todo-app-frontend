
import { UpdateTaskModal } from "@/components/molecules/updateTaskModal/UpdateTaskModal"
import { UserProfileModal } from "@/components/molecules/UserProfileModal/UserProfileModal"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useDeleteTask } from "@/hooks/apis/task/useDeleteTask"
import { useFetchAllTask } from "@/hooks/apis/task/useFetchAllTask"
import { useCreateTaskModalStateStore } from "@/store/createTaskModalStateStore"
import { useUpdateTaskModalStore } from "@/store/updateTaskModalStore"
import { useUserStore } from "@/store/userStore"
import { useQueryClient } from "@tanstack/react-query"
import { PenSquareIcon, PlusIcon, TrashIcon } from "lucide-react"
import { useEffect, useState } from "react"

export const Home = ()=>{

    const { isPending,isSuccess,tasksData } = useFetchAllTask()
    const [tasks,setTasks] = useState([])
    const { setOpenCreateTaskModal } = useCreateTaskModalStateStore()
    const { deleteTaskMutation } = useDeleteTask()
    const { setOpenUpdateModal } = useUpdateTaskModalStore()
    const { userDetail } = useUserStore()
    const queryClient = useQueryClient()

    useEffect(()=>{
        if(isPending) return;
        setTasks(tasksData?.tasks)
    },[isSuccess,isPending])

    function handleNewTaskButtonClick(){
        console.log("Inside handle funciton")
        setOpenCreateTaskModal(true)
    }

    async function handleTaskDelete(id){
        await deleteTaskMutation({
            taskId : id,
        })
        queryClient.invalidateQueries('fetchtask')
    }

    function handleTaskUpdateModal(){
        setOpenUpdateModal(true)
    }
    console.log("Tasks at home : ",tasksData)
    return(
        <>
            {userDetail?.role==='admin' ? 

                <div className="h-screen w-screen overflow-hidden">
                    <div className="mb-10 w-auto h-auto">
                        <UserProfileModal />
                    </div>
                    <div className="h-full w-full flex justify-center items-center text-7xl">
                        Admin Page
                    </div>
                    
                </div>

                : 

                <div className="h-screen w-screen overflow-hidden">
                <div className="mb-10 w-auto h-auto">
                    <UserProfileModal />
                </div>
                <div className="flex justify-between my-4 mx-8">
                    <div>
                        Task List
                    </div>

                    <div 
                        className="flex items-center gap-2 px-4 py-4 cursor-pointer bg-indigo-600
                        hover:bg-indigo-700 text-white rounded-md shadow-sm transition"
                        onClick={()=>handleNewTaskButtonClick()}
                    >
                        <PlusIcon />
                        <span>New</span>
                    </div>
                </div>

                {
                    tasks?.map((task)=>{
                        return(
                            <Card 
                                className={'w-2/3 mx-10 my-4'}
                                key={task?._id}
                            >
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <div>
                                            <CardTitle>
                                                {task.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {task?.description}
                                            </CardDescription>
                                        </div>
                                        

                                        <div className="flex space-x-4">
                                            
                                            <PenSquareIcon 
                                                className="cursor-pointer"
                                                onClick={()=>handleTaskUpdateModal()}
                                            />
                                            <TrashIcon 
                                                className="text-red-500 cursor-pointer" 
                                                onClick={()=>handleTaskDelete(task?._id)}
                                            />
                                        </div>
                                    </div>  
                                    <UpdateTaskModal 
                                        name={task?.name}
                                        description={task?.description}
                                        taskId={task?._id}
                                    />
                                </CardHeader>

                            </Card>
                        )
                    })
                }
                
            </div>
                
            }
            

        </>
    )
} 