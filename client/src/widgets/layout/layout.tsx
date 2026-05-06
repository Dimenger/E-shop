// import { Header } from "../header/header";
// import { Footer } from "../footer/footer";
import { Outlet, ScrollRestoration } from "react-router";

import styles from "./layout.module.css";
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <ScrollRestoration />
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};
