import { Typography, Button } from "@material-tailwind/react";

import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";
import React from "react";
import { Link } from "react-router-dom";

const GamesCard = ({ setActive }) => {
  const { data, isFetching } = useGetGamesQuery();
  console.log("Game Data", data?.results);

  if (isFetching) {
    return (
      <Spinner className=" w-full flex  justify-center text-gray-300/50" />
    );
  }
  return (
    <div className="flex items-center justify-start ">
      <div className="flex justify-start lg:overflow-x-auto  overflow-x-auto  py-3 w-full gap-2">
        {data?.results?.map((item) => (
          <Link to={`/games/${item.id}`}>
            <div
              className=" hover:scale-110 transition ease-in-out duration-300
               lg:w-[14.5rem] lg:h-[23.5rem] lg:p-2 lg:m-3 size-[7rem]
               flex flex-col items-center justify-start 
                bg-gray-800
              hover:outline outline-offset-2 outline-[#0f0f0f]  rounded-2xl"
            >
              <img
                src={item.background_image}
                alt="profile-picture"
                onPointerEnter={() => setActive(item.background_image)}
                className="rounded-2xl lg:size-[14rem]  size-[7rem] object-cover object-center  "
              />
              <div className="w-full lg-max:hidden p-2">
                <Typography
                  className="font-marcellus text-blue-gray-100 text-start font-bold "
                  variant="paragraph"
                >
                  {item.name}
                </Typography>

                <Typography
                  variant="small"
                  className="text-blue-gray-100 lg-max:hidden font-marcellus mt-1 "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci dolore recusandae voluptate autem consectetur.
                </Typography>
                <div className="mt-4 lg-max:hidden animate-pulse">
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
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
