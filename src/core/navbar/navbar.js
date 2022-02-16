import React, {useContext} from "react";
import styles from "./navbar.module.css";
import Logo from "../../images/Elogo232.png";
import { cart } from "../../images/icons";
import { UserContext } from "../../store/user-Context";

const NavBar = (props) => {
  const userCtx = useContext(UserContext);
  const handlePage = () =>{
    userCtx.backToHome();
  }
  return (
    <div className={styles.navbarContainer}>
      <div>
        <img src={Logo} alt="ok" /> 
      </div>
      <div className={styles.navbarCenter}>
        <a href="/home" onClick={handlePage}>Home</a>
        <a href="#!">Product</a>
        <a href="#!">About Us</a>
        <a href="#!">Contact Us</a>
      </div>
      {cart}
    </div>
  );
};

export default NavBar;
