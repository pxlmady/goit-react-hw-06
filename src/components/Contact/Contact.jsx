import React from "react";
import css from "./contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";

function Contact({ contactData, handleDeleteButton }) {
  return (
    <div className={css.contactDataContainer}>
      <ul className={css.contactCard}>
        <div>
          <li className={css.contactData}>
            <span>
              <FaUser />
            </span>
            <p>{contactData.name}</p>
          </li>
          <li className={css.contactData}>
            <span>
              <FaPhone />
            </span>
            <p>{contactData.number}</p>
          </li>
        </div>

        <li>
          {" "}
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDeleteButton(contactData.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
