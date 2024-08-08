import InputContactForm from "../../components/InputContactForm";
import ContactItem from "../../components/ContactItem";
import "../../assets/styles/style.css";
import { useEffect, useState } from "react";
import { getAllContactsData } from "../../services";

const ContactManager = () => {
  const [contactsData, setContactsData] = useState([]);

  const handleGetContactsData = async () => {
    const res = await getAllContactsData();
    setContactsData(res?.data?.data);
  };

  useEffect(() => {
    handleGetContactsData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <InputContactForm handleGetContacts={handleGetContactsData} />
        <div className="contact-list__container">
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
              : ""}
          </>
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
