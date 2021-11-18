import React from "react";

import styles from "./EditProfile.module.css";
import pin from "../../Assets/png/pin.png";
import map from "../../Assets/png/map.png";

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
              placeholder="Full Name"
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
            type="email"
            placeholder="Email"
          />
          <br />
          <input className={styles.formInput} type="text" placeholder="Phone" />
          <div className={styles.sectionTwo}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Location"
            />
            <button className={styles.btnSelectMap}>
              Select On Map{" "}
              <img style={{ marginLeft: "15px" }} src={map} alt="map" />
            </button>
          </div>
          <div className={styles.btnWrap}>
            <button className={styles.btnSave}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
