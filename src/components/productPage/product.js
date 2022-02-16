import React from "react";
import Footer from "../../core/footer/footer";
import NavBar from "../../core/navbar/navbar";
import Description from "./description/description";
import DetailsView from "./detailsView/detailsView";

const Product = (props) => {
  return (
    <div>
      <NavBar />
      <DetailsView />
      <Description />
      <Footer />
    </div>
  );
};
export default Product;
