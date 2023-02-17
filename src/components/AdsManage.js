import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 50px;
  margin-top: 25px;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 60px 100px 0px 100px;

  &:hover {
    box-shadow: 0px 2px 10px 1px #efefef;
  }
`;
const Title = styled.h1`
  margin: 0px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivLeft = styled.div`
  width: 420px;
  padding-top: 60px;
`;

const TitleLeft = styled.h3`
  font-size: 17px;
  margin-top: 0px;
`;

const Span = styled.span`
  font-size: 14px;
  color: #b2b6c0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-left: 40%;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  background-color: #bdbdbd;
  border: none;
  font-weight: 700;
  color: white;
  margin-top: 30px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 560px;
  height: 410px;
`;
const AdsManage = () => {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Img src="https://smit.vn/images/navbar/board-ads-manager-2.png" />
          <DivLeft>
            <Title>Ads Manager</Title>
            <TitleLeft>Quản lý chiến dịch quảng cáo</TitleLeft>
            <Span>Công cụ đang trong quá trình phát triển, vui lòng đợi</Span>
            <Button>Coming Soon...</Button>
          </DivLeft>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default AdsManage;
