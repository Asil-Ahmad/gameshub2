import React from "react";
import { Typography } from "@material-tailwind/react";
import "swiper/css";
import GamesCard1 from "../GamesCard/GamesCard1";
import Activity from "../../constant/Activity";
import CarouselImage from "../Carousel/CarouselImage";
import PaidGames from "../PaidGames/PaidGames";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  console.log("product", id);
  return (
    <section className="dark:bg-[url('./assets/icons/mainbackground.jpg')]
     bg-[url('./assets/icons/mainbackgrounddark.jpg')]
     bg-cover full min-h-screen flex items-start">
      <div className="flex w-full flex-col mt-[4rem] max-container p-4">
        <Typography
          variant=""
          className="text-3xl font-semibold   dark:text-gray-900 text-blue-gray-100"
        >
          Games
        </Typography>

        <Activity />
        <Typography  className="text-[12px]  dark:text-gray-900 mb-1 text-blue-500">
          WATCH IT NOW
        </Typography>
        <CarouselImage />
        <GamesCard1 />
        <div className="my-2 border-b-[1px] border-gray-500" />
        <div className="flex  items-center justify-between">
          <Typography
            variant="h6"
            className="text-2xl mb-1   dark:text-gray-900 text-blue-gray-100"
          >
            Paid Games
          </Typography>

          <Typography color="blue" className="text-[15px] mb-1">
            See all
          </Typography>
        </div>
        <PaidGames />
      </div>
    </section>
  );
};

export default Products;
