import { GET_LAST_MESSAGE,SUBMIT_MESSAGE } from "../action/manageChat"

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