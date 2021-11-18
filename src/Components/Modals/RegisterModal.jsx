import React from "react";

import { Modal } from "react-bootstrap";

import styles from "./RegisterModal.module.css";

export default function LoginModal({ show, handleClose }) {
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
            <input
              type="text"
              className={styles.formInput}
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div>
            <select name="" id="gender">
              <option value="Select Gender">...</option>
              <option value="Female"></option>
              <option value="Male"></option>
            </select>
          </div>
          <div>
            <input
              type="number"
              className={styles.formInput}
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <select name="" id="status">
              <option value="As User">...</option>
              <option value="-"></option>
              <option value="-"></option>
            </select>
          </div>
          <div>
            <button className={styles.btnRegister}>Register</button>
            <p className={styles.formText}>
              Already have an account ? Click{" "}
              <b className={styles.formTextBold}>Here</b>
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}
