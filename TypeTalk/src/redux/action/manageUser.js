export const GET_USER_DATA = 'GET_USER_DATA'
export const SET_USER_ID = 'GET_USER_ID';

export const setUserId = (userName,id) =>{
    console.log('-----')
    console.log({userName})
    console.log('-----')
    return{
        type : SET_USER_ID,
        name:userName,
        id:id
    }
}

export const getUserData = (id) => {
    
    return {
        type:GET_USER_DATA,
        id:id
    }
}
