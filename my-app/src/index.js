import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"
import { Provider } from "react-redux";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';



import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import store from "./store";

const Main = () => {
  return (
    <Provider store={store}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
/* */
