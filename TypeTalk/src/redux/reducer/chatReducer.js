import { GET_LAST_MESSAGE, SET_USER_ID, SUBMIT_MESSAGE } from "../action/manageChat"

export const initialState =
    [
        {
            userId: "",
            messege: [
                {
                    user: "",
                    text: ""
                },
            ]
        },
    ]
export const user = {
        name:''
}
export const chatReducer = (state =initialState,action) => {
    switch(action.type){
        case SUBMIT_MESSAGE:
            return{
                ...state,
               
            }
        case GET_LAST_MESSAGE:
            return{

            }
       
    }
    return{
        ...state //수정된 배열 리턴
    }

}
export const userReducer = (state=user,action)=>{
    
    switch(action.type){
        case SET_USER_ID:{
            return{
                state:action.name
                
            }
        }
    }
    console.log(state.name,'eeeee')
    return{
        state
    }
}