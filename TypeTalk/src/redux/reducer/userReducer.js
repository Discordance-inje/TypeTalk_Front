import { GET_SELECT_MBTI, GET_USER_DATA, SET_LOGIN_USER} from "../action/manageUser"


export const userList =
    [
        {
            id: 1,
            pw: "1234",
            name: "원숭이",
            age: 21,
            sex: "남",
            image: "data:image/jpeg;base64,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",
            mbti: "INFP",
            message: "안녕하세요 저는  원숭이입니다.",
            logined:false,
            chat:[
                {
                    id:'',  //대화중인 상대 id
                    name:'',    //이름
                    image:'',   //프로필 이미지
                    createdAt: new Date(),//시간??
                    _id:1,
                    conversation:[
                        //대화로그
                        //id 1 사용자
                        //id 2 상대방
                        {
                            _id: 2, 
                            text:''
                        },

                    ],
                },
            ]
            
        },
        {
            id: 2,
            pw: "1234",
            name: "김정팔",
            age: 21,
            sex: "남",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNL9ACVQS-hGRcBGh5WBqnFdX7q1KwvP9KMA&usqp=CAU",
            mbti: "INFJ",
            message: "안녕하세요 저는 김정팔입니다.",
            logined:false
            
        },
        {
            id: 3,
            pw: "1234",
            name: "박두일",
            age: 21,
            sex: "남",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI07_Na8xd-gpZl84g0wbg_TM3RSkSL0tBTRtxxWusTrEJ4tGBFD6yVy3OSSuKXYTvWk&usqp=CAU",
            mbti: "INFP",
            message: "안녕하세요 저는 박두일입니다.",
            logined:false
            
        },
        

    ]



export const listReducer = (state = userList, action)=>{
    
    switch(action.type){
    case GET_USER_DATA:{
        //받아온 id와 같은 유저에 접근해서 해당 유저 데이터 수정하기
        console.log(action)
        console.log(state)
        
        
        const arr =state
        const newState = {
            ...arr,
            arr: userList.filter((item) => item.mbti == action.id)
        };
        console.log('test-========',newState.arr)
        const num = () => {
            const max = newState.arr.length 
            const min =0
            console.log('max ===',max)
            return(
                Math.floor(Math.random()*(3-1)+1)
            )
        }
        return{
            ...arr,
            arr:newState.arr[num()-1]
            
        }
    }
    case SET_LOGIN_USER:{
        const arr =state
        console.log('loging=====', action.mbti)
        return{
            ...arr,
            arr:userList.filter((item) => item.id == action.id)
        }
    }
    case GET_SELECT_MBTI:{
        const arr =state
        return {
            ...state,
            arr:userList.filter((item) => item.id === action.id)
        };
    }
}
    return {state};
}
