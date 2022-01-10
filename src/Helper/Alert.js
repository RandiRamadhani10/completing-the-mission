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
  biodata() {
    Swal.fire({
      text: { data: "Nama	: Dwi Agustin Purnaning" },
      html: `  <div style="display:flex; flex-direction:column; justify-content: start; align-items: flex-start">
      <h1>Mahasiswa</h1>
      <p>Nama     : Dwi Agustin Purnaning</p>
      <p>NIM      : 18010644099</p>
      <p>Jurusan	: S1 Pendidikan Guru Sekolah Dasar</p>
      <p>Alamat	  : Ds. Kebonagung Kec. Ploso Kab Jombang</p>
      <p>Email	  : dwiagustinprn@gmail.com</p>
      <br/>
      <p>Dosen Pembimbing</p>
      <p>Farida Istianah, S.Pd., M.Pd.  </p>
    </div>`,
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 200,
      imageHeight: 100,
      imageAlt: "Custom image",
      showCloseButton: true,
      showConfirmButton: false,
    });
  },
  hint() {
    Swal.fire({
      title: "Petunjuk",
      html: `  <div style="display:flex; flex-direction:column; justify-content: start; align-items: flex-start">
      <ol style="list-style-type: upper-roman">
      <li>Klik tombol “Start” untuk memulai misi.</li>
      <li>Misi ini dilakukan secara individu.</li>
      <li>Cantumkan namamu pada tempat yang tersedia sebelum memulai misi.</li>
    </ol>
    </div>`,
      icon: "information",
    });
  },
};

export default Alert;
