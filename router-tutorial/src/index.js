import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //html5의 history API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하게 해주는 BrowerRouter 컴포넌트
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
