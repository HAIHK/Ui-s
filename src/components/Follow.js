import React from "react";
import styled from "styled-components";
import { MdFacebook } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { RiCameraLensLine } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(https://smit.vn/images/index/follow-background.png);
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  width: 750px;
  padding: 50px 50px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 0px;
`;

const TitleSmall = styled.h3`
  width: 750px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Box = styled.div``;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;

  background: linear-gradient(to right, #3fc9e9, #29e2a7);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  border-radius: 50%;
  height: 30px;
  background-color: #39cfd7;
  color: white;
  font-size: 30px;
  margin-right: 15px;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 20px;
  color: #39cfd7;
  cursor: pointer;
`;

const ICON = styled.div`
  margin-left: auto;
  color: #39cfd9;
  font-size: 30px;
  cursor: pointer;
`;

const HR = styled.hr`
  margin-bottom: 40px;
  height: 1px;
  border: none;
  border-radius: 10px;
  background-color: #eaebee;
`;

const Follow = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Theo dõi chúng tôi</Title>
        <TitleSmall>
          Nhóm chia sẻ kinh nghiệm của cộng đồng trên Facebook, tham gia ngay
          cùng với hơn 40.000 thành viên khác
        </TitleSmall>
        <Box>
          <Item>
            <Icon>
              <MdFacebook />
            </Icon>
            <Span>Cộng đồng SMIT</Span>
            <ICON>
              <FiArrowUpRight />
            </ICON>
          </Item>
          <HR />
          <Item>
            <Icon>
              <SiYoutubemusic />
            </Icon>
            <Span>Kênh youtube chính thức</Span>
            <ICON>
              <FiArrowUpRight />
            </ICON>
          </Item>
          <HR />
          <Item>
            <Icon>
              <MdFacebook />
            </Icon>
            <Span>Fanpage chính thức</Span>
            <ICON>
              <FiArrowUpRight />
            </ICON>
          </Item>
          <HR />
          <Item>
            <Icon>
              <RiCameraLensLine />
            </Icon>
            <Span>Kênh chính thức hỗ trợ</Span>
            <ICON>
              <FiArrowUpRight />
            </ICON>
          </Item>
          <HR />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Follow;
