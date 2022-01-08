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
};

export default Alert;
