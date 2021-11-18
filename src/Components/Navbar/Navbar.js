import { useState } from "react";

import logo from "../../Assets/png/waysfood.png";
import styles from "./Navbar.module.css";

import LoginModal from "../../Components/Modals/LoginModal";

function Navbar() {
  // const navItems = ['',];
  const [Login, setLogin] = useState(false);
  const handleShow = () => {
    setLogin(true);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="waysfood-icon" />
      <LoginModal show={Login} handleClose={() => setLogin(false)} />
      <div className={styles.wrap}>
        <button className={styles.btnRegister}>Register</button>
        <button onClick={handleShow} className={styles.btnLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
