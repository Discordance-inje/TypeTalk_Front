import { useState } from "react"

export const useChat =() =>{
    const [user,setUser] =useState('')
    const onPressSelectedList = ({name}) => {
        
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