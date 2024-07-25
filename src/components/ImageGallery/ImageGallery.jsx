import React, { useState } from "react";

import { Spinner } from "@material-tailwind/react";
import { useGetGamesScreenshotQuery } from "../../services/RAWG";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { close } from "../../assets/icons";

const ImageGallery = ({ setActive }) => {
  const { id } = useParams();
  const { data, isFetching } = useGetGamesScreenshotQuery(id);
  // console.log("Here", data);

  const [open, setOpen] = useState(false);

  const openImage = (item) => {
    setOpen(item);
  };
  if (isFetching) {
    return <Spinner className="h-24 w-24" />;
  }

  // const filteredResults = data?.results?.filter(
  //   (result) => result.id.toString() === id
  // );
  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={false}
      spaceBetween={10}
      grabCursor={false}
      className="mySwiper"
    >
      <div className="flex items-center gap-2 overflow-auto justify-start cursor-pointer ">
        {data.results.map((item) => (
          <SwiperSlide key={item.image}>
            <img
              src={item.image}
              alt=""
              onClick={() => openImage(item.image)}
              className="hover:scale-110 "
            />
          </SwiperSlide>
        ))}
      </div>
      {open && (
        <>
          <div className=" glass top-0 left-0  fixed w-full h-full  flex items-center justify-center">
            <iframe
              width="75%"
              height="75%"
              className="fixed"
              allow="autoplay"
              scrolling="no"
              src={open}
              loading="lazy"
            ></iframe>
          </div>

          <button
            className="bg-white rounded-full fixed top-[5.25rem] right-[1rem] "
            onClick={() => setOpen(false)}
          >
            <img src={close} alt="" width={32} />
          </button>
        </>
      )}
    </Swiper>
  );
};

export default ImageGallery;
