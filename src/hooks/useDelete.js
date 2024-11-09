import { useState } from "react";
import Swal from "sweetalert2";
import { deleteSiswa } from "../utils/api";

const useDelete = () => {
  const [dataDelete, setDataDelete] = useState(null);

  const deleteActivity = async (id) => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Ingin Menghapus Data Ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteSiswa(id)
            .then((response) => {
              console.log(response);
              setDataDelete(response.data);
              Swal.fire({
                title: "Selamat!",
                text: `Data Berhasil Terhapus.`,
                icon: "success",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return { dataDelete, deleteActivity };
};

export default useDelete;
