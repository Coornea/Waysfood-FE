import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Contex/UserContex";

import styles from "./Navbar.module.css";
import logo from "../../Assets/png/waysfood.png";
import user1 from "../../Assets/user/user-1.jpg";
import cart from "../../Assets/png/cart.png";

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

  const [state, dispatch] = useContext(AppContext);

  // const navigate = useNavigate();

  // const goHome = () => {
  //   navigate("/");
  // };

  return (
    <div className={styles.navbar}>
      <a href="/">
        <img
          // onClick={}
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
        {state.isLogin ? (
          <p>TRUE</p>
        ) : (
          <>
            <button onClick={handleShowReg} className={styles.btnRegister}>
              Register
            </button>
            <button onClick={handleShow} className={styles.btnLogin}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
