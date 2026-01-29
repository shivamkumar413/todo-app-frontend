import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateTask } from "@/hooks/apis/task/useCreateTask"
import { useCreateTaskModalStateStore } from "@/store/createTaskModalStateStore"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const CreateTaskModal = ()=>{

    const { openCreateTaskModal,setOpenCreateTaskModal } = useCreateTaskModalStateStore()
    console.log("Open create modal at modal :",openCreateTaskModal)

    const [taskDetails,setTaskDetails] = useState({
        taskName : '',
        taskDescription : '',
    })
    const queryClient = useQueryClient()
    const { isPending,isSuccess,createTaskMutation,error } = useCreateTask()

    function handleModalOpenChange(){
        setOpenCreateTaskModal(false)
    }

    async function handleFormSubmit(e){
        // e.preventDefault();
        await createTaskMutation({
            taskName : taskDetails.taskName,
            taskDescription : taskDetails.taskDescription
        })
        queryClient.invalidateQueries('fetchtask')
        setOpenCreateTaskModal(false)
    }

    return(
        <Dialog 
            open={openCreateTaskModal}
            onOpenChange={handleModalOpenChange}
        >
            
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
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
                    />

                    <Input 
                        type={'text'}
                        placeholder='Task Description'
                        required
                        onChange={(e)=>{
                            setTaskDetails({...taskDetails,taskDescription : e.target.value})
                        }}
                    />

                    <div className="flex justify-end">
                        <Button>
                            Create
                        </Button>
                    </div>
                    
                </form>
            </DialogContent>
        </Dialog>
    )
}