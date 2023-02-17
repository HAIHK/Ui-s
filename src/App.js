import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Benefit from "./components/Benefit";
import Card from "./components/Card";
import AdsCheck from "./components/AdsCheck";
import AdsManage from "./components/AdsManage";
import Solution from "./components/Solution";
import Comment from "./components/Comment";
import SignUp from "./components/SignUp";
import Partner from "./components/Partner";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import SignIn from "./components/pages/SignIn";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Container = styled.div`
  background-color: #f8f8f8;
`;

const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
`;

const Main = styled.div``;

function App() {
  return (
    <Container>
      {/* <BrowserRouter> */}
      <Wrapper>
        {/* <Routes>
            <Route path="/">
              <Route path="signin" element={<SignIn />} />
            </Route>
          </Routes> */}
        <Navbar />
      </Wrapper>
      <Header />
      <Main>
        <Benefit />
        <Card />
        <AdsCheck />
        <AdsManage />
        <Solution />
        <Comment />
        <SignUp />
        <Partner />
        <Follow />
        <Footer />
      </Main>
      <SignIn />
      {/* </BrowserRouter> */}
    </Container>
  );
}

export default App;
