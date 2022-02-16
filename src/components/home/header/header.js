import react from "react";
import styles from "./header.module.css";
import TV from "../../../images/banner-images/TV2.png";
import HeadPhn from "../../../images/banner-images/headphone.png";

const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <img src={TV} alt="TV" className={styles.images1} />
      <img src={HeadPhn} alt="TV"  className={styles.images2} />
    </div>
  );
};
export default Header;
