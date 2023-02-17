import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width: 165px;
  height: 165px;
  box-shadow: 5px 5px 10px 5px #efefef;
  border-radius: 10px;
`;

const SignInQr = () => {
  return (
    <Container>
      <Title>Hãy quét QR trên app SMIT Login để đăng nhập nhanh</Title>
      <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKlSURBVO3BSY7kQAwEQQ9C//+yTx95SkCQqhcOzeIX1hjFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUa5eCgJ30nlJAlPqHRJ+E4qTxRrlGKNUqxRLl6m8qYk3KHSJeFNKm9KwpuKNUqxRinWKBcfloQ7VO5Iwh0qXRKeSMIdKp9UrFGKNUqxRrkYRqVLQpeETmWSYo1SrFGKNcrFMEnoVE6S0Kn8ZcUapVijFGuUiw9T+U4qXRJOVJ5Q+U2KNUqxRinWKBcvS8JvptIloVM5ScJvVqxRijVKsUa5eEjlL1M5UflLijVKsUYp1igXDyWhU+mS8CaVTqVLQqfSJaFTOUnCm1Q+qVijFGuUYo0Sv/BAEk5UuiR0Kl0SOpUnktCpdEnoVJ5IQqdykoRO5YlijVKsUYo1ysXLVLokPJGEE5UTlTuScKJyRxJOVN5UrFGKNUqxRrn4YUk4UemS0CXhDpVOpUtCp/JJSehUnijWKMUapVijXHyYykkSTpJwh8pJEk5UuiR0Kl0SOpWfVKxRijVKsUa5eEjlCZUnknCHSpeEO5LwRBJOVJ4o1ijFGqVYo8QvPJCE76RyRxLepHKShDtU3lSsUYo1SrFGuXiZypuScJKEE5WTJJyonCThNynWKMUapVijXHxYEu5QeUKlS8ITSThR6ZLQqXRJ6JLQqTxRrFGKNUqxRrn4z6jckYROpUvCSRI6lU8q1ijFGqVYo1z8Z5JwotKpnKicJOE7FWuUYo1SrFEuPkzlk1S6JJyonCShUzlJQqfyk4o1SrFGKdYoFy9LwndKwhNJ6FTepNIloVN5U7FGKdYoxRolfmGNUaxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlH+Dmf3p3bw9iwAAAABJRU5ErkJggg==" />
    </Container>
  );
};

export default SignInQr;
