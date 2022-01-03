import styles from "./Layout.module.css";
import Header from "./Header";
import Menu from "./Menu";
import { useState } from "react";

function Layout({ children, activeMenu }) {
  const [open, setOpen] = useState(true);

  function onChangeOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <Header onChangeOpen={onChangeOpen} />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} open={open} />
        <div className={open ? styles.contents : styles.whole}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
