import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { getUserData, getUserName, } from "../../redux/action/manageUser"



export const useChat =() =>{
    const dispatch = useDispatch()
    const [user,setUser] =useState('')
    const [messages,setMessages] = useState([])
    
    const onPressSelectedList = (id) => {
        dispatch(getUserData(id))
        
        setUser(id)
    }
    
    const onPressSubmit =({user,message}) =>{

    }

    const loadChat = ( ) => {

    }

return{
    onPressSelectedList,
    onPressSubmit,
    user
}
}