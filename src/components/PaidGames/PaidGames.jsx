import React, { useState } from "react";
import { products } from "../../constant";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";

const PaidGames = () => {
  const [like, setLike] = useState("");
  const liked = (id) => {
    localStorage.setItem("Favorite Game", JSON.stringify(id));
    console.log(window.localStorage);
  };
  return (
    <div className="">
      {products.map((item) => (
        <Link className="  dark:text-gray-900 text-blue-gray-100 w-full flex mt-4 items-center justify-between ">
          <div className=" flex items-center">
            <div className="relative">
              <img
                src={item.imgURL}
                alt=""
                className=" lg:w-[24rem] lg:h-[24rem]  size-[7rem] object-cover object-center rounded-2xl"
              />
              <span
                className={`absolute bottom-0 right-0 p-2 text-3xl ${like}`}
                onClick={() => liked(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <Typography className=" lg:text-3xl   dark:text-gray-900 text-blue-gray-100  font-[400] text-sm p-2 capitalize">
            {item.label}
          </Typography>
          <Link to={`/products/cart`}>
            <Button className=" bg-black"> ₹{item.price}</Button>
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default PaidGames;
