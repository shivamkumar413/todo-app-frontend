import axiosInstance from "@/config/axios.config";

export const signIn = async ({email,password})=>{
    try {
        const response = await axiosInstance.post('/auth/signin',
            {
                email,
                password
            }
        )

        console.log("user signed in successfully : ",response)
        return response;
    } catch (error) {
        console.log("Error while signing in user : ",error);
        throw error;
    }
}