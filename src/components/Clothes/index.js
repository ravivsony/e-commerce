//Dependencies
import React from "react";
//Internals
import "./styles.css";
import ClothesItems from "./ClothesItems";

const Clothes = ({products}) => {
  return (
    <div className="clothes">
      <div className="clothes-title">
        <h4>Clothes</h4>
      </div>
      <ClothesItems products={products} />
    </div>
  );
};

export default Clothes;
