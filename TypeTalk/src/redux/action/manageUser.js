export const GET_USER_DATA = 'GET_USER_DATA'
export const SET_LOGIN_USER = 'SET_LOGIN_USER'
export const GET_SELECT_MBTI = 'GET_SELECT_MBTI'
export const SET_USER_MBTI = 'SET_USER_MBTI'
export const GET_RAN_USER_DATA = 'GET_RAN_USER_DATA'
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

export const getRanUserData = (id) => {
    return {
        type:GET_RAN_USER_DATA,
        id:id,
    
    }
}
export const setUserMbti = (mbti,id) => {
    console.log('==========',mbti, id)
    return{
        type:SET_USER_MBTI,
        mbti:mbti,
        id:id,
    }
}