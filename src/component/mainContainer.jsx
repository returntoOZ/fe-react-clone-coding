import React from "react";
import styled from "styled-components";

const MainContainer = (props) => {
    
    const MainBox = styled.div`
        display : flex;
        width : 100%;
        height : 400px;
        background-color : ${(props) => (props.boxColor ? props.boxColor : "white")};
        flex-direction : column;
        justify-content : center;
        align-items : center;
    `

    const MainTitle = styled.p`
        font-size : 40px;
        margin-top: 30px;
        margin-bottom : 10px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight : 300;
    `

    const MainContext = styled.p`
        text-align : center;
        font-size : 20px;
        font-weight : 300;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        color : gray;
        line-height : 30px;
    `

    const ButtonContainer = styled.div`
        display : flex;
        width : 400px;
        height : 70px;
        flex-direction : row;
        justify-content : center;
        background-color :  white;
    `

    const MainButton = styled.a`
        display : flex;
        margin-top: 25px;
        border-radius : 5px;
        width : 150px;
        height : 35px;
        background-color : ${(props) => (props.buttonColor ? props.buttonColor : "white")};
        justify-content: center;
        align-items : center;
        margin-left : 5px;
    `

    const ButtonName = styled.p`
        color : white;
    `
    
    return (
        <>
            <MainBox>
                <MainTitle>{props.mtitle}</MainTitle>
                <MainContext>Something short and leading about the collection below—its contents,<br></br>the creator, etc. Make it short and sweet, but not too short so folks<br></br> don’t simply skip over it entirely.</MainContext>
                <ButtonContainer>
                    <MainButton buttonColor = "#027bff"><ButtonName>Main call to action</ButtonName></MainButton>
                    <MainButton buttonColor = "gray"><ButtonName>Secondary action</ButtonName></MainButton>
                </ButtonContainer>
            </MainBox>
        </>
    )
};

export default MainContainer;