import React from "react";

import { Rating, Typography, Spinner, B} from "@material-tailwind/react";

import { useGetGameQuery } from "../../services/RAWG";

import { Link, useParams } from "react-router-dom";

import ImageGallery from "../ImageGallery/ImageGallery";
import GameDescription from "../GameDescription/GameDescription";
import { fire } from "../../assets/icons";
import Smallbar from "../Smallbar";

const GameInformation = () => {
  const { id } = useParams();
  //console.log(id);
  const { data, isFetching } = useGetGameQuery(id);
  console.log("Single GameData", data);

  // const [active, setActive] = useState();

  // useEffect(() => {
  //   // Check if data is available and then update state
  //   if (data && data.background_image) {
  //     setActive(data.background_image);
  //   }
  // }, [data]); // Dependency on data means this runs when data changes

  if (isFetching) {
    return (
      <Spinner className="flex items-center justify-center h-16 w-16 a-auto text-gray-300/50" />
    );
  }
  return (
    <> 
    <Smallbar/>
      <section className="">
        <div className=" flex w-full flex-col max-container bg-gradient-to-t from-gray-700">
          <img src={data.background_image} alt="" />
          <div className=" p-4 flex flex-row justify-evenly items-center object-contain  ">
            <img
              src={data.background_image}
              alt=""
              className="size-[7rem] object-cover object-center rounded-2xl shadow-[5px_5px_0px_0px_rgba(23,23,21)] 
           
            "
            />
            <div>
              <Typography variant="h6" color="white" className="font-[600]">
                {data.name}
              </Typography>

              <Typography color="gray" className="font-normal">
                <div className="flex items-center justify-center gap-2 font-bold text-white">
                  <Rating value={Math.trunc(data.rating)} readonly />
                  {Math.floor(data.rating * 10) / 10}
                </div>
              </Typography>

              <button className="flex flex-row items-center gap-1 bg-gray-400 rounded-sm px-2  text-[12px] font-semibold mt-2 ">
                <img src={fire} alt="" width={10} className="animate-pulse" />
                {data.added_by_status.playing} Live
              </button>
            </div>
          </div>

          <Typography variant="h5" color="white">
            Screenshots
          </Typography>
          <div className="mt-5 ">
            <ImageGallery />
          </div>
          <div className="mt-5">
            <Typography variant="h5" color="white">
              Game Description
            </Typography>
          </div>
        </div>
      </section>
    </>
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
