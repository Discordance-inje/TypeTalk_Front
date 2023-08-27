export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export const GET_LAST_MESSAGE = 'GET_LAST_MESSAGE';
export const SET_USER_ID = 'GET_USER_ID';
export const submitMessage = () => {
    return{
        type:SUBMIT_MESSAGE
    }
}
export const getLastMessage = () =>{
    return{
        type : GET_LAST_MESSAGE
    }
}
export const setUserId = (userName) =>{
    console.log('-----')
    console.log({userName})
    console.log('-----')
    return{
        type : SET_USER_ID,
        name:userName
    }
}
