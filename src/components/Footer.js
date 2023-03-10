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
                B??? gi???i ph??p
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
              <Li style={{ color: "Black", fontWeight: "500" }}>Ch??nh s??ch</Li>
              <Li>
                <A href="">Ch??nh s??ch Cookie</A>
              </Li>
              <Li>
                <A href="">Ch??nh s??ch b???o m???t</A>
              </Li>
              <Li>
                <A href="">??i???u kho???n d???ch v???</A>
              </Li>
              <Li>
                <A href="">Mi???n tr??? tr??ch nhi???m</A>
              </Li>
              <Li>
                <A href="">Ch??nh s??ch Affiliate</A>
              </Li>
            </Ul>
          </BoxSolution>
          <BoxSolution>
            <Ul>
              <Li style={{ color: "Black", fontWeight: "500" }}>C??ng ty</Li>
              <Li>
                <A href="">H???p t??c Affiliate</A>
              </Li>
              <Li>
                <A href="">Li??n h??? v???i ch??ng t??i</A>
              </Li>
            </Ul>
          </BoxSolution>
          <BoxSolution>
            <Ul>
              <Li style={{ color: "Black", fontWeight: "500" }}>T??i nguy??n</Li>
              <Li>
                <A href="">Blogs</A>
              </Li>
              <Li>
                <A href="">C???ng ?????ng</A>
              </Li>
              <Li>
                <A href="">Tr??? gi??p</A>
              </Li>
            </Ul>
          </BoxSolution>
        </BoxItem>
      </Wrapper>
      <BoxTitle>
        <TitleSmall>?? C??ng ty c??? ph???n gi???i ph??p c??ng ngh??? SMIT</TitleSmall>
        <Language>
          <UL>
            <LI>
              <A>
                <Img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=84e3c14f-61e8-4750-b3a5-d7ae91028878" />
              </A>
            </LI>
            <LI style={{ fontWeight: "500" }}>
              <A style={{ color: "Black" }}>Ti???ng vi???t</A>
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
              S??? 33, Nguy???n Tr??i, T??? 2, Ph?????ng Kh????ng Trung, Qu???n Thanh Xu??n
              Th??nh ph??? H?? N???i, Vi???t Nam
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
            <Li style={{ marginBottom: "0px" }}>S??? Gi???y CN??KDN: 0109404057</Li>
            <Li>Do S??? KH??T TP H?? N???i C???p Ng??y 01/08/2022</Li>
          </Ul>
        </Infomation>
      </BoxInfo>
    </Container>
  );
};

export default Footer;
