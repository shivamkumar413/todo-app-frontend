import { userLogout } from "@/apis/auth/userLogout"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuthStore } from "@/store/authStore"
import { LogOutIcon, PlusIcon, Settings2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const UserProfileModal = ()=>{

    const navigate = useNavigate()

    const { setAuth } = useAuthStore()

    async function handleLogoutClick(){
        try {
            const response = await userLogout()
            navigate('/auth/signin')
            setAuth(false)
        } catch (error) {
            console.log("Error while logout")
        }
        
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src='https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'/>
                    </Avatar>
                
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <PlusIcon />
                    Add task
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Settings2Icon />
                    Settings
                </DropdownMenuItem>

                <DropdownMenuItem
                    className={'cusrsor-pointer'}
                    onClick={handleLogoutClick}
                >
                    <LogOutIcon />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}