import React, { useEffect } from "react";
import GamesCard from "../GamesCard/GamesCard";
import { products } from "../../constant";


const ProductList = ({ handleClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className=" bg-[url('./assets/icons/mainbackgrounddark.png')] bg-fill
      w-full flex items-center justify-center"
    >
      <div
        className=" max-container  font-marcellus
         text-white  flex flex-wrap justify-evenly py-[7.5rem] w-full  items-center m-auto gap-10"
      >
        {products.map((item) => (
          <GamesCard item={item} handleClick={handleClick} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
