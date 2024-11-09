import React, { useContext } from "react";
import { LanguageCon } from "../App";

const TableSiswa = ({ siswa, NavDetail, NavAdd, NavEdit, handleDelete }) => {
  const { language } = useContext(LanguageCon);

  return (
    <div className="container">
      <button
        className="btn btn-success btn-sm mt-3 mb-3 float-end"
        onClick={NavAdd}
      >
        {language === "id" ? "Tambah Siswa" : "Add Student"}
      </button>

      <table className="table table-success table-striped table-hover">
        <thead class="table-secondary">
          <tr>
            <th scope="col">No</th>
            <th scope="col">{language === "id" ? "Nama" : "Name"}</th>
            <th scope="col">NIM</th>
            <th scope="col">{language === "id" ? "Kelas" : "Class"}</th>
            <th scope="col">
              {language === "id" ? "jenis Kelamin" : "Gender"}
            </th>
            <th scope="col">{language === "id" ? "Aksi" : "Action"}</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((siswa, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{siswa.name}</td>
              <td>{siswa.nim}</td>
              <td>{siswa.class}</td>
              <td>{siswa.gender}</td>
              <td>
                <button
                  className="btn btn-light btn-sm me-1 mt-1"
                  onClick={() => NavDetail(siswa.id)}
                >
                  <i className="bi bi-eye-fill"></i>
                  {language === "id" ? " Lihat" : " View"}
                </button>
                <button
                  className="btn btn-light btn-sm me-1 mt-1"
                  onClick={() => NavEdit(siswa.id)}
                >
                  <i className="bi bi-pencil-square"></i>
                  {language === "id" ? " Ubah" : " Edit"}
                </button>
                <button
                  className="btn btn-light btn-sm me-1 mt-1 "
                  onClick={() => handleDelete(siswa.id)}
                >
                  <i className="bi bi-trash "></i>
                  {language === "id" ? " Hapus" : " Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSiswa;
