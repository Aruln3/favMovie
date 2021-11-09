import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
  rootElement
);
