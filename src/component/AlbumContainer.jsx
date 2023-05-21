import React from "react";
import styled from "styled-components";

const AlbumContainer = (props) => {
    
    const MainBox = styled.div`
        display : flex;
        width : 100%;
        height : 1200px;
        padding-top : 25px;
        padding-bottom : 25px;
        background-color : #f8f9fa;
        flex-wrap: wrap;
        justify-content : center;
        align-items : center;
    `

    const AlbumBox = styled.div`
        display : flex;
        width : 27%;
        height : 360px;
        border-radius : 5px;
        flex-direction : column;
        justify-content : flex-start;
        background-color : #ffffff;
        margin-left : 15px;
        margin-right : 15px;
        border: 1px solid #dfdfdf;
    `

    const AlbumIMG = styled.img`
        border-radius : 5px 5px 0px 0px;
        width : 100%;
        height : 50%;
        background-color : #55595c;
    `

    const AlbumText = styled.p`
        height : 28%;
        width : 80%;
    `

    const ButtonBox = styled.div`
        display : flex;
        width : 80%;
        height : 30px;
        padding-left : 20px;
    `

    const AlbumButton = styled.a`
        display : flex;
        margin-top: 25px;
        border-radius : 5px;
        width : 45px;
        height : 30px;
        background-color : ${(props) => (props.abuttonColor ? props.abuttonColor : "white")};
        justify-content: center;
        align-items : center;
        border: 1px solid black;
    `

    const AButtontext = styled.p`
        padding-top : 30px;
        padding-left : 90px;
        font-size : 15px;
        color : #6c757d;
    `

    const AButtonName = styled.p`
        color : #6c757d;
    `
    
    return (
        <>
            <MainBox>
                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>
                    
                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>

                <AlbumBox>
                    <AlbumIMG></AlbumIMG>
                    <AlbumText></AlbumText>
                    <ButtonBox>
                        <AlbumButton><AButtonName>View</AButtonName></AlbumButton>
                        <AlbumButton><AButtonName>Edit</AButtonName></AlbumButton>
                        <AButtontext>9mins</AButtontext>
                    </ButtonBox>
        
                </AlbumBox>
            </MainBox>
        </>
    )
};

export default AlbumContainer;