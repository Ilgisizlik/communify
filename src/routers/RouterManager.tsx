import { BrowserRouter } from "react-router-dom"
//types
import { Roles } from "../models/entityModels/Token"
//components
import RouterGuest from "./RouterGuest"
import RouterAdmin from "./RouterAdmin"
import RouterUser from "./RouterUser"


type RouterManagerPropType = {
    isLogin: boolean
    userRoles: Roles[]
}


export default function RouterManager({ isLogin, userRoles }: RouterManagerPropType) {
    
    const redirectByRole = () => {
        if(userRoles.includes(Roles.User.valueOf()))
            return <RouterUser />
        else if(userRoles.includes(Roles.Admin.valueOf())) 
            return <RouterAdmin />
    }

    return (
        <BrowserRouter>
            {
                !isLogin ?
                    (
                        <RouterGuest />
                    )
                    :
                    (
                        <>
                            {redirectByRole()}
                        </>
                    )
            }
        </BrowserRouter>
    )
}


