import React from "react";
import styled from "styled-components";
import { AiOutlineQrcode } from "react-icons/ai";
import { BiMessageCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInAccount from "./SignInAccount";
import SignInQr from "./SignInQr";

const Container = styled.div`
  background-image: url(https://app.smit.vn/img/auth_wrapper.ff5fbe16.png);
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 550px;
  background: white;
  padding: 20px 40px;
  border-radius: 30px;
`;
const Title = styled.h1`
  color: #1ca64d;
`;
const TitleSmall = styled.div`
  color: #a9a9a9;
`;
const Box = styled.div`
  margin-top: 30px;
`;
const Item = styled.div`
  display: flex;
`;
const ItemQR = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  color: #c7c2c0;
  border-bottom: 1px solid #e1e1e1;
`;
const ItemTK = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1ca64d;
  color: #1ca64d;
`;

const BoxSignIn = styled.div``;

const More = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUp = styled.div`
  margin-top: 20px;
`;
const Span = styled.span``;
const A = styled.a`
  text-decoration: none;
  color: #4294ff;
`;
const Account = styled.div`
  margin-top: 10px;
`;
const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
const Img = styled.img`
  width: 50px;
  height: 21px;
  margin-left: 10px;
`;

const SignIn = () => {
  return (
    <Container>
      <BrowserRouter>
        <Wrapper>
          <Title>Đăng nhập</Title>
          <TitleSmall>Bạn cần đăng nhập để sử dụng các chức năng</TitleSmall>
          <Box>
            <Item>
              <Link to="signinqr" style={{ textDecoration: "none" }}>
                <ItemQR>
                  <AiOutlineQrcode />
                  Quét mã QR
                </ItemQR>
              </Link>
              <Link to="signinaccount" style={{ textDecoration: "none" }}>
                <ItemTK>
                  <BiMessageCheck />
                  Tài khoản SMIT
                </ItemTK>
              </Link>
            </Item>
            <BoxSignIn>
              <Routes>
                <Route path="/">
                  <Route path="signinqr" element={<SignInQr />} />
                  <Route path="signinaccount" element={<SignInAccount />} />
                </Route>
              </Routes>
            </BoxSignIn>
          </Box>
          <More>
            <SignUp>
              <Span>Chưa có tài khoản ?</Span>
              <Span style={{ marginLeft: "5px" }}>
                <A href="">Đăng ký</A>
              </Span>
            </SignUp>
            <Account>
              <A href="">Quên tên đăng nhập -</A> <A href="">Mật khẩu ?</A>
            </Account>
          </More>
          <Author>
            Powered by
            <Img src="https://app.smit.vn/img/smit-logo.d37a95df.svg" />
          </Author>
        </Wrapper>
      </BrowserRouter>
    </Container>
  );
};

export default SignIn;
