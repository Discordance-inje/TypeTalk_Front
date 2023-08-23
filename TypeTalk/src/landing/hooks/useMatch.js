import { useState } from "react"

export const useMatch = () => {
    const [preIndex,setPreIndex] = useState(-1)
    const onPressMbti = (id) => {
        setPreIndex(id)
        if(preIndex>0){
            mbtiList[id-1].clicked = true
            mbtiList[preIndex-1].clicked = false
        }
        else{
            mbtiList[id-1].clicked = true
        }
        loadMbti()
        console.log(mbtiList)
    }
   const loadMbti = () => {
        mbtiList.map(item => {
            if(item.clicked){
                item.bgColor = 'lightgray'
            }
            else{
                item.bgColor = 'white'
            }
        })
   }
    const mbtiList = [
        {
            id: 1,
            mbti: 'ISTJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 2,
            mbti: 'ISFJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 3,
            mbti: 'ESTJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 4,
            mbti: 'ESTJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 5,
            mbti: 'INFJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 6,
            mbti: 'INTJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 7,
            mbti: 'ENTJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 8,
            mbti: 'ISFP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 9,
            mbti: 'ENFP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 10,
            mbti: 'INTP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 11,
            mbti: 'INFP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 12,
            mbti: 'ENFJ',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 13,
            mbti: 'ENTP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 14,
            mbti: 'ESFP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 15,
            mbti: 'ESTP',
            text: "",
            clicked: false,
            bgColor: 'white'
        },
        {
            id: 16,
            mbti: 'ISTP',
            text: "",
            clicked: false,
            bgColor: 'white'
        }
    ]
    return {
        mbtiList,
        onPressMbti,
        loadMbti
    }
}