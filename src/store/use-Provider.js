import React, {useReducer, useState} from "react";
import { UserContext } from "./user-Context";

const pageReducer = (state, action) =>{
    if(action.type === "PAGINATE"){
        return {productPage : action.value}
    }
    return {productPage:false}
}
const UserProvider= props =>{
    // const [productPage, setProductPage] = useState(false);
    const [pagestate, dispatchPage] = useReducer(pageReducer, {productPage:false})
    const handlePage = () =>{
        console.log("HI")
        dispatchPage({type:"PAGINATE", value:true});
    }
    const handleBackHome = () =>{
        dispatchPage({type:"Back"});
    }
    const initialValue = {
        showProductView:pagestate.productPage,
        setShowProductView:handlePage,
        backToHome:handleBackHome
    }
    return<UserContext.Provider value={initialValue}>
        {props.children}
    </UserContext.Provider>
};
export default UserProvider;