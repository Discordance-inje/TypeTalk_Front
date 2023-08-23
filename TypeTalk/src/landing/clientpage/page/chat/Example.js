import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export function Example({DATA}) {
  //대화방 유저의 아이디 가져와서 해당 스태이트 우선 가져오기
  const [messages,setMessages]= useState([])
  console.log(DATA)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
    console.log(messages)
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      placeholder={"메세지를 입력해주세요"}
      
      user={{
        _id: 2,
      }}
    />
  )
}