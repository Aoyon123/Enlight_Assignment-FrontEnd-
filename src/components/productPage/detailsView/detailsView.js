import React, { useEffect, useState } from "react";
import styles from "./detailsView.module.css";
import defaultPic from "../../../images/bags/bag-1.png";
import defaultPic1 from "../../../images/bags/bag-2.png";
import defaultPic2 from "../../../images/bags/bag-3.png";
import Description from "../description/description";

const DetailsView = (props) => {
  const [activeImage, setActiveImage] = useState(defaultPic);
  const handleImage = (e) => {
    if (e.target.id === "") {
      setActiveImage(defaultPic);
    }
    if (e.target.id === "1") {
      setActiveImage(defaultPic1);
    }
    if (e.target.id === "2") {
      setActiveImage(defaultPic2);
    }
  };
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.otherImageContainer}>
        <img
          src={defaultPic}
          id=""
          className={styles.otherImage}
          onClick={handleImage}
          alt="ok"
        />
        <img
          src={defaultPic1}
          id="1"
          onClick={handleImage}
          className={styles.otherImage}
          alt="ok"
        />
        <img
          src={defaultPic2}
          id="2"
          onClick={handleImage}
          className={styles.otherImage}
          alt="ok"
        />
      </div>
      <div className={styles.mainImageContainer}>
        <img src={activeImage} className={styles.mainImage} alt="ok" />
      </div>
      <Description/>
    </div>
  );
};

export default DetailsView;
