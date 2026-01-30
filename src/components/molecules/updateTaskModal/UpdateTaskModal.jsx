import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useUpdateTask } from "@/hooks/apis/task/useUpdateTask"
import { useUpdateTaskModalStore } from "@/store/updateTaskModalStore"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const UpdateTaskModal = ({name,description,taskId})=>{

    const { openUpdateModal,setOpenUpdateModal } = useUpdateTaskModalStore()
    const { isPending,isSuccess,updateTaskMutation,error } = useUpdateTask()

    const [taskDetails,setTaskDetails] = useState({
        taskName : name,
        taskDescription : description,
    })
    const queryClient = useQueryClient()

    function handleModalOpenChange(){
        setOpenUpdateModal(false)
    }

    async function handleFormSubmit(){
        // e.preventDefault()
        await updateTaskMutation({
            taskName : taskDetails?.taskName,
            taskDescription : taskDetails?.taskDescription,
            taskId : taskId
        })
        queryClient.invalidateQueries('fetchtask')
        setOpenUpdateModal(false)
    }

    return(
        <Dialog
            open={openUpdateModal}
            onOpenChange={handleModalOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogDescription>Fill task details</DialogDescription>
                </DialogHeader>
                <form
                    className="space-y-3"
                    onSubmit={handleFormSubmit}
                >
                    <Input 
                        type={'text'}
                        placeholder={"Task Name"}
                        required
                        onChange={(e)=>{
                            setTaskDetails({...taskDetails,taskName : e.target.value})
                        }}
                        value={taskDetails?.taskName}
                    />

                    <Input 
                        type={'text'}
                        placeholder='Task Description'
                        required
                        onChange={(e)=>{
                            setTaskDetails({...taskDetails,taskDescription : e.target.value})
                        }}
                        value={taskDetails?.taskDescription}
                    />

                    <div className="flex justify-end">
                        <Button>
                            Update
                        </Button>
                    </div>
                    
                </form>
            </DialogContent>
        </Dialog>
    )
}