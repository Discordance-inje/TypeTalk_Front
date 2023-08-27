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
            text: "당신은 뛰어난 책임감, 철저한 준비성을 갖추었으며 외부요인을 달가워하지 않는 \n든든한 코뿔소입니다! ",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ISTJ-removebg-preview.png'
        },
        {
            id: 2,
            mbti: 'ISFJ',
            text: "당신은 차분하며, 상대방에 대한 배려심이 깊은 \n헌신의 아이콘, 사슴입니다! ",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ISFJ-removebg-preview.png'
        },
        {
            id: 3,
            mbti: 'ESFJ',
            text: "사람에 관심이 많고 친절한 \n당신은 늠름한 말입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ESFJ-removebg-preview.png'
        },
        {
            id: 4,
            mbti: 'ESTJ',
            text: "당신은 규칙적이며 맡은 임무를 잘 완수해내는 \n양몰이의 대가 보더콜리입니다! ",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ESTJ-removebg-preview.png'
        },
        {
            id: 5,
            mbti: 'INFJ',
            text: "높은 높은 통찰력과 공동체를 중요시하는 \n당신은 판다입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/INFJ-removebg-preview.png'
        },
        {
            id: 6,
            mbti: 'INTJ',
            text: "의지가 강하고 언제나 혼자서 뭐든지 해내버리는 \n당신은 호랑이입니다",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/INTJ-removebg-preview.png'
        },
        {
            id: 7,
            mbti: 'ISTP',
            text: "당신은 과묵하나 어떤 일이든 거뜬히 해내는 \n다재다능한 곰입니다!",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ISTP-removebg-preview.png'
        },
        {
            id: 8,
            mbti: 'ISFP',
            text: "성실하고 개방적이나 그 속에는 강인한 신념을 지닌 \n당신은 앵무새입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ISFP-removebg-preview.png'
        },
        {
            id: 9,
            mbti: 'ENFP',
            text: "상상력이 풍부하고 갑작스런 문제들도 잘 대처하는 \n당신은 원숭이입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ENFP-removebg-preview.png'
        },
        {
            id: 10,
            mbti: 'INTP',
            text: "언제나 호기심많고 탐구적인 \n당신은 지혜의 아이콘, 부엉이입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/INTP-removebg-preview.png'
        },
        {
            id: 11,
            mbti: 'INFP',
            text: "상상력이 풍부하고 갑작스런 문제들도 잘 대처하는 \n당신은 원숭이입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/INFP-removebg-preview.png'
        },
        {
            id: 12,
            mbti: 'ENFJ',
            text: "사교적이고 타인을 잘 존중하나, 상대방이 존중해주지 않을 때 강하게 대처하는 \n당신은 친절한 강자, 코끼리입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ENFJ-removebg-preview.png'
        },
        {
            id: 13,
            mbti: 'ENTP',
            text: "똑똑하고 창의적인 \n당신은 꾀 많은 여우입니다.",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ENTP-removebg-preview.png'
        },
        {
            id: 14,
            mbti: 'ESFP',
            text: "호기심이 많고 언제나 스스로 발전해나가는 \n당신은 돌고래입니다!",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ESFP-removebg-preview.png'
        },
        {
            id: 15,
            mbti: 'ESTP',
            text: "당신은 개방적이고 타협적인 \n당신은 문제 해결사, 공작새입니다!",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ESTP-removebg-preview.png'
        },
        {
            id: 16,
            mbti: 'ENTJ',
            text: "철저한 준비, 폭넓은 활동! 그야말로 리더쉽 그 자체, \n당신은 사자입니다!",
            clicked: false,
            bgColor: 'white',
            image:'/Users/kjm/Projects/TypeTalk_Front/TypeTalk/src/image/mbtiIcon/ENTJ-removebg-preview.png'
        }
    ]
    return {
        mbtiList,
        onPressMbti,
        loadMbti
    }
}