import React from "react";

import { Modal } from "react-bootstrap";

import styles from "./LoginModal.module.css";

function LoginModal({ show, handleClose }) {
  // const {handleClose, show} = props;

  return (
    <div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <form className={styles.formContainer}>
          <h2 className={styles.formLabel}>Login</h2>
          <div>
            <input
              className={styles.formInput}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              className={styles.formInput}
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className={styles.btnLogin}>Login</button>
            <p className={styles.formText}>
              Don't have an account ? Click{" "}
              <b className={styles.formTextBold}>Here</b>
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal;
