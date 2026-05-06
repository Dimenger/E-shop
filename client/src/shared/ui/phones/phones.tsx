import { CONTACTS } from "@/shared/constants/contacts";
import styles from "./phones.module.css";

export const Phones = () => {
  return (
    <div className={styles.phones}>
      {CONTACTS.phones.map(({ id, phone }) => (
        <div key={id}>Телефон: {phone}</div>
      ))}
    </div>
  );
};
