import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 50px;
`;
const Title = styled.h1`
  margin-bottom: 0px;
`;
const TitleSmall = styled.h3`
  width: 640px;
  margin-top: 0px;
  font-weight: 400;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 140px;
`;
const Item = styled.div`
  width: 200px;
  height: 90px;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 10px 1px #c3c3c3;
  }
`;
const Img = styled.img`
  margin-top: 20px;
`;
const Partner = () => {
  return (
    <Container>
      <Title>Đối tác của SMIT</Title>
      <TitleSmall>
        Trở thành một trong những đối tác của chúng tôi và nắm giữ chìa khóa đến
        một thế giới với tràn ngập cơ hội mới.
      </TitleSmall>
      <Wrapper>
        <Item>
          <Img
            style={{ marginTop: "10px" }}
            src="https://smit.vn/images/index/partner-dcg.png"
          />
        </Item>
        <Item>
          <Img
            style={{ marginTop: "25px" }}
            src="https://smit.vn/images/index/partner-smax.png"
          />
        </Item>
        <Item>
          <Img src="https://smit.vn/images/index/partner-dc3.png" />
        </Item>
        <Item>
          <Img src="https://smit.vn/images/index/partner-megad.png" />
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Partner;
