import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./i18n.js";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
