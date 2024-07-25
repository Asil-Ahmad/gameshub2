import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ac_shadows, god } from "../../assets/games";
import { checkcircle } from "../../assets/icons";

const Cartdummy = ({ cartItems, setCartItems }) => {
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

  return (
    <section className="pt-[4.5rem]">
      <h1 className="bg-black text-center w-full text-white font-marcellus py-2 tracking-wide text-2xl  ">
        Buy a Game,Start Playing!
      </h1>
      <div
        style={{
          "--image-url": `url(${active})`,
          transition: "background 0.2s ease-in-out",
        }}
        className="bg-[image:var(--image-url)]  bg-cover w-full h-[792px]"
      >
        <div className="max-container p-0  flex ">
          <div className="bg-black/70 w-[735px]  h-[792px] flex flex-col items-center pt-[80px] px-[103px]  outline-2 outline-light-blue-600">
            <button className=" uppercase flex items-center justify-center gap-2 text-white font-marcellus tracking-wider border-[#3DA2FF] text-[16px] py-[24px] border-2 bg-[#1B2025] rounded-full w-full">
              {cartItems.length} Items in your cart{" "}
              <img src={checkcircle} alt="" width={24} height={24} />
            </button>
            <p className="text-[20px] text-white font-marcellus pt-[63px] items-start w-full">
              Selected Games
            </p>
            <div className="max-container p-2 pt-[24px] rounded-lg overflow-auto  w-full ">
              {cartItems?.map((item) => (
                <div
                  className="flex items-center  bg-[#1B2025] p-2 rounded-xl mt-5 hover:outline outline-[#3DA2FF] outline-2 outline-offset-[4px]"
                  onClick={() => setActive(item.back)}
                >
                  <img
                    src={item.imgURL}
                    alt=""
                    className="w-[120px] h-[135px] object-cover rounded-2xl"
                  />
                  <div className="flex w-full font-bold text-[20px] text-white  items-center justify-between px-4">
                    <p>{item.label}</p>
                    <p>
                      <span>&#8377; </span>
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-end w-full pr-[16px] pt-[20px]">
              <p className="text-[#FF9C33] text-[24px] font-bold">
                <span>&#8377; </span>
                {price}
                {console.log(price)}
              </p>
              <Link to="/payment">
                <button
                  className=" my-5 uppercase font-bold gap-2 text-white font-marcellus tracking-wider 
                text-[20px] py-[11px] px-[45px] bg-[#00C248] rounded-full "
                >
                  proceed to pay
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT PORTION */}
          <div className="  w-[498px] h-[792px] flex items-center justify-end pl-10 ">
            {/* <div className="flex items-center jus p-2 w-[832px] h-[174px]  bg-[#1B2025]  rounded-xl  ">
              <img
                src={god}
                alt=""
                className="w-[124px] h-[154px] object-cover"
              />
              <div className=" text-white flex flex-col p-2 justify-start items-start w-full h-full">
                <h1 className="font-bold font-sans text-[18px] ">Game Name</h1>
                <p className="text-[15px]">
                  Lorem ipsum dolor lore jfediw jfeiwjfwjf jfepj ewpfewo jfoejw
                  opfsit, fugiat? Amet, possimus ratione. Labore sit ducimus
                  iusto voluptatibus voluptates at
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cartdummy;
