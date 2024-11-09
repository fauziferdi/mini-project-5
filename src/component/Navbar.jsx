import React, { useContext } from "react";
import logo from "../assets/logo_siswa.png";
import { LanguageCon } from "../App";

const Navbar = () => {
  const { language, toogleLanguage } = useContext(LanguageCon);
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 fw-bold text-danger" href="/">
          <img
            src={logo}
            alt="Logo"
            width="40px"
            className="d-inline-block align-text-top me-2"
          />
          {language === "id" ? "Data Siswa" : "Students Data"}
        </a>
        <button onClick={toogleLanguage} className="btn btn-dark btn-sm">
          {language === "id" ? "indonesia" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
