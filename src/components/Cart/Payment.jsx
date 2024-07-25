import React, { useState, useEffect } from "react";

import { ac_shadows, god, transaction } from "../../assets/games";
import { card, checkcircle, xicon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { DialogDefault } from "./Dialog";

const Payment = ({ cartItems, setCartItems }) => {
  const [price, setPrice] = useState(0);

  const handlePriceChange = () => {
    let currentPrice = 0;
    cartItems.map((item) => (currentPrice += item.price));
    setPrice(currentPrice);
  };

  useEffect(() => {
    handlePriceChange();
  }),
    [cartItems];

  const [active, setActive] = useState(ac_shadows);

  const handleDelete = (id) => {
    const filterCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filterCartItems);
  };

  return (
    <section className="pt-[4.5rem]">
      <h1 className="bg-black text-center tracking-widest w-full text-white font-marcellus py-2  text-2xl  ">
      Get 3 months of Arcade Mode free when you buy a new games for PC ,
              Playstation , or X-Box.*{" "}
      </h1>
      <div
        style={{
          "--image-url": `url(${active})`,
          transition: "background 0.2s ease-in-out",
        }}
        className="bg-[image:var(--image-url)]  bg-cover w-full h-[792px]"
      >
        <div className="max-container p-0  flex flex-wrap ">
          <div className="bg-black/70 w-[735px]  h-[792px] flex flex-col items-center pt-[55px] px-[45px] pb-[33px]  outline-2 outline-light-blue-600">
            <div
              className="w-[651px] h-[494px] bg-white pt-[43px] px-[50px] pb-[34px] rounded-md
            animate-fade animate-once animate-duration-1000
            "
            >
              <button className=" uppercase flex items-center justify-center gap-2 text-white font-marcellus tracking-wider border-[#3DA2FF] text-[16px] py-[24px] border-2 bg-[#1B2025] rounded-full w-full">
                Summary
                <img src={checkcircle} alt="" width={24} height={24} />
              </button>
              <div className="flex justify-between pt-[62px] pb-[30px]">
                <p className="text-[20px] text-black font-marcellus ">
                  Subtotal ({cartItems.length} items)
                </p>
                <p className="text-[20px] text-black font-marcellus ">
                  <span>&#8377; </span>
                  {price}
                </p>
              </div>
              <div className="border-t-[0.5px] border-dashed border-black" />
              <div className="flex justify-between  pt-[57px]">
                <p className="text-[24px] text-black font-marcellus ">
                  Total{" "}
                  <span className="text-[16px] text-[#939393]">Incl.taxes</span>
                </p>
                <p className="text-[24px] text-[#FF9C33] font-marcellus ">
                  <span>&#8377; </span>
                  {price}
                </p>
              </div>

             
                <DialogDefault />
              

              <p
                className="  mt-[15px] text-center text-[15px]
                 uppercase  font-bold"
              >
                <Link to="/products" className=" hover:underline">
                  Continue Shopping
                </Link>
              </p>
            </div>

            {/* PAYMENT SECURE */}
            <div className="w-[651px] h-[494px] bg-white py-[31px] px-[134px] rounded-md mt-[16px] mb-[46px]">
              <div className=" flex items-center flex-col justify-center">
                <p className="text-[20px] font-semibold flex items-center">
                  <img src={card} alt="" />
                  Secured Transaction
                </p>
                <img src={transaction} alt="" />
              </div>
            </div>
          </div>

          {/* RIGHT PORTION */}
          <div className="  w-[498px] h-[792px] flex items-center justify-end pl-5 ">
            <div className=" bg-black/90 h-[550px]  px-[24px] rounded-lg overflow-auto  w-full ">
              {cartItems?.map((item) => (
                <div
                  className="flex items-center  bg-[#1B2025] p-3 rounded-xl mt-5 hover:outline outline-[#3DA2FF] outline-2 outline-offset-[4px]"
                  onClick={() => setActive(item.back)}
                >
                  <img
                    src={item.imgURL}
                    alt=""
                    className="w-[100px] h-[105px] object-cover rounded-2xl"
                  />
                  <div className="flex w-full font-medium tracking-wide text-[15px] text-white  items-center justify-between pl-4">
                    <p>{item.label}</p>
                    <p>
                      <span>&#8377; </span>
                      {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className=" bg-red-500 relative bottom-[3rem] left-2"
                  >
                    <img
                      src={xicon}
                      alt=""
                      width={28}
                      height={24}
                      className="rounded-full object-contain"
                    />
                  </button>
                </div>
              ))}
            </div>{" "}
            */
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
