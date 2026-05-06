import { Phones } from "@/shared/ui/phones/phones";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <Phones />
        </div>
      </div>
    </footer>
  );
};
