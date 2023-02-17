import React from "react";
import styled from "styled-components";
import { BsStack } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
  text-align: center;
  color: white;
  margin-top: 70px;
  padding: 200px 0px;
`;

const Button = styled.div`
  width: max-content;
  padding: 7px 19px;
  margin: 5px auto;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 16px;
`;

const Title = styled.h1`
  width: 970px;
  font-size: 80px;
  margin: auto;
  margin-top: 15px;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

const BUTTON = styled.button`
  width: 270px;
  height: 60px;
  background-color: #34d1da;
  padding: 10px 13px;
  margin-top: 40px;
  border: 0.5px solid white;
  border-radius: 56px;
  cursor: pointer;

  &:hover {
    background-color: #e1e1e173;
  }
`;

const ButtonName = styled.div`
  display: flex;
  border-radius: 56px;
  padding: 8px 20px;
  background-color: white;
  color: #70e3ea;

  &:hover {
    background: linear-gradient(to right, #64d5ea, #58e4c4);
    background-color: white;
    border: 1px solid transparent;
    color: white;
  }
`;

const I = styled.div`
  margin: auto;
  padding-top: 4px;
  font-size: 15px;
  font-weight: 500;
`;

const Span = styled.span`
  margin: auto;
  font-size: 15px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <Container>
      <Button>#1 Vietnam</Button>
      <Title>Bộ giải pháp quảng cáo chuyên nghiệp</Title>
      <Desc>Tăng hiệu suốt làm việc của bản lên 60%</Desc>
      <BUTTON>
        <ButtonName>
          <I>
            <BsStack />
          </I>
          <Span>Xem toàn bộ giải pháp</Span>
        </ButtonName>
      </BUTTON>
    </Container>
  );
};

export default Header;
