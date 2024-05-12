import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "context/AuthContext";
import reportWebVitals from "./reportWebVitals";

import ReactGA4 from "react-ga4";

// Initialize Google Analytics
const ga4react = ReactGA4.initialize("G-MHPV9691V5", {
  dataStream: {
    type: "web",
    dataStreamId: "8140131579",
  },
});

ga4react?.pageview(window.location.pathname + window.location.search);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
