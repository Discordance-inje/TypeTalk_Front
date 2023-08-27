export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export const GET_LAST_MESSAGE = 'GET_LAST_MESSAGE';

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

