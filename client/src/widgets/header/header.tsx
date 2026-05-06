import { Logo } from "@/shared/ui/logo/logo";
import { ControlPanel } from "../control-panel/control-panel";
import { Phones } from "@/shared/ui/phones/phones";
import styles from "./header.module.css";
import { Email } from "@/shared/ui/email/email";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topRow}>
        <Logo />
        <div className={styles.column}>
          <Phones />
          <Email />
        </div>
      </div>
      <div className={styles["control-panel-row"]}>
        <ControlPanel />
      </div>
    </header>
  );
};
