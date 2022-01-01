import styles from "./Layout.module.css";
import Header from "./Header";
import Menu from "./Menu";
import React, { useState } from "react";

function Layout({ children, activeMenu }) {
  const [menuActive, setMenuActive] = useState(true);
  function onClick() {
    setMenuActive(!menuActive);
  }
  return (
    <div className={styles.container}>
      <Header func={onClick} />
      <div className={styles.layout}>
        {menuActive === true ? <Menu activeMenu={activeMenu} /> : <div />}
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
