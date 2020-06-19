import React from "react";
import Header from "../header";
import CardsBox from "../cards-box";
import MainContentContainer from "../main-content-container";
import ErrorBoundry from "../error-boundry";
import SideBox from "../sidebox/SideBox";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundry>
        <MainContentContainer>
          <SideBox />
          <ErrorBoundry>
            <CardsBox />
          </ErrorBoundry>
          <SideBox positionClass="right" />
        </MainContentContainer>
      </ErrorBoundry>

    </div>
  );
}
