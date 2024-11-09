import React, { useContext } from "react";
import { LanguageCon } from "../App";

const FormInput = ({
  handleSubmit,
  isEdit,
  formValues,
  handleInputChange,
  errors,
}) => {
  const { language } = useContext(LanguageCon);

  return (
    <form>
      <h2 className="text-center mt-3 mb-3  fw-bold">
        {isEdit ? "Edit Student" : "Add Student"}
      </h2>
      <div className="mb-3">
        <label htmlFor="name">
          {language === "id" ? "Nama Siswa" : "Student Name"}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={formValues.name}
          onChange={handleInputChange}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="nim">{language === "id" ? "NIM" : "Student NIM"}</label>
        <input
          type="text"
          name="nim"
          id="nim"
          className="form-control"
          value={formValues.nim}
          onChange={handleInputChange}
        />
        {errors.nim && <div className="text-danger">{errors.nim}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="class">
          {language === "id" ? "Kelas" : "Student Class"}
        </label>
        <input
          type="text"
          name="class"
          id="class"
          className="form-control"
          value={formValues.class}
          onChange={handleInputChange}
        />
        {errors.class && <div className="text-danger">{errors.class}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="gender">
          {language === "id" ? "Jenis kelamin" : "Student Gender"}
        </label>
        <select
          className="form-select"
          name="gender"
          id="gender"
          onChange={handleInputChange}
          value={formValues.gender}
        >
          <option defaultValue="0">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <div className="text-danger">{errors.gender}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="class">
          {language === "id" ? "Tahun Masuk" : "Year Join"}
        </label>
        <input
          type="number"
          name="year"
          id="year"
          className="form-control"
          value={formValues.year}
          onChange={handleInputChange}
        />
        {errors.year && <div className="text-danger">{errors.year}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="address">
          {" "}
          {language === "id" ? "Alamat Siswa" : "Student Address"}
        </label>
        <textarea
          name="address"
          id="address"
          className="form-control"
          value={formValues.address}
          onChange={handleInputChange}
        ></textarea>
        {errors.address && <div className="text-danger">{errors.address}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="birthDate">
          {language === "id" ? "Tanggal Lahir" : "Birth Date"}
        </label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          className="form-control"
          value={formValues.birthDate}
          onChange={handleInputChange}
        />{" "}
        {errors.birthDate && (
          <div className="text-danger">{errors.birthDate}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="guardian_name">
          {language === "id" ? "Nama Orang Tua" : "Guardian Name"}
        </label>
        <input
          type="text"
          name="guardian_name"
          id="guardian_name"
          className="form-control"
          value={formValues.guardian_name}
          onChange={handleInputChange}
        />
        {errors.guardian_name && (
          <div className="text-danger">{errors.guardian_name}</div>
        )}
      </div>
      {isEdit ? (
        <button
          type="button"
          className="btn btn-warning w-100 mt-3"
          onClick={handleSubmit}
        >
          <i className="bi bi-pencil-square"></i>{" "}
          {language === "id" ? " Ubah Siswa" : " Edit Student"}
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary w-100 mt-3"
          onClick={handleSubmit}
        >
          <i className="bi bi-save2-fill"></i>
          {language === "id" ? " Tambah Siswa" : " Add Student"}
        </button>
      )}
    </form>
  );
};

export default FormInput;
