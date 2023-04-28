import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppInfoProvider from "./components/context/AppInfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppInfoProvider>
    <App />
  </AppInfoProvider>
);

reportWebVitals();
