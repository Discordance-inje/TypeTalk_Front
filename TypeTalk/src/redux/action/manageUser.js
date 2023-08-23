export const GET_USER_DATA = 'GET_USER_DATA'
export const SET_LOGIN_USER = 'SET_LOGIN_USER'
export const GET_SELECT_MBTI = 'GET_SELECT_MBTI'

export const getUserData = (id) => {
    
    return {
        type:GET_USER_DATA,
        
        id:id,
    
    }
}


export const setLoginUser = (id) => {
    return{
        type:SET_LOGIN_USER,
        id:id
    }
}

export const getSelectMbti = (mbti) => {
    console.log('=====tt',mbti)
    return{
        type:GET_SELECT_MBTI,
        mbti:mbti
}
}