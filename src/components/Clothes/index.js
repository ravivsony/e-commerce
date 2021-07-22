//Dependencies
import React from "react";
//Internals
import "./styles.css";
import ClothesItems from "./ClothesItems";

const Clothes = () => {
  return (
    <div className="clothes">
      <div className="clothes-title">
        <h4>Clothes</h4>
      </div>
      <ClothesItems />
    </div>
  );
};

export default Clothes;
