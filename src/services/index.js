// TODO: Uncomment baris kode di bawah untuk meng-import axios
// import axios from "axios";

// TODO: Uncomment baris kode di bawah untuk mendapatkan API URL yang akan digunakan untuk mengambil data kontak dari API
// const BASE_URL = "https://api.contact-manager.project.skyshi.io";

// TODO: Uncomment baris kode di bawah untuk membuat sebuah fungsi yang akan mengambil semua data kontak dari API
// export async function getAllContactsData() {
//   return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
//     return error;
//   });
// }

// Import axios
import axios from "axios";

// API URL
const BASE_URL = "https://api.contact-manager.project.skyshi.io";

// Fungsi untuk mengambil semua data kontak dari API
export async function getAllContactsData() {
  return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
    return error;
  });
}
