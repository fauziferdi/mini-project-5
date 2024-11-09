import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchById from "../hooks/useFetchById";
import siswa from "../assets/siswa.jpg";
import { LanguageCon } from "../App";

const Detail = () => {
  const { language } = useContext(LanguageCon);
  const { id } = useParams();
  const { data, fetchDataById, isLoading, error } = useFetchById(id);

  useEffect(() => {
    fetchDataById();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-grow text-success"
          style={{ width: "20rem", height: "20rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2>Error: {error.message}</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center mt-5">
        {language === "id" ? "Detail Siswa" : "Student Detail"}
      </h2>
      <div className="row d-flex justify-content-center align-items-center mt-5 border border-5  p-3">
        <div className="col-md-4 ">
          <img src={siswa} alt="Logo" class="img-thumbnail" />
        </div>
        <div className="col-md-8">
          <p>
            <strong>{language === "id" ? "Nama : " : "Name : "}</strong>{" "}
            {data.name} <br />
            <strong>{language === "id" ? "NIM : " : "NIM : "} </strong>{" "}
            {data.nim}
            <br />
            <strong>{language === "id" ? "Kelas : " : "Class : "} </strong>{" "}
            {data.class}
            <br />
            <strong>
              {language === "id" ? "Tahun Masuk : " : "Year In : "}{" "}
            </strong>{" "}
            {data.year}
            <br />
            <strong>
              {language === "id" ? "Nama Orang Tua :" : "Guardian Name : "}{" "}
            </strong>{" "}
            {data.guardian_name}
            <br />
            <strong>
              {language === "id" ? "Tanggal Lahir : " : "Birth Date : "}{" "}
            </strong>{" "}
            {data.birthDate}
            <br />
            <strong>
              {language === "id" ? "Alamat : " : "Address : "}{" "}
            </strong>{" "}
            {data.address}
            <br />
            <strong>
              {language === "id" ? "Jenis Kelamin : " : "Gender : "}{" "}
            </strong>{" "}
            {data.gender}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
