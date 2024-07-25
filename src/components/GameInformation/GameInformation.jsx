import React, { useState, useEffect } from "react";
import { Rating, Typography, Spinner } from "@material-tailwind/react";
import { useGetGameQuery } from "../../services/RAWG";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "../ImageGallery/ImageGallery";
import Smallbar from "../Smallbar";
import { platformsIcons } from "../../assets/platforms";
import { fire } from "../../assets/icons";

const GameInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

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
    return <Spinner className="h-16 w-16  text-gray-300/50" />;
  }
  return (
    <>
      <section
        style={{ backgroundImage: `url(${data.background_image})` }}
        className={`bg-cover   bg-center bg-no-repeat bg-[image:var(backgroundImage)] bg-fixed animate-fade `}
      >
        <Smallbar />
        <div>
          <div className="relative py-[20rem] flex flex-col items-center justify-center">
            <h1 className=" animate-fade-up delay-100 text-5xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)] text-white tracking-widest   text-center font-bold font-manrope">
              {data.name}
            </h1>
            <p className=" animate-fade-up delay-200 text-xl mt-5  [text-shadow:_0_10px_20px_rgb(0_0_0_/_100%)] text-white  text-center tracking-wider font-manrope">
              {data.description_raw.split(".")[0]}.
            </p>

            <div className="absolute bottom-0 flex items-center flex-col">
              <p className=" animate-fade-up delay-300 text-xl mt-5  [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)] text-white  text-center tracking-wider font-manrope">
                Available on
              </p>
              <div className="flex flex-row animate-fade-up delay-400 gap-10 items-baseline glass  justify-center mt-5 p-2">
                {data.parent_platforms.map((item) => (
                  <img
                    src={platformsIcons[item.platform.slug]}
                    alt=""
                    className="object-contain objec w-[50px] invert "
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-container">
        <p className="text-white text-lg font-semibold tracking-wider font-manrope">
          Screenshots
        </p>
        <div className="pt-5 ">
          <ImageGallery />
        </div>

        <div className="pt-5 pb-5">
          <article>
            <h3 className="text-white text-lg font-semibold tracking-wider font-manrope">
              About
            </h3>
            <p className="animate-fade-up delay-200 text-sm mt-5 tracking-wider text-gray-100 font-manrope">
              {" "}
              {data?.description_raw.split("Español")[0]}
            </p>
          </article>
        </div>

        <h3 className="text-gray-600 text-lg font-semibold tracking-wider font-manrope">
          Genre
        </h3>
        <div className="flex gap-2 pt-2">
          {data.genres.map((genre) => (
            <a className="text-white border-2 p-1 cursor-pointer rounded-lg px-2 select-none border-gray-200 hover:underline no-underline">{genre.name}</a>
          ))}
        </div>

        {/* 1/2 */}
        <div></div>
      </div>
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
