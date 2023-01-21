import React,{useContext} from "react";
import AllItems from "./AllItems";
import "./index.css";
import { AppData } from "../BaseLayout";

const Products = () => {
  const data=useContext(AppData)
  return (
    <div>
      <div className="items-title">
        <h4>{data.length<20?'Filtered Collection':'Big Deals'}</h4>
      </div>
      <AllItems />
    </div>
  );
};

export default Products;


