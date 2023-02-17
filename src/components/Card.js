import React from "react";
import styled from "styled-components";
import { HiOutlineClock } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { AiFillWallet } from "react-icons/ai";
import { BsFillShieldFill } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";

const Container = styled.div`
  padding: 20px 50px;
`;
const Item = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SmallItem = styled.div`
  width: 300px;
  height: 150px;
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
  border-radius: 10px;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 30px;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
`;
const Title = styled.h1`
  font-size: 20px;
`;
const Span = styled.span`
  color: #a6abb6;
`;

const HR = styled.hr`
  margin-top: 100px;
  height: 1px;
  border: none;
  border-radius: 10px;
  background-color: #eaebee;
`;
const Card = () => {
  return (
    <Container>
      <Item>
        <SmallItem>
          <Icon>
            <HiOutlineClock style={{ paddingLeft: "10px" }} />
          </Icon>
          <Title>Tiết kiệm thời gian</Title>
          <Span>
            Chỉ với 1 click hay thực hiện mọi thao tác cùng lúc, đó đều là lợi
            thế giúp các nhà quảng cáo tiết kiệm thời gian
          </Span>
        </SmallItem>
        <SmallItem>
          <Icon>
            <CiUser style={{ paddingLeft: "10px" }} />
          </Icon>
          <Title>Tối ưu nguồn lực</Title>
          <Span>
            Không cần quá nhiều nguồn lực để vận hành, với SMIT doanh nghiệp sẽ
            tối ưu được rất nhiều chi phí để theo dõi hiệu quả quảng cáo.
          </Span>
        </SmallItem>
        <SmallItem>
          <Icon>
            <AiOutlineLock style={{ paddingLeft: "10px" }} />
          </Icon>
          <Title>Mức độ bảo mật cao</Title>
          <Span>
            Cam kết không mua bán, trao đổi hay sử dụng vào mục đích thương mại
            với bất kỳ dữ liệu nào của người dùng.
          </Span>
        </SmallItem>
        <SmallItem>
          <Icon>
            <AiFillWallet style={{ paddingLeft: "10px" }} />
          </Icon>
          <Title>Miễn phí trải nghiệm</Title>
          <Span>
            Tất cả các sản phẩm của SMIT đều hỗ trợ trải nghiệm miễn phí một
            phần.
          </Span>
        </SmallItem>
        <SmallItem>
          <Icon>
            <BsFillShieldFill style={{ paddingLeft: "10px" }} />
          </Icon>
          <Title>Luôn luôn cập nhật</Title>
          <Span>
            Đội ngũ kỹ thuật luôn theo dõi và cập nhật kịp thời để đảm bảo trải
            nghiệm tốt nhất cho người dùng sản phẩm
          </Span>
        </SmallItem>
        <SmallItem>
          <Icon>
            <BsHeadset style={{ paddingLeft: "10px" }} />
          </Icon>
          <Title>Hỗ trợ & Tư vấn</Title>
          <Span>
            Luôn sẵn sàng và nhiệt tình là những tiêu chí ưu tiên hàng đầu của
            đội ngũ CSKH
          </Span>
        </SmallItem>
      </Item>
      <HR />
    </Container>
  );
};

export default Card;
