import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// React 17
// ReactDOM.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
//   ,
//   document.getElementById("root")
// );

// React 18
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
