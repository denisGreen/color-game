import React from "react";
import Header from "../header";
import CardsBox from "../cards-box";
import ErrorBoundry from "../error-boundry";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundry>
        <CardsBox />
      </ErrorBoundry>
    </div>
  );
}
