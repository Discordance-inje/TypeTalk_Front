import { GET_LAST_MESSAGE,LOAD_CHAT,SUBMIT_MESSAGE } from "../action/manageChat"

export const initialState =
    [
        {
            userId:'',
            users:{
                email:'',
                name:'',
                userId:''       
            },
            messeges: [
              {
                createdAt: new Date(),
                text:"",
                name:"",
              }
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
        case LOAD_CHAT:
            //userId UserId가져와서 해당 유저와의 데이터 전달
            const findUser = state.find(item => item.userId === action.id);
            return{
                findUser
            }
       
    }
    return{
        ...state //수정된 배열 리턴
    }


}