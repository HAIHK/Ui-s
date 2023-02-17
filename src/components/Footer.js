import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { MdFacebook } from "react-icons/md";

const Container = styled.div``;
const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70px 50px 0px 50px;
`;

const Logo = styled.img`
  width: 70px;
  height: 80px;
`;
const ItemIcon = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
`;
const IconSmall = styled.div`
  display: flex;
  align-items: center;
  width: 21px;
  height: 21px;
  background-color: #b2b6c0;
  color: white;
  font-size: 22px;
  border-radius: 3px;
  cursor: pointer;
`;

const HR = styled.hr`
  margin: 0px 50px;
  height: 1px;
  border: none;
  border-radius: 10px;
  background-color: #eaebee;
`;

const Wrapper = styled.div`
  padding: 75px 40px 00px 40px;
`;
const BoxItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
`;
const TitleSmall = styled.h4``;
const Language = styled.div`
  display: flex;
`;
const Img = styled.img``;

const BoxInfo = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  color: #7788a4;
`;
const BoxSolution = styled.div``;
const Ul = styled.ul`
  list-style: none;
  padding-left: 15px;
`;
const Li = styled.li`
  margin-bottom: 20px;
  font-size: 15px;
`;
const UL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
`;
const LI = styled.li`
  padding-left: 10px;
`;

const A = styled.a`
  text-decoration: none;
  color: #7788a4;
`;
const Info = styled.div`
  width: 500px;
`;
const Infomation = styled.div``;

const Footer = () => {
  return (
    <Container>
      <BoxLogo>
        <Logo src="https://smit.vn/images/logo.svg" />
        <ItemIcon>
          <IconSmall>
            <AiFillInstagram />
          </IconSmall>
          <IconSmall>
            <FaTiktok />
          </IconSmall>
          <IconSmall>
            <SiYoutubemusic />
          </IconSmall>
          <IconSmall>
            <MdFacebook />
          </IconSmall>
        </ItemIcon>
      </BoxLogo>
      <HR />
      <Wrapper>
        <BoxItem>
          <BoxSolution>
            <Ul>
              <Li style={{ color: "Black", fontWeight: "500" }}>
                Bộ giải pháp
              </Li>
              <Li>
                <A href="">Ads check by SMIT</A>
              </Li>
              <Li>
                <A href="">Ads Manager</A>
              </Li>
              <Li>
                <A href="">Find Facebook ID</A>
              </Li>
              <Li>
                <A href="">SMIT Cookies</A>
              </Li>
              <Li>
                <A href="">SMIT Translator</A>
              </Li>
            </Ul>
          </BoxSolution>
          <BoxSolution>
            <Ul>
              <Li style={{ color: "Black", fontWeight: "500" }}>Chính sách</Li>
              <Li>
                <A href="">Chính sách Cookie</A>
              </Li>
              <Li>
                <A href="">Chính sách bảo mật</A>
              </Li>
              <Li>
                <A href="">Điều khoản dịch vụ</A>
              </Li>
              <Li>
                <A href="">Miễn trừ trách nhiệm</A>
              </Li>
              <Li>
                <A href="">Chính sách Affiliate</A>
              </Li>
            </Ul>
          </BoxSolution>
          <BoxSolution>
            <Ul>
              <Li style={{ color: "Black", fontWeight: "500" }}>Công ty</Li>
              <Li>
                <A href="">Hợp tác Affiliate</A>
              </Li>
              <Li>
                <A href="">Liên hệ với chúng tôi</A>
              </Li>
            </Ul>
          </BoxSolution>
          <BoxSolution>
            <Ul>
              <Li style={{ color: "Black", fontWeight: "500" }}>Tài nguyên</Li>
              <Li>
                <A href="">Blogs</A>
              </Li>
              <Li>
                <A href="">Cộng đồng</A>
              </Li>
              <Li>
                <A href="">Trợ giúp</A>
              </Li>
            </Ul>
          </BoxSolution>
        </BoxItem>
      </Wrapper>
      <BoxTitle>
        <TitleSmall>© Công ty cổ phần giải pháp công nghệ SMIT</TitleSmall>
        <Language>
          <UL>
            <LI>
              <A>
                <Img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=84e3c14f-61e8-4750-b3a5-d7ae91028878" />
              </A>
            </LI>
            <LI style={{ fontWeight: "500" }}>
              <A style={{ color: "Black" }}>Tiếng việt</A>
            </LI>
            <LI>
              <A>English</A>
            </LI>
          </UL>
        </Language>
      </BoxTitle>
      <HR />
      <BoxInfo>
        <Info>
          <Ul>
            <Li>
              Số 33, Nguyễn Trãi, Tổ 2, Phường Khương Trung, Quận Thanh Xuân
              Thành phố Hà Nội, Việt Nam
            </Li>
          </Ul>
        </Info>
        <Infomation>
          <Ul>
            <Li style={{ marginBottom: "0px" }}>Email: hotro@smit.vn</Li>{" "}
            <Li>Hotline: 086 6666 216</Li>
          </Ul>
        </Infomation>
        <Infomation>
          <Ul>
            <Li style={{ marginBottom: "0px" }}>Số Giấy CNĐKDN: 0109404057</Li>
            <Li>Do Sở KHĐT TP Hà Nội Cấp Ngày 01/08/2022</Li>
          </Ul>
        </Infomation>
      </BoxInfo>
    </Container>
  );
};

export default Footer;
