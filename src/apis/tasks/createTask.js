import axiosInstance from "@/config/axios.config";

export async function createTask({taskName,taskDescription}){
    try {
        const response = await axiosInstance.post('/task',
            {
                name : taskName,
                description : taskDescription,
            }
        )

        console.log("Response at creating new task : ",response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error while creating new task : ",error);
        throw error;
    }
}