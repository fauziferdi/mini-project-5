import React, { useEffect, useState } from "react";
import FormInput from "../component/FormInput";
import { useParams, useNavigate } from "react-router-dom";
import useFetchById from "../hooks/useFetchById";
import useForm from "../hooks/useForm";
import Swal from "sweetalert2";
import { addSiswa, updateSiswa } from "../utils/api";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const { data, fetchDataById, isLoading, error } = useFetchById(id);

  const [formValues, setValues, handleChange, errors, setErrors] = useForm({
    name: "",
    nim: "",
    class: "",
    gender: "",
    year: "",
    address: "",
    birthDate: "",
    guardian_name: "",
  });

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      fetchDataById(id);
    } else {
      setIsEdit(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setValues({
        name: data.name || "",
        nim: data.nim || "",
        class: data.class || "",
        gender: data.gender || "",
        year: data.year || "",
        address: data.address || "",
        birthDate: data.birthDate || "",
        guardian_name: data.guardian_name || "",
      });
    }
  }, [data]);

  const handleSubmit = () => {
    if (isEdit) {
      editStudent(formValues, id);
    } else {
      addStudent(formValues);
    }
  };

  const addStudent = (data) => {
    console.log(isEdit);
    addSiswa(data)
      .then((response) => {
        console.log("Siswa berhasil ditambahkan:", response);
        Swal.fire({
          title: "Selamat!",
          text: "Data Berhasil Ditambahkan!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          const errorData = error.response.data;
          console.error(errorData.message);
          const newErrors = {};
          errorData.data.forEach((err) => {
            newErrors[err.path] = err.msg;
          });
          setErrors(newErrors);
        } else {
          Swal.fire({
            icon: "error",
            title: "Maaf",
            text: "Anda Gagal Menambah data siswa",
            width: 300,
            heightAuto: false,
          });
          console.error("Gagal menambahkan siswa:", error);
        }
      });
  };
  const editStudent = (data, id) => {
    console.log(isEdit);
    updateSiswa(data, id)
      .then((response) => {
        console.log("Siswa berhasil diperbarui:", response);
        Swal.fire({
          title: "Selamat!",
          text: "Data Berhasil Diupdate!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          const errorData = error.response.data;
          console.error(errorData.message);
          const newErrors = {};
          errorData.data.forEach((err) => {
            newErrors[err.path] = err.msg;
          });
          setErrors(newErrors);
        } else {
          Swal.fire({
            icon: "error",
            title: "Maaf",
            text: "Anda Gagal Menambah data siswa",
            width: 300,
            heightAuto: false,
          });
          console.error("Gagal menambahkan siswa:", error);
        }
      });
  };

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
    <>
      <FormInput
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        formValues={formValues}
        handleInputChange={handleChange}
        errors={errors}
      />
    </>
  );
};

export default Form;
