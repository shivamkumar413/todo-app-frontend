import { signIn } from "@/apis/auth/singInApi";
import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import { useMutation } from "@tanstack/react-query";

export function useSignIn(){

    const { setAuth } = useAuthStore()
    const { setUserDetail } = useUserStore()

    const {isPending,isSuccess,mutateAsync : signinMutation,error} = useMutation({
        mutationFn : signIn,
        onSuccess : (data)=>{
            console.log("Successfully signed in ",data)
            setAuth(true)
            setUserDetail(data)
        },
        onError : (error)=>{
            console.log("Error while signing in user : ",error);
        }
    })

    return {
        isPending,
        isSuccess,
        signinMutation,
        error
    }
}