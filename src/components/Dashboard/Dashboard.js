
import { useContext } from "react";
import Home from "../home/home";
import Product from "../productPage/product";

import { UserContext } from "../../store/user-Context";

const Dashboard = props =>{
    
  const userCtx = useContext(UserContext);
    return <>
        {!userCtx.showProductView && <Home/>}
        { userCtx.showProductView && <Product/>}
        
    </>
};
export default Dashboard;