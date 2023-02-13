import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//stylesheets
import "./style/globals.css";
import "./style/home.css";
import "./style/skills.css";
import "./style/contact.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
