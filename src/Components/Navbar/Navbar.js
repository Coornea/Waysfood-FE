import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import logo from "../../Assets/png/waysfood.png";
import styles from "./Navbar.module.css";

import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import LoginModal from "../Modals/LoginModal/LoginModal";

function Navbar() {
  // const navItems = ['',];
  const [Login, setLogin] = useState(false);
  const handleShow = () => {
    setLogin(true);
  };

  const [Register, setRegister] = useState(false);
  const handleShowReg = () => {
    setRegister(true);
  };

  // let navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/");
  // };

  return (
    <div className={styles.navbar}>
      <a href="/">
        <img
          // onClick={handleClick}
          className={styles.logo}
          src={logo}
          alt="waysfood-icon"
        />
      </a>
      {/* <Link to="/profile">Profile</Link> */}
      <RegisterModal
        showReg={Register}
        handleCloseReg={() => setRegister(false)}
      />
      <LoginModal show={Login} handleClose={() => setLogin(false)} />
      <div className={styles.wrap}>
        <button onClick={handleShowReg} className={styles.btnRegister}>
          Register
        </button>
        <button onClick={handleShow} className={styles.btnLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
