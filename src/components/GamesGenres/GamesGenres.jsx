import React from "react";
import { useGetGameGenreQuery } from "../../services/RAWG";
import { Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { selectedGenreOrCategory } from "../features/currentGenreOrCategory";

const GamesGenres = () => {
  const { data, isFetching } = useGetGameGenreQuery();
  // console.log("Get Genres", data?.results);

  const dispatch = useDispatch();
  const { genreOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  // console.log("SELECTOR", genreOrCategoryName);

  if (isFetching) {
    return (
      <Spinner className=" w-full flex  justify-center text-gray-300/50" />
    );
  }
  return (
    <div>
      {data?.results?.map((item) => (
        <div>
          <button
            key={item.id}
            className="flex w-full font-[300] tracking-wide gap-4 items-center 
           font-manrope text-[20px] p-2 hover:bg-gray-700 rounded-xl"
            onClick={() => dispatch(selectedGenreOrCategory(item.id))}
          >
            <img
              src={item.image_background}
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-2xl"
            />
            {item.name}
          </button>
          <hr className="  border-1 border-gray-500" />
        </div>
      ))}
    </div>
  );
};

export default GamesGenres;
