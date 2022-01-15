import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
const Alert = {
  music() {
    Swal.fire({
      title: "Music?",
      text: "Apakah anda ingin mengaktifkan music?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(true);
        return true;
      } else {
        return false;
      }
    });
  },
  Fail() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Kamu belum berhasil",
      footer: '<a href="">Why do I have this issue?</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    });
  },
  success() {
    Swal.fire("Good job!", "Kamu berhasil!", "success");
  },
};

export default Alert;
