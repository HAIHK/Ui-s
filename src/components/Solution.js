import React from "react";
import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
const Container = styled.div`
  padding: 50px 50px;
`;
const Title = styled.h2`
  color: #858c9c;
`;
const Wrapper = styled.div``;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SmallItem = styled.div`
  width: 300px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  margin-top: 20px;

  &:hover {
    box-shadow: 0px 2px 10px 1px #efefef;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border: 1px solid;
  background-image: linear-gradient(to right, #64d5ea, #58e4c4);
  color: white;
  border-radius: 10px;
`;
const TitleSmall = styled.h2`
  margin-top: 5px;
`;
const Span = styled.div`
  color: #a6abb6;
  height: 100px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-left: 39%;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  background-image: linear-gradient(to right, #64d5ea, #58e4c4);
  border: none;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &:hover {
    background: white;
    color: #58e4c4;
    border: 1px solid;
  }
`;

const Solution = () => {
  return (
    <Container>
      <Title>Giải pháp hỗ trợ</Title>
      <Wrapper>
        <Item>
          <SmallItem>
            <Icon>
              <BsGlobe style={{ paddingLeft: "10px" }} />
            </Icon>
            <TitleSmall>SMIT Translator</TitleSmall>
            <Span>
              Tự động dịch trực tiếp ngay trên đoạn hội thoại. Hỗ trợ đa ngôn
              ngữ và đa nền tảng: Pancake, Nobita hoặc Smax
            </Span>
            <Button>
              Dùng thử
              <FiArrowUpRight />
            </Button>
          </SmallItem>
          <SmallItem>
            <Icon>
              <IoIosColorPalette style={{ paddingLeft: "10px" }} />
            </Icon>
            <TitleSmall>SMIT Cookies</TitleSmall>
            <Span>
              Quản lý nhiều cookies trên cùng 1 trình duyệt và trên nhiều thiết
              bị thông qua tính năng đồng bộ dữ liệu qua đám mây
            </Span>
            <Button>
              Dùng thử
              <FiArrowUpRight />
            </Button>
          </SmallItem>
          <SmallItem>
            <Icon>
              <FaAddressCard style={{ paddingLeft: "10px" }} />
            </Icon>
            <TitleSmall>Find Facebook ID</TitleSmall>
            <Span>
              Công cụ tra cứu ID thông qua đường dẫn tài khoản Facebook
            </Span>
            <Button>
              Dùng thử
              <FiArrowUpRight />
            </Button>
          </SmallItem>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Solution;
