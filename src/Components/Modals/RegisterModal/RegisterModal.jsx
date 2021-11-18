import React from "react";

import { Modal } from "react-bootstrap";

import styles from "./RegisterModal.module.css";

export default function RegisterModal({ showReg, handleCloseReg }) {
  return (
    <div>
      <Modal className="modal" show={showReg} onHide={handleCloseReg}>
        <form className={styles.formContainer}>
          <h2 className={styles.formLabel}>Register</h2>
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
            <select className={styles.formInput} id="gender">
              <option value="Select Gender">Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
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
            <select className={styles.formInput} id="status">
              <option value="As User">As User</option>
              <option value="Owner">Owner</option>
              <option value="User">User</option>
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
