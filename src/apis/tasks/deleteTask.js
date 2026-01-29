import axiosInstance from "@/config/axios.config";

export async function deleteTask({taskId}){
    try {
        const response = await axiosInstance.delete(`/task/${taskId}`);

        console.log("Successfully deleted task : ",response);
        return response?.data?.data
    } catch (error) {
        console.log("Error while deleting the task : ",error)
        throw error;
    }
}