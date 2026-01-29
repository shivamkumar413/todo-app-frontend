
export const Auth = ({children})=>{
    return(
        <div className="w-screen min-h-screen bg-[#0F172A] flex justify-center items-center">
            <div className="md:h-auto sm:w-105 w-full">
                {children}
            </div>
        </div>
    )
}