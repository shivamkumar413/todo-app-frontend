import axiosInstance from "@/config/axios.config";

export const userLogout = async()=>{
    try {
        const response = await axiosInstance.post('/auth/logout');
        console.log("Successfully logout user : ",response);

        return response;
    } catch (error) {
        console.log("Error while logging out user");
        throw error;
    }
}