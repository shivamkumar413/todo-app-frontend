import axiosInstance from "@/config/axios.config";

export async function fetchAllTask(){
    try {
        const response = await axiosInstance.get('/task');

        console.log("Response at get all task : ",response);
        console.log("response : ",response?.data?.data)
        return response?.data?.data;
    } catch (error) {
        console.log("Error while fetching all task of a user");
        throw error;
    }
}