import React from "react";
export const useLanding= () => {
    const onClickSignIn = (id,pw) => {
        /*
            true 면 메인으로 이동
            false면 retry
        */

            console.log(id,pw)
            /*
            if (id.trim() === "") {
                Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
            } else if (password.trim() === "") {
                Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
            } else {
                axios.post("주소들어감", 
                    null, 
                    { params: {id: id, pwd: pw} }
                ).then(function(resp) {
                    console.log(resp.data);
                    if (resp.data !== null && resp.data != "") {
                        console.log("로그인 성공");
                    } else {
                        Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
                        setId("");
                        setPassword("");
                    }
                }).catch(function(err) {
                    console.log(`Error Message: ${err}`);
                })
            }
            */ 
    }

    const onClickSignUp = () => {

    }

    return{
        onClickSignIn,
        onClickSignUp
    }
}