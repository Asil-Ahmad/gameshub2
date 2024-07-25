import { Typography, Button, Rating } from "@material-tailwind/react";

import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";
import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const GamesCard = ({ setActive }) => {
  const { data, isFetching } = useGetGamesQuery();
  console.log("Game Data", data?.results);

  if (isFetching) {
    return (
      <Spinner className=" w-full flex  justify-center text-gray-300/50" />
    );
  }
  return (
    <div className="max-container w-full   h-full">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {data?.results?.map((item) => (
          <SwiperSlide>
            <Link to={`/games/${item.id}`}>
              <div
                className=" hover:scale-105  transition duration-300 ease-in-out mt-[15rem]  
               items-center ml-10 mb-5 
              "
              >
                <img
                  src={item.background_image}
                  alt="profile-picture"
                  onPointerEnter={() => setActive(item.background_image)}
                  className=" rounded-3xl hover:shadow-[5px_5px_0px_0px_rgba(23,21,21)]    w-[14.5rem] h-[17.5rem]  object-cover  object-center  "
                />
                <div className="w-full block rounded-2xl mt-10 bg-gray-800 h-[10rem] items-start text-xl text-center font-semibold text-gray-300  ">
                  <h1>{item.name}</h1>

                  <Typography color="gray" className="font-normal">
                    <div className="flex items-center justify-center gap-2 font-bold text-white">
                      <Rating value={Math.trunc(item.rating)} readonly />
                      {Math.floor(item.rating * 10) / 10}
                    </div>
                  </Typography>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
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
