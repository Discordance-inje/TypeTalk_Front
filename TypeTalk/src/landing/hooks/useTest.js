import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUserMbti } from "../../redux/action/manageUser"

const answerStack= [
    {
        type:"E",
        cnt:0
    },
    {
        type:"I",
        cnt:0
    },
    {
        type:'S',
        cnt:0
    },
    {
        type:'N',
        cnt:0
    },
    {
        type:'T',
        cnt:0
    },
    {
        type:'F',
        cnt:0
    },
    {
        type:'J',
        cnt:0
    },{
        type:'P',
        cnt:0
    },

]
const mbti = []
export const useTest = () => {
    const [stack, setStack] = useState(0)
    const dispatch = useDispatch()
    const [loadBar,setLoadBar] = useState(0)
    // e i s n t f j p
    const sentenceList = [
        {
            type: 'energy',
            text: '오늘 처음봤지만 반갑게 인사를 건네는 외향적인것처럼 보이는 사람과 대화하게 되었습니다. 먼저 이야깃거리를 꺼내며즐겁게 말을 걸겠습니까?o 얘기를 들어주겠습니까?',
            answerPositive: '예',
            answerNagative: '아니오'

        },
        {
            type: 'energy',
            text: ' 많은 사람들이 모이는 파티에 초대되었습니다. 가시겠습니까?',
            answerPositive: '예',
            answerNagative: '아니오'
        },
        {
            type: 'energy',
            text: '오늘 휴일날입니다. 친구들을 모아 놀러가시겠습니까? 집에서 쉬시겠습니까?',
            answerPositive: '예',
            answerNagative: '아니오'
        },
        {
            type: 'recognition',
            text: '당신은 상상합니다.',
            answerPositive: '직장을 다니는 나의 모습',
            answerNagative: '초능력을 얻게된 나의 모습'
        },
        {
            type: 'recognition',
            text: '당신은 사과 한개를 얻었습니다. 드는 생각은?',
            answerPositive: '빨간 사과네',
            answerNagative: '저거 독사과 아니야? 백설공주처럼'
        },
        {
            type: 'recognition',
            text: '당신은 영화 한편을 봤습니다. 유명 배우들의 연기에 집중하십니까? 영화의 배경,의도를 찾습니까?',
            answerPositive: '연기에 집중한다,',
            answerNagative: '배경 의도에 집중한다.'
        },
        {
            type: 'judgment',
            text: '옆에 있는 친구가 울고 있습니다. 당신의 행동은?',
            answerPositive: '나도 같이 눈물이 날 거 같다.',
            answerNagative: '왜 울고 있는지에 관심이 갈 거 같다.'
        },
        {
            type: 'judgment',
            text: '영화나 드라마를 보며 자주 눈물이 나거나 기뻐한다.',
            answerPositive: '예',
            answerNagative: '아니오'
        },
        {
            type: 'judgment',
            text: '당신이 큰 실수를 했다. 당신의 대처는?', 
            answerPositive: '좌절한다.',
            answerNagative: '해결 방법을 모색한다.'
        },
        {
            type: 'implementation',
            text: '일이 잘못될 때를 대비해 여러 대비책을 세우는 편인가요?', 
            answerPositive: '예',
            answerNagative: '아니오'
        },
        {
            type: 'implementation',
            text: '하나의 프로젝트를 완료한 후 다른 프로젝트를 시작하는 편이다.', 
            answerPositive: '예',
            answerNagative: '아니오'
        },
        {
            type: 'implementation',
            text: '당신은 보통 휴일에 어떤것을 하나요?', 
            answerPositive: '밀린 집안일을 한다.',
            answerNagative: '일단 누워서 쉬고 본다.'
        }
    ]
    
    const onPressButton = ({ cnt,positive }) => {
        console.log('cnt',cnt)
        setLoadBar(cnt/12*100)
        
        if(cnt ==11){
            answerStack.map((item) => {
                
                if(item.cnt>1){
                    console.log(typeof(item.type))
                    mbti.push(item.type)
                    
                }    
            }
            )
            const resultMbti = mbti.join('') 
            return resultMbti;
        }
        else{
            if(positive){
                if(cnt>-1 && cnt <3){answerStack[0].cnt++;}
                else if (cnt>2 && cnt <6){answerStack[2].cnt++}
                else if (cnt>5 && cnt <9){answerStack[4].cnt++}
                else if (cnt>8 && cnt <12){answerStack[6].cnt++}
            }
            else{
                if(cnt>-1 && cnt <3){answerStack[1].cnt++;}
                else if (cnt>2 && cnt <6){answerStack[3].cnt++}
                else if (cnt>5 && cnt <9){answerStack[5].cnt++}
                else if (cnt>8 && cnt <12){answerStack[7].cnt++}
            }
            return null
        }
        
    }
    const changBarState = (cnt) => {
        console.log('cnt',cnt)
        
        console.log('loadBar',loadBar)
        return(loadBar)
    }
    const setDefault= () => {
        mbti.length = 0;
        answerStack.map((item)=>item.cnt =0)
        console.log(answerStack,mbti)
    }

    return{
        sentenceList,
        onPressButton,
        setDefault,
        loadBar,

    }
}

