import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 50px;
  height: 340px;
  width: 1150px;
  background-image: url(https://smit.vn/images/index/install-background.png);
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 50px 50px;
  color: white;
`;

const Title = styled.h1`
  font-size: 40px;
  width: 600px;
  margin-bottom: 0px;
`;
const TitleSmall = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 600px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid;
  background-color: white;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  outline: none;
`;
const Button = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #64d5ea, #58e4c4);
  border: none;
  margin: 5px 5px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: white;
    color: #58e4c4;
    border: 1px solid;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <Title>Với hơn 30.000+ lượt cài đặt & sử dụng hàng ngày</Title>
      <TitleSmall>
        Đăng ký tài khoản và tham gia ngay để tối ưu hoá quảng cáo
      </TitleSmall>
      <Wrapper>
        <Input placeholder="Điền đỉa chỉ email của bạn ..." />
        <Button>Đăng ký tài khoản</Button>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
