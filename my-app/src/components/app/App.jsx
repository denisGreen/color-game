import React from "react";
import Header from "../header";
import CardsBox from "../cards-box";
import MainContentContainer from "../main-content-container";
import ErrorBoundry from "../error-boundry";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundry>
        <MainContentContainer>
          <ErrorBoundry>
            <CardsBox />
          </ErrorBoundry>
        </MainContentContainer>
      </ErrorBoundry>

    </div>
  );
}
