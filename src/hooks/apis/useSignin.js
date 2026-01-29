import { signIn } from "@/apis/auth/singInApi";
import { useMutation } from "@tanstack/react-query";

export function useSignIn(){
    const {isPending,isSuccess,mutateAsync : signinMutation,error} = useMutation({
        mutationFn : signIn,
        onSuccess : (data)=>{
            console.log("Successfully signed in ",data)
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