import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landingpage/landingpage";
import ProjectPage from "./pages/projectpage/projectpage";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);