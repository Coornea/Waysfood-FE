import React from "react";

import styles from "./CartPage.module.css";

import bin from "../../Assets/png/bin.png";
import paketGeprek from "../../Assets/paket-geprek.jpg";

export default function CartPage() {
  return (
    <div>
      <h1>Restaurant Name</h1>
      <form action="">
        <div>
          <label htmlFor="location">Delivery Location</label>
          <div>
            <input type="text" placeholder="Search Location" />
            <button className={styles.btnSelectMap}>Select On Map</button>
          </div>
          <label htmlFor="review">Review Your Order</label>
          <div>
            <div>
              <hr />
              <img src={paketGeprek} alt="Paket Geprek" />
              <div>
                <h3>Paket Geprek</h3>
                <div></div>
              </div>
              <div>
                <p>Rp.15.000,-</p>
                <img src={bin} alt="delete" />
              </div>
            </div>
            <div>
              <hr />
              <div>
                <label htmlFor="subtotal">Subtotal</label>
                <input
                  type="text"
                  name="subtotal"
                  id="subtotal"
                  value="Rp.15.000,-"
                />
              </div>
              <div>
                <label htmlFor="qty">QTY</label>
                <input type="text" name="qty" id="qty" value="2" />
              </div>
              <div>
                <label htmlFor="ongkir">Ongkir</label>
                <input
                  type="text"
                  name="ongkir"
                  id="ongkir"
                  value="Rp.10.000,-"
                />
                <hr />
              </div>
              <div>
                <label htmlFor="total">Total</label>
                <input
                  type="text"
                  name="total"
                  id="total"
                  value="Rp.40.000,-"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
