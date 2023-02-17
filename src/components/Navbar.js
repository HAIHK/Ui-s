import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  height: 80px;
`;

const Img = styled.img`
  width: 70px;
  height: 80px;
  cursor: pointer;
`;

const Menu = styled.div`
  width: 750px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding-left: 0px;
`;

const Li = styled.li`
  padding-right: 40px;
  font-size: 15px;
  font-weight: 500;
  color: #777e90;
  cursor: pointer;
`;

const A = styled.a`
  text-decoration: none;
  color: #838383;
`;

const Button = styled.button`
  height: max-content;
  border-radius: 6px;
  border: none;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: bold;
  background: linear-gradient(to right, #64d5ea, #58e4c4);
  color: white;
  cursor: pointer;

  /* &:hover {
    background: linear-gradient(to right, #e1e1e100, #e1e1e100);
  } */
`;

const Icon = styled.div`
  padding-left: 3px;
  font-size: 18px;
`;
const Navbar = () => {
  return (
    <Container>
      <Img src="https://smit.vn/images/logo.svg" />
      <Menu>
        <Ul>
          <Li>
            <A style={{ color: "#70e3ea" }} href="">
              Trang chủ
            </A>
          </Li>
          <Li>
            <A href="" style={{ display: "flex" }}>
              Bộ giải pháp
              <Icon>
                <IoIosArrowDown />
              </Icon>
            </A>
          </Li>
          <Li>
            <A href="">Về chúng tôi</A>
          </Li>
          <Li>
            <A href="">Hướng dẫn</A>
          </Li>
          <Li>
            <A href="">Hỗ trợ</A>
          </Li>
        </Ul>
      </Menu>
      {/* <Link to="signin" style={{ textDecoration: "none" }}> */}
      <Button>
        {/* <A href="/signin" style={{ color: "White" }}> */}
        Đăng nhập
        {/* </A> */}
      </Button>
      {/* </Link> */}
    </Container>
  );
};

export default Navbar;
