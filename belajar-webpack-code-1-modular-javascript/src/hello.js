import _ from "lodash";

const mahasiswa = [
  {
    nama: "Randi Febriadi",
    email: "randifebriadi@gmail.com",
    jurusan: "Sistem Komputer",
  },
  {
    nama: "Rumzi Rahman",
    email: "rumzirahman@gmail.com",
    jurusan: "Teknik Elektro",
  },
  {
    nama: "Tasya Aryati Sakinah",
    email: "tasyaaryati@gmail.com",
    jurusan: "Pendidikan Agama Islam",
  },
];

const mhs = _.find(mahasiswa, { nama: "Rumzi Rahman" });

console.log(mhs);
