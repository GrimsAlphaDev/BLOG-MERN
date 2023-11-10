import Swal from "sweetalert2";

const sweetAlert = ({ option, type, text }) => {
    if (option === "Simpan") {
        Swal.fire({
            title: "Berhasil",
            icon: type,
            text: text,
        });
    }
    if (option === "Update"){
        Swal.fire({
            title: "Berhasil",
            icon: type,
            text: text,
        });
    }
    if (option === "delete") {
        Swal.fire({
            title: "Berhasil",
            icon: type,
            text: text,
        });
    }
    if (option === "batal"){
        Swal.fire({
            title: "Batal",
            icon: type,
            text: text,
        })
    }
};

export default sweetAlert;