import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import "./App.css";
import "./MediaQuery.css";
import "./utilities.css";
import { store } from "./store/reduxStore/store";
import App from "./App";
import ExamPortal from "./Components/StudentComponent/ExamPortal";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/Exam-Portal" element={<ExamPortal />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </Provider>
);
