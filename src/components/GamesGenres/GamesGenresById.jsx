import React from "react";
import { useGetGameGenreByIDQuery } from "../../services/RAWG";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const GamesGenresById = () => {
  const { id } = useParams();
  console.log("Game Genre By id", id);
  const { data, isFetching } = useGetGameGenreByIDQuery(id);
  console.log("Get Genres", data);
  if (isFetching) {
    return (
      <Spinner className=" w-full flex  justify-center text-gray-300/50" />
    );
  }

  return (
    <div>
      
    </div>
  );
};

export default GamesGenresById;
