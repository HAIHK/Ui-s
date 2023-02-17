import React from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const Container = styled.div`
  padding: 0px 50px;
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 60px 100px 0px 100px;

  &:hover {
    box-shadow: 0px 2px 10px 1px #efefef;
  }
`;
const Title = styled.h2`
  color: #858c9c;
  margin-bottom: 30px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivLeft = styled.div`
  width: 420px;
`;
const TitleLeft = styled.h1`
  margin: 0px;
`;
const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const Ul = styled.ul`
  padding-left: 20px;
`;
const Li = styled.li`
  margin-bottom: 20px;
  color: #a2a6b3;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-left: 40%;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
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
const Img = styled.img`
  width: 560px;
  height: 410px;
`;
const AdsCheck = () => {
  return (
    <Container>
      <Title>Giải pháp quản lý</Title>
      <Wrapper>
        <Main>
          <DivLeft>
            <TitleLeft>Ads check by SMIT</TitleLeft>
            <Span>TIỆN ÍCH QUẢN LÝ VÀ BẢO MẬT TÀI KHOẢN QUẢNG CÁO</Span>
            <Ul>
              <Li>Xoá quản trị viên ẩn</Li>
              <Li>Xem thông tin thanh toán</Li>
              <Li>Chia sẻ quyền TKQC</Li>
              <Li>Theo dõi thông tin TKQC</Li>
              <Li>Đổi thông tin TKQC</Li>
            </Ul>
            <Button>
              Dùng thử
              <FiArrowUpRight />
            </Button>
          </DivLeft>
          <Img src="https://smit.vn/images/navbar/board-ads-manager-2.png" />
        </Main>
      </Wrapper>
    </Container>
  );
};

export default AdsCheck;
