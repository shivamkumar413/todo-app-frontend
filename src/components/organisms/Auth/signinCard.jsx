import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useSignIn } from "@/hooks/apis/useSignin"
import { AlertTriangle, Loader, Loader2Icon, LoaderCircleIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const SigninCard = ()=>{

    const [signinForm,setSigninForm] = useState({
        email : '',
        password : ''
    })
    const [validationError,setValidationError] = useState(null)
    const navigate = useNavigate()

    const { isPending,isSuccess,signinMutation,error } = useSignIn()

    async function handleSigninSubmit(e){
        e.preventDefault();
        if(!signinForm.email || !signinForm.password){
            console.log("Each field is required");
            setValidationError({message : "Please fill all the fields"})
            return;
        }

        setValidationError(null)

        await signinMutation({
            email : signinForm.email,
            password : signinForm.password
        })
    }

    useEffect(()=>{
        if(isSuccess){
            setTimeout(()=>{
                navigate('/home')
            },3000)
        }
    },[isSuccess])

    return(

        <>

        {isSuccess && 

            <div className="h-full flex items-center justify-center">
                <LoaderCircleIcon className="animate-spin text-white"/>
            </div>
                    
        }

        <Card className={`${isSuccess ? 'blur' : 'null'}`}>

            <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>

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
                    className="space-y-3"
                    onSubmit={handleSigninSubmit}
                >
                    <Input 
                        type={'email'}
                        placeholder="Email"
                        required
                        onChange={(e)=>{
                            setSigninForm({...signinForm,email : e.target.value})
                        }}
                        disabled={isPending}
                        value={signinForm.email}
                    />

                    <Input 
                        type={'password'}
                        placeholder="Password"
                        required
                        onChange={(e)=>{
                            setSigninForm({...signinForm,password : e.target.value})
                        }}
                        disabled={isPending}
                        value={signinForm.password}
                    />

                    <Button
                        disabled={isPending}
                        size="lg"
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>


                </form>
                
                <Separator className='my-6'/>

                <div className="text-sm text-gray-500">
                    Don't have an account ? {' '}
                    <span 
                        className="hover:underline cursor-pointer hover:text-blue-800"
                        onClick={()=>navigate('/auth/signup')}
                        >
                            Sign up
                    </span>
                </div>
            </CardContent>
        </Card>

        
        </>
    )
}