import React from "react";

import styles from "./AddProduct.module.css";
import pin from "../../Assets/png/pin.png";

export default function EditProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Edit Profile</h2>
        <form className={styles.formContainer} action="">
          <div className={styles.sectionOne}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Title"
            />
            <div style={{ position: "relative" }}>
              <input
                className={styles.btnAttach}
                type="file"
                placeholder={(`Attach Image`, (<img src={pin} />))}
              />
            </div>
          </div>
          <input
            className={styles.formInput}
            type="number"
            placeholder="Price"
          />
          <div className={styles.btnWrap}>
            <button className={styles.btnSave}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
