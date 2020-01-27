import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />; //뒤에 있는 ? == (optional) 있을 수도, 없을 수도 있다는 뜻
};

export default App;
