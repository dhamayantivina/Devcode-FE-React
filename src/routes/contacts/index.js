import ContactItem from "../../components/ContactItem";
import InputContactForm from "../../components/InputContactForm";
import "../../assets/styles/style.css";
import { useEffect, useState } from "react";
import { getAllContactsData } from "../../services/index"; // Pastikan path import sesuai dengan struktur folder Anda

const ContactManager = () => {
  // State variable untuk menyimpan data kontak
  const [contactsData, setContactsData] = useState([]);

  // Fungsi untuk mendapatkan data kontak
  const handleGetContactsData = async () => {
    const res = await getAllContactsData();
    setContactsData(res?.data?.data);
  };

  // Panggil fungsi untuk mendapatkan data kontak saat halaman dirender
  useEffect(() => {
    handleGetContactsData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <InputContactForm />
        <div className="contact-list__container">
          {/* Menampilkan ContactItem untuk setiap data kontak */}
          <>
            {contactsData && contactsData?.length > 0
              ? contactsData.map((contact, key) => (
                  <ContactItem
                    key={key}
                    id={contact?.id}
                    full_name={contact?.full_name}
                    phone_number={contact?.phone_number}
                    email={contact?.email}
                  />
                ))
              : "No contacts available"}
          </>
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
