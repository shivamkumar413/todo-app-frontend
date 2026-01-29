import { signUp } from "@/apis/auth/signupApi";
import { useMutation } from "@tanstack/react-query";

export function useSignUp(){
    
    const { isPending,isSuccess,mutateAsync : signupMutation,error } = useMutation({
        mutationFn : signUp,
        onSuccess : (data)=>{
            console.log("successfully signed up : ",data)
        },
        onError : (error)=>{
            console.log("Error while signing up : ",error);
        }
    })

    return {
        isPending,
        isSuccess,
        signupMutation,
        error
    }
}