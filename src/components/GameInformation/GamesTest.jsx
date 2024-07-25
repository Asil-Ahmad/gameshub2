import React from "react";
import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";

const GamesTest = () => {
  const { data, isFetching } = useGetGamesQuery();
  console.log("Game Data", data?.results);
  if (isFetching) {
    return (
      <Spinner className="flex items-center justify-center h-16 w-16 text-gray-300/50" />
    );
  }
  return (
    <div>
      {data?.results[0].short_screenshots.map((img) => (
        <img src={img.image} alt="" srcset="" />
      ))}
    </div>
  );
};

export default GamesTest;
