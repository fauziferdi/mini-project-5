import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import TableSiswa from "../component/TableSiswa";
import { useNavigate } from "react-router-dom";
import useDelete from "../hooks/useDelete";

const home = () => {
  const navigate = useNavigate();
  const { data, fetchData, isLoading, error } = useFetch();
  const { deleteActivity, dataDelete } = useDelete();

  useEffect(() => {
    fetchData();
  }, [dataDelete]);

  const handleNavigationDetail = (id) => {
    navigate(`/siswa/${id}`);
  };

  const handleNavigationAdd = () => {
    navigate(`/add`);
  };
  const handleNavigationEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    deleteActivity(id);
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
      <TableSiswa
        siswa={data}
        NavDetail={handleNavigationDetail}
        NavAdd={handleNavigationAdd}
        NavEdit={handleNavigationEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default home;
