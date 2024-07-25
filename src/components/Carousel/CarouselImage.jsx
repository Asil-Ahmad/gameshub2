import { Carousel } from "@material-tailwind/react";

import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";

import React from "react";

const CarouselImage = () => {
  const { data, isFetching } = useGetGamesQuery();
  // console.log("Game sCREEN", data?.results[0].short_screenshots);
  if (isFetching) {
    return <Spinner className="h-24 w-24" />;
  }
  return (
    <div className=" ">
      <Carousel
        autoplay
        loop
        transition={{ duration: 0.5 }}
        className="rounded-xl  "
      >
        {data?.results[0].short_screenshots.map((img) => (
          <div
            key={img.image}
            className=" flex flex-col items-center justify-center w-full h-full overflow-hidden"
          >
            <img
              src={img.image}
              alt="image 1"
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* <div className="flex z-9999 bg-red-100">
          <h1 className="text-red-500 text-center font-nunito ">
            {data?.results[0].name}
          </h1>
        </div> */}

        {/* {data?.results[1].short_screenshots.map((img) => (
          <img
            src={img.image}
            alt="image 1"
            className="rounded-[2rem] h-full object-cover object-center"
          />
        ))}

        {data?.results[2].short_screenshots.map((img) => (
          <img
            src={img.image}
            alt="image 1"
            className="rounded-[2rem] h-full object-cover object-center"
          />
        ))}

        {data?.results[3].short_screenshots.map((img) => (
          <img
            src={img.image}
            alt="image 1"
            className="rounded-[2rem] h-full object-cover object-center"
          />
        ))}

        {data?.results[4].short_screenshots.map((img) => (
          <img
            src={img.image}
            alt="image 1"
            className="rounded-[2rem] h-full object-cover object-center"
          />
        ))}

        {data?.results[5].short_screenshots.map((img) => (
          <img
            src={img.image}
            alt="image 1"
            className="rounded-[2rem] h-full object-cover object-center"
          />
        ))}

        {data?.results[6].short_screenshots.map((img) => (
          <img
            src={img.image}
            alt="image 1"
            className="rounded-[2rem] h-full object-cover object-center"
          />
        ))} */}
      </Carousel>
    </div>
  );
};

export default CarouselImage;
