import React, {useContext} from "react";
import styles from "./cart.module.css";
import defaultPic from "../../../images/bags/bag-1.png";
import { UserContext } from "../../../store/user-Context";

const Cart = (props) => {
  const UserCtx = useContext(UserContext);
  const handlePage = () =>{
    UserCtx.setShowProductView();
  }
  return (
    <div className={styles.cardContainer} onClick={ handlePage}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHedaderImages}>
            <img src={defaultPic} alt="defaultPic" className={styles.userPic} />
        </div>
      </div>

      <button className={styles.btnDetails}>View Details</button>
    </div>
  );
};
export default Cart;
