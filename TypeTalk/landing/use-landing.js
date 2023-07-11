import React from "react";
export const useLanding= () => {
    const onClickSignIn = ({id,pw}) => {
        /*
            true 면 메인으로 이동
            false면 retry
        */
    }

    const onClickSignUp = () => {

    }

    return{
        onClickSignIn,
        onClickSignUp
    }
}