import React, { useEffect } from "react";
import { useState } from "react";

import { Rating, Typography, Spinner, Button } from "@material-tailwind/react";

import { useGetGameQuery } from "../../services/RAWG";

import { Link, useParams } from "react-router-dom";

import ImageGallery from "../ImageGallery/ImageGallery";
import GameDescription from "../GameDescription/GameDescription";

const GameInformation = () => {
  const { id } = useParams();
  //console.log(id);
  const { data, isFetching } = useGetGameQuery(id);
  console.log("Single GameData", data);

  const [active, setActive] = useState();

  useEffect(() => {
    // Check if data is available and then update state
    if (data && data.background_image) {
      setActive(data.background_image);
    }
  }, [data]); // Dependency on data means this runs when data changes

  if (isFetching) {
    return (
      <Spinner className="flex items-center justify-center h-16 w-16 text-gray-300/50" />
    );
  }
  return (
    <section
      style={{ "--image-url": `url(${active})` }}
      className=" transition duration-300 bg-[image:var(--image-url)] bg-cover bg-center min-h-screen
        w-full flex items-center justify-center  "
    >
      <div className="w-3/4 flex flex-col items-start justify-center">
        {/* <div className=" flex w-full justify-center items-center ">
          <img
            src={active}
            alt="image 1"
            className=" rounded-[2rem]  object-cover object-center "
          />
        </div> */}

        <div className="mt-10 flex justify-start items-center object-contain gap-2">
          <img
            src={data.background_image}
            alt=""
            className="box-content  h-[10rem] w-[10rem] rounded-[2rem] object-cover "
          />
          <div className=" w-full flex flex-col items-start gap-3 p-2">
            <Typography variant="h5" color="white">
              {data.name}
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              <div className="flex items-center justify-center gap-2 font-bold text-white">
                <Rating value={Math.trunc(data.rating)} readonly />
                {Math.floor(data.rating * 10) / 10}
              </div>
            </Typography>
            <Typography variant="h6" color="white">
              {data.genres.map((genre) => (
                <Link>{genre.name} </Link>
              ))}
            </Typography>
          </div>
        </div>
        <div className="mt-5">
          <Typography variant="h5" color="white">
            Screenshots
          </Typography>
          <div className="mt-5 ">
            <ImageGallery setActive={setActive} />
          </div>
          <div className="mt-5">
            <Typography variant="h5" color="white">
              Game Description
            </Typography>
            <div className="mt-5">
              <GameDescription />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInformation;
{
  /* <Carousel loop={true} autoplay={true} className="rounded-xl">
  <img
  src={data.background_image}
  alt="image 1"
  className="object-cover object-center "
  />
  <img
  src={data.background_image_additional}
  alt="image 2"
  className=" object-cover object-center"
/>
</Carousel> */
}
