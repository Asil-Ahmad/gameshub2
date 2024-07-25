import React, { useState } from "react";
import { Button, Rating } from "@material-tailwind/react";
import { Pc, cart, outlineheart, solidheart } from "../../assets/icons";
import { pc, playstation, xbox } from "../../assets/platforms";
import { Link } from "react-router-dom";

const GamesCard = ({ item, handleClick }) => {
  const { id, imgURL, back, label, price, genre, rating, gamerslive, href } =
    item;

  const [isGameFavorited, setIsGameFavorited] = useState(false);

  const handleLike = (id) => {
    // console.log("Like", id);
    setIsGameFavorited((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div
        className=" hover:shadow-[0px_0px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]
              hover:scale-110 transition ease-in-out duration-300  w-[324px] 
                rounded-[20px] linerGradientCard font-manrope"
      >
        <Link to={href}>
          <img
            src={imgURL}
            alt={label}
            // onPointerEnter={() => setActive(item.background_image)}
            className=" rounded-[20px] w-[324px] h-[266px] object-center object-cover  "
          />
        </Link>
        <div className="py-[15px] px-[15px]">
          <div id="console_heart" className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <img src={pc} alt="" width={20} title="PC" />
              <img src={playstation} alt="" width={20} title="Playstation" />
              <img src={xbox} alt="" width={20} title="XBox" />
            </div>
            <button onClick={() => handleLike(item.id)}>
              {isGameFavorited[item.id] ? (
                <img
                  src={solidheart}
                  alt=""
                  width={30}
                  className="animate-jump animate-once animate-delay-100"
                />
              ) : (
                <img src={outlineheart} alt="" width={30} />
              )}
            </button>
          </div>

          <div
            id="cat_rating"
            className=" pt-[16px] pb-[15px] flex flex-wrap items-center justify-between"
          >
            <div className="flex items-center flex-wrap  gap-2">
              <button
                className="bg-[#435359] px-[10px] py-[2px] rounded-full 
                       border-[0.5px]
                       border-white text-white text-[10px] font-marcellus"
              >
                {genre}
              </button>
            </div>
            <div className="flex items-center text-[15px] gap-2 ">
              {Math.floor(rating * 10) / 10}
              <Rating value={Math.trunc(rating)} readonly />
            </div>
          </div>
          <p className="text-[24px] font-bold ">{label}</p>

          <div className="flex justify-between py-[15px]">
            <Button
              size="sm"
              className="bg-[#2D7E91] flex items-center gap-2  "
              onClick={() => handleClick(item)}
            >
              {" "}
              <img src={cart} alt="" width={19} />
              Add to cart
            </Button>

            <Button
              size="sm"
              className="bg-transparent border-[1px] font-thin border-[#6DC849]  text-[#6DC849]"
            >
              <span>&#8377;</span> {price}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesCard;
