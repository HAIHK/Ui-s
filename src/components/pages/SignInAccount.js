import React from "react";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { HiUser } from "react-icons/hi";

const Container = styled.div``;

const BoxInput = styled.div`
  border-bottom: 1px solid #e1e1e1;
`;
const Input = styled.input`
  border: none;
  width: 90%;
  height: 50px;
  margin-top: 30px;
  outline: none;
  font-size: 15px;
  font-weight: bold;
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 40px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(to top, #87c7cf, #8de1af);
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
const SignInAccount = () => {
  return (
    <Container>
      <BoxInput>
        <HiUser /> <Input placeholder="Nhập tên đăng nhập ..." />
      </BoxInput>
      <BoxInput>
        <AiFillLock /> <Input placeholder="Nhập mật khẩu ..." />
      </BoxInput>
      <Button>Đăng nhập</Button>
    </Container>
  );
};

export default SignInAccount;
