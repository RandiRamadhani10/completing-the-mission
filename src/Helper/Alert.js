import Swal from "sweetalert2";

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
  fail() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Kamu belum berhasil",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  },
  success() {
    Swal.fire("Good job!", "Kamu berhasil!", "success");
  },
};

export default Alert;
