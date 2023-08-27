import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { setUserId } from "../../redux/action/manageUser"



export const useChat =() =>{
    const dispatch = useDispatch()
    const [user,setUser] =useState('')
    
    const onPressSelectedList = ({name,id}) => {
        dispatch(setUserId(name))
        console.log(name)
        setUser(name)
    }
    const userList =
    [
        {
            user:"",
            message:[
                {
                    user:"",
                    text:"",
                }
            ]
        }
    ]
    const onPressSubmit =({user,message}) =>{

    }
return{
    onPressSelectedList,
    userList,
    onPressSubmit,
    user
}
}