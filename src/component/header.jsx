import React from "react";
import styled from "styled-components";
import { AiOutlineCamera } from "react-icons/ai"; 

const HeaderEach = styled.div`
  width: 100%;
  height: 56px;
  margin : 0px;
  background-color: #323232;
  display : flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  margin-left : 90px;
`
const HeaderText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color : white;
  font-family : -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

const Header = (props) => {
  return (
    <>
      <HeaderEach>
        <HeaderTitleContainer>
        <AiOutlineCamera color="white" size="24px"/><HeaderText><strong>{props.text}</strong></HeaderText>
        </HeaderTitleContainer>
      </HeaderEach>
    </>
  );
};

export default Header;