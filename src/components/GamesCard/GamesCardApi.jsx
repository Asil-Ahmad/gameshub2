import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Rating } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import { useGetGamesQuery } from "../../services/RAWG";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import Search from "../SearchGames/Search";
import { fire, solidheart, outlineheart } from "../../assets/icons";
import { platformsIcons } from "../../assets/platforms";

const GamesCard = () => {
  const [page, setPage] = useState(1);

  const { genreOrCategoryName, search } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, isFetching } = useGetGamesQuery({
    genreOrCategoryName,
    page,
    search,
  });
  // console.log("Game Data", data?.results);

  const [isGameFavorited, setIsGameFavorited] = useState(false);

  const handleLike = (id) => {
    // console.log("Like", id);
    setIsGameFavorited((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (isFetching) {
    return (
      <Spinner className=" w-full flex  justify-center text-gray-300/50" />
    );
  }
  return (
    <div>
      <div className=" max-container mr-10 w-[80%] items-center flex flex-col">
        <div className=" flex gap-4 items-center pt-[5rem]">
          <Search />
        </div>
        <div
          className="font-marcellus
         text-white flex flex-wrap justify-center py-10  items-center  gap-10"
        >
          {data?.results?.map((item) => (
            <div
              className=" hover:shadow-[0px_0px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]
              hover:scale-110 transition ease-in-out duration-300  w-[324px] 
                rounded-[20px] linerGradientCard font-manrope"
            >
              <img
                src={item.background_image}
                alt={item.name}
                // onPointerEnter={() => setActive(item.background_image)}
                className=" rounded-[20px] w-[324px] h-[266px] object-cover  object-center  "
              />
              <div className="py-[15px] px-[15px]">
                <div
                  id="console_heart"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-baseline gap-3">
                    {item.parent_platforms?.map((item) => (
                      <img
                        src={platformsIcons[item.platform.slug]}
                        alt=""
                        width={20}
                        height={20}
                        title={item.platform.name}
                      />
                    ))}
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
                    {item.genres?.map((genre) => (
                      <button
                        className="bg-[#435359] px-[10px] py-[2px] rounded-full 
                       border-[0.5px]
                       border-white text-white text-[10px] font-marcellus"
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center text-[15px] gap-2 ">
                    {item.rating != null ? (
                      <>
                        {Math.floor(item.rating * 10) / 10}
                        <Rating value={Math.trunc(item.rating)} readonly />
                      </>
                    ) : (
                      <span>No Rating Available</span>
                    )}
                  </div>
                </div>
                <p className="text-[24px] font-bold ">{item.name}</p>

                <div className="flex justify-between py-[15px]">
                  <Link to={`/games/${item.slug}`} key={item.id}>
                    <Button size="sm" className="bg-[#2D7E91] ">
                      Explore
                    </Button>
                  </Link>

                  <Button
                    size="sm"
                    className="bg-transparent border-[1px] font-thin border-[#6DC849]
                    text-[#6DC849]
                    "
                  >
                    Gamers Live{" "}
                    <b className="font-extrabold">{item.suggestions_count}</b>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={data.total_pages}
        />
      </div>
    </div>
  );
};

export default GamesCard;

/*
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Rating,
} from "@material-tailwind/react";

import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";
import React from "react";
import { Link } from "react-router-dom";

const GamesCard = () => {
  const { data, isFetching } = useGetGamesQuery();
  console.log("Game Data", data?.results);
  if (isFetching) {
    return (
      <Spinner className="flex items-center justify-center h-16 w-16 text-gray-300/50" />
    );
  }
  return (
    <div className="p-9 items-center justify-center grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data?.results?.map((item) => (
        <Link to={`/games/${item.id}`}>
          <div className="overflow-hidden rounded-xl">
            <img
              src={item.background_image}
              alt="profile-picture"
              className="hover:scale-125 transition  rounded-xl duration-500 cursor-pointer"
            />

            <div
              className=" flex items-center text-center justify-center  bottom-0 
             rounded-xl  shadow-lg shadow-black/5  backdrop-blur-sm"
            >
              <div>
                <Typography variant="h5" color="white">
                  {item.name}
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                  <Rating value={Math.trunc(item.rating)} readonly />
                  <div className="flex items-center justify-center gap-2 font-bold text-white">
                    {Math.floor(item.rating * 10) / 10}
                  </div>
                </Typography>
              </div>
            </div>

            {/* <CardBody className="text-center ">
            <Typography variant="h5" color="white" className="mb-2 ">
              {item.name}
              </Typography>
            <Typography color="white" className="font-medium">
              <Rating value={Math.trunc(item.rating)} readonly />
              <div className="flex items-center justify-center gap-2 font-bold text-blue-gray-500">
                {Math.floor(item.rating * 10) / 10}
              </div>
              </Typography>
          </CardBody> */
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default GamesCard;*/
