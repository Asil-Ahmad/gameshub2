import React from "react";

const ProductsCard = () => {
  return (
    <div className="flex container flex-row items-center justify-center p-10 flex-wrap">
      <div
        className="flex flex-col items-center justify-end  bg-black hover:bg-orange-500 transition transform ease-in-out 
         hover:bg-[url('./assets/icons/goku.png')] bg-cover hover:scale-105 hover:z-30 bg-center duration-300 
        box-border h-[45.5rem] w-1/5 p-4 border-2"
      >
        <div className="text-white w-full flex-col flex flex-1 items-start justify-start">
          <h1 className="text-4xl font-serif font-bold">01</h1>
          <p className="text-xl font-[300]"> Goku</p>
          <p className="text-sm text-blue-gray-600"> DragonBall Z</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-end  bg-black hover:bg-blue-500 transition transform ease-in-out 
        hover:bg-[url('./assets/icons/vegeta.png')] bg-cover hover:scale-105 hover:z-30  bg-no-repeat bg-center duration-300 
       box-border h-[45.5rem] w-1/5 p-4 border-y-2"
      >
        <div className="text-white  w-full flex-col flex flex-1 items-start justify-start">
          <h1 className="text-4xl font-serif font-bold">02</h1>
          <p className="text-xl font-[300]">Vegeta</p>
          <p className="text-sm text-blue-gray-600"> DragonBall Z</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-end  bg-black hover:bg-yellow-500 transition transform ease-in-out 
        hover:bg-[url('./assets/icons/gohan.png')]   bg-cover hover:scale-105 hover:z-20  bg-no-repeat bg-center duration-300 
       box-border h-[45.5rem] w-1/5 p-4 border-2"
      >
        <div className="text-white w-full flex-col flex flex-1 items-start justify-start">
          <h1 className="text-4xl font-serif font-bold">03</h1>
          <p className="text-xl font-[300]">Gohan</p>
          <p className="text-sm text-blue-gray-600"> DragonBall Z</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-end  bg-black hover:bg-green-500 transition transform ease-in-out 
        hover:bg-[url('./assets/icons/broly.png')] bg-cover hover:scale-105 hover:z-10  bg-no-repeat bg-center duration-300 
       box-border h-[45.5rem] w-1/5 p-4 border-2"
      >
        <div className="text-white w-full flex-col flex flex-1 items-start justify-start">
          <h1 className="text-4xl font-serif font-bold">04</h1>
          <p className="text-xl font-[300]">Broly</p>
          <p className="text-sm text-blue-gray-600"> DragonBall Z</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
