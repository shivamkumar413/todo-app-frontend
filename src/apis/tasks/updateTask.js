import axiosInstance from "@/config/axios.config";

export async function updateTask({taskName,taskDescription,taskId}){
    try {
        const response = await axiosInstance.put(`/task/${taskId}`,
            {
                name : taskName,
                description : taskDescription
            }
        )

        console.log("Successfully updated the task : ",response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error while updating the task : ",error);
        throw error;
    }
}