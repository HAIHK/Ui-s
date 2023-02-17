import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 50px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 45px;
  width: 800px;
`;

const HR = styled.hr`
  width: 160px;
  height: 1px;
  border-radius: 10px;
  margin-left: 0px;
  border: none;
  background: linear-gradient(to right, #3fc9ea, #2be0ac);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SmallItem = styled.div`
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  margin-top: 20px;

  &:hover {
    box-shadow: 0px 2px 10px 1px #efefef;
  }
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-image: linear-gradient(to right, #64d5ea, #58e4c4);
  color: white;
  border-radius: 50%;
`;

const Name = styled.h2`
  margin-top: 10px;
  margin-bottom: 0px;
`;

const TitleSmall = styled.h4`
  margin-top: 0px;
`;

const Span = styled.div`
  color: #a6abb6;
  width: 270px;
  font-size: 15px;
  font-weight: 300;
`;

const Comment = () => {
  return (
    <Container>
      <Title>Các chuyên gia hàng đầu trong ngành nói gì về SMIT</Title>
      <HR />
      <Wrapper>
        <SmallItem>
          <Avatar></Avatar>
          <Name>Dương Mạnh Kiên</Name>
          <TitleSmall>PGĐ Theanh28 Entertainment</TitleSmall>
          <Span>
            Trong cộng đồng các nhà quảng cáo Facebook Ads, SMIT luôn cho chúng
            tôi thấy sự nhiệt tình và chuyên nghiệp trong từng dịch vụ hay sản
            phẩm mà SMIT đang cung cấp. Qua những điều đó, chúng tôi hiểu rằng,
            SMIT đã và đang có 1 đội ngũ nhân sự trẻ trung, nhiệt huyết và đầy
            đam mê trong lĩnh vực công nghệ phần mềm.
          </Span>
        </SmallItem>
        <SmallItem>
          <Avatar></Avatar>
          <Name>Tình Nguyễn</Name>

          <TitleSmall>Co-Founder Ladipage Việt Nam</TitleSmall>
          <Span>
            Sau thời gian trải nghiệm Ads Check by SMIT, tôi khẳng định đây là
            công cụ ưu việt được anh em Ads thủ tin tưởng tin dùng. Dù cá nhân
            hay doanh nghiệp nên lựa chọn sản phẩm bởi tính toàn diện hỗ trợ quá
            trình chạy quảng cáo hiệu quả. Anh em dễ dàng xây dựng chiến dịch
            chạy Ads thông minh hơn với các chức năng vượt trội!
          </Span>
        </SmallItem>
        <SmallItem>
          <Avatar></Avatar>
          <Name>Lưu Thiên Ân</Name>

          <TitleSmall>Founder HAS Agency</TitleSmall>
          <Span>
            Từ khi sử dụng Ads Check by SMIT, tôi nhận thấy sự hiểu quả rõ ràng
            khi kiểm tra mọi thông tin đơn giản, nhanh chóng và dễ dàng. Các tài
            khoản quảng cáo cũng được bảo vệ và đưa ra nguyên nhân vô hiệu hoá
            hiển thị hoàn toàn miễn phí.
          </Span>
        </SmallItem>
      </Wrapper>
    </Container>
  );
};

export default Comment;
