import React from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const Container = styled.div`
  padding: 0px 50px;
  margin-top: 150px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HR = styled.hr`
  width: 160px;
  height: 1px;
  border-radius: 10px;
  margin-left: 0px;
  border: none;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
`;
const TitleSpace = styled.h1`
  width: 600px;
`;

const TitleRight = styled.h3`
  margin-top: 26px;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
  cursor: pointer;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: #27e4a0;
`;

const Benefit = () => {
  return (
    <Container>
      <Title>
        <TitleSpace>
          Tại sao các nhà quảng cáo lại nên sử dụng bộ giải pháp của SMIT?
          <HR />
        </TitleSpace>
        <TitleRight>
          Tìm hiểu thêm về SMIT <FiArrowUpRight />
        </TitleRight>
      </Title>
    </Container>
  );
};

export default Benefit;
