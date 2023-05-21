import React from "react";
import styled from "styled-components";

const FooterEach = styled.div`
  width: 100%;
  height: 200px;
  margin : 0px;
  background-color: white;
  display : flex;
  align-items: center;
  justify-content: flex-start;
`;

const FooterText = styled.p`
    padding-left : 100px;
    color : #6c757d;
    font-size: 15px;
    font-weight: 350;
    line-height: 30px;
    font-family : -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`

const Footer = (props) => {
  return (
    <>
      <FooterEach>
        <FooterText>
        Album example is © Bootstrap, but please download and customize it for yourself!<br></br>
        New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">getting started guide</a>.
        </FooterText>
      </FooterEach>
    </>
  );
};

export default Footer;