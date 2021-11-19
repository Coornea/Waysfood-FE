import React, { useState } from "react";

import { Modal } from "react-bootstrap";

import styles from "./LoginModal.module.css";

function LoginModal({ show, handleClose, reg }) {
  // const {handleClose, show} = props;

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  const [data, setData] = useState({
    isLogin: false,
    email: "",
    password: "",
    status: "",
  });

  const toSwitch = () => {
    handleClose();
    reg();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dataUser.map((element) => {
      if (data.email === element.email && data.password === element.password) {
        localStorage.setItem("login", "true");
        localStorage.setItem("dataLogin", JSON.stringify(element));
        // props.setData(data);
        setData(data);
        handleClose();
      } else {
        console.log("Failed!");
      }
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      isLogin: true,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <form onSubmit={handleOnSubmit} className={styles.formContainer}>
          <h2 className={styles.formLabel}>Login</h2>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className={styles.formInput}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              className={styles.formInput}
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className={styles.btnLogin} type="submit">
              Login
            </button>
            <p className={styles.formText}>
              Don't have an account ? Click{" "}
              <b onClick={toSwitch} className={styles.formTextBold}>
                Here
              </b>
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal;
