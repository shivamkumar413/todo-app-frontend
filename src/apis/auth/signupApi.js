import axiosInstance from "@/config/axios.config.js";

export const signUp = async ({email,username,password})=>{
    console.log("AT Sign up api : ",email,password,username)
    try {
        const response = await axiosInstance.post('/auth/signup',
            {
                email,
                username,
                password
            }
        )
        console.log("Response at signup user : ",response)
        return response;
    } catch (error) {
        console.log("Error while sigining up : ",error);
        throw error;
    }
}