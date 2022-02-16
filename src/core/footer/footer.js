import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h2 className="addressDesign">Address</h2>
        <p>
          House 4,Road-13 <br />
          Nikuaja 2,Khilkhet,Dhaka
        </p>
      </div>
      <div>
        <h2>Policy</h2>
        <div className="social-container">
          <ul className="linkSocial">
            <li className="policy_text"> Refund Policy</li>
            <li>Comapny Profile</li>
            <li>Follow Us</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Terms And Conditions</h2>
        <h4>Click Here For Details</h4>
      </div>

      <section className="copyrightSection">
        <a href="">
          {" "}
          © Copyright 2022 by Enlight Solutions ,All Rights Reserved
        </a>
      </section>
    </div>
  );
};
export default Footer;
