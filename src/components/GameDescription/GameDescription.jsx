import { Spinner, Typography } from "@material-tailwind/react";

import { useGetGameQuery } from "../../services/RAWG";

import { Link, useParams } from "react-router-dom";

import React from "react";
const GameDescription = () => {
  const { id } = useParams();
  //console.log(id);
  const { data, isFetching } = useGetGameQuery(id);
  //console.log("Game Description", data.description_raw);

  if (isFetching) {
    return <Spinner className="h-24 w-24" />;
  }

  //const filteredResults = data?.filter((result) => result.id.toString() === id);
  return (
    <div className="text-start ">
      <Typography variant="h5" color="gray">
        {data.description_raw.split("Español")[0]}
      </Typography>
    </div>
  );
};

export default GameDescription;
