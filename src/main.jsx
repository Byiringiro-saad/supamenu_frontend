import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

//globals
import "react-toastify/dist/ReactToastify.css";

//files
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
