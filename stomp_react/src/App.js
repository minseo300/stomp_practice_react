import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import LoginPage from './components/page/LoginPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
            <MainTitleText>Chatting! </MainTitleText>
            <Routes>
                <Route index element={<LoginPage />} />
              
            </Routes>
        </BrowserRouter>
  );
}

export default App;
