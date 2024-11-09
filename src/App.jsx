import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Detail from "./page/Detail";
import Form from "./page/Form";

export const LanguageCon = createContext();

function App() {
  const [language, setLanguage] = useState("id");

  const toogleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <LanguageCon.Provider value={{ language, toogleLanguage }}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/siswa/:id" element={<Detail />} />
            <Route path="/add" element={<Form />} />
            <Route path="/edit/:id" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </LanguageCon.Provider>
  );
}

export default App;
