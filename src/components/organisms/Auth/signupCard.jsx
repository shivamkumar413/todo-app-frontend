import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useSignUp } from "@/hooks/apis/useSignup"
import { AlertTriangle } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SignupCard = ()=>{

    const [signupForm,setSignupForm] = useState({
        email : '',
        password : '',
        username : '',
        confirmPassword : '',
    })
    const [validationError,setValidationError] = useState(null)
    const navigate = useNavigate()

    const {isPending,isSuccess,signupMutation,error} = useSignUp()

    async function handleSignupFormSubmit(e){
        e.preventDefault()
        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username){
            console.log("Each field is required");
            setValidationError({message : "Please fill all the fields"})
            return;
        }

        if(signupForm.password !== signupForm.confirmPassword){
            console.log("Password do not match")
            setValidationError({message : "Passwords do not match"})
            return;
        }

        setValidationError(null)

        await signupMutation({
            email : signupForm.email,
            password : signupForm.password,
            username : signupForm.username
        })

    }

    return(
        <Card className={'w-full h-full'}>

            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Signup to create new account</CardDescription>

                {
                    validationError &&
                        <div className="flex bg-gray-200 p-2 rounded-md">
                            <span className="text-red-400 mr-2"><AlertTriangle /></span>
                            <span className="text-gray-700">{validationError.message}</span>
                        </div>
                }

                {error &&
                    <div className="flex bg-gray-200 p-2 rounded-md">
                        <span className="text-red-400 mr-2"><AlertTriangle /></span>
                        <span className="text-gray-700">{error.message}</span>
                    </div>    
                }
            </CardHeader>

            <CardContent>
                <form 
                    onSubmit={handleSignupFormSubmit}
                    className="space-y-3"
                >
                    <Input 
                        type={'email'}
                        placeholder={"Email"}
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,email : e.target.value})
                        }}
                        value={signupForm.email}
                        disabled={isPending}
                    />

                    <Input 
                        type={'text'}
                        placeholder={"Username"}
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,username : e.target.value})
                        }}
                        value={signupForm.username}
                        disabled={isPending}
                    />

                    <Input 
                        type={'password'}
                        placeholder="Password"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,password : e.target.value})
                        }}
                        value={signupForm.password}
                        disabled={isPending}
                    />

                    <Input 
                        type={'password'}
                        placeholder="Confirm Password"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,confirmPassword : e.target.value})
                        }}
                        value={signupForm.confirmPassword}
                        disabled={isPending}
                    />

                    <Button
                        disabled={isPending}
                        size="lg"
                        type="submit"
                        className="w-full"
                    >
                        Create
                    </Button>
                </form>

                <Separator className='my-6'/>

                <div className="text-sm text-gray-500">
                    Already have an account ? {' '}
                    <span 
                        className="hover:underline hover:text-blue-800 cursor-pointer"
                        onClick={()=>navigate('/auth/signin')}
                        >
                            Sign in
                    </span>
                </div>

            </CardContent>
        </Card>
    )
}