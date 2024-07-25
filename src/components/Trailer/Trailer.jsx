import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { close, play } from "../../assets/icons";
import { Link } from "react-router-dom";

const Trailer = () => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section className="bg-[url('./assets/icons/trailer.png')] dark:bg-[url('./assets/icons/trailerDark.jpg')] animate-fade animate-once animate-duration-1000 bg-cover bg-no-repeat ">
      <div className=" flex flex-col justify-center items-center py-[10rem]" >
        <img
          src={play}
          alt=""
          width={120}
          className="hover:scale-110 transition"
          onClick={() => setOpenVideo(true)}
        />
        <h1 data-aos="fade-up" className="text-white font-bold animate-fade-up  text-[80px] uppercase tracking-[0.5rem] drop-shadow-2xl font-manrope ">
          FEEL IT NOW
        </h1>
        <div className=" mt-5 flex gap-5">
          <Link to="/games">
            <Button  className=" animate-fade-left  px-[3rem] py-4 bg-black text-white rounded-full">Games available now</Button>
          </Link>
          <a href="#comingsoon">
            <Button  className=" animate-fade-right  px-[3rem] py-4 bg-black text-white rounded-full">Coming soon</Button>
          </a>
        </div>
      </div>
      {openVideo && (
        <>
          <div className="bg-black top-0 left-0 fixed w-full h-full flex items-center justify-center">
            <iframe
              width="75%%"
              height="75%"
              className="fixed"
              allow="autoplay"
              allowFullScreen
              src="https://www.youtube.com/embed/x55lAlFtXmw"
              loading="lazy"
            ></iframe>
          </div>

          <button
            className="bg-white rounded-full fixed top-[5.25rem] right-[1rem] "
            onClick={() => setOpenVideo(false)}
          >
            <img src={close} alt="" width={32} />
          </button>
        </>
      )}
    </section>
  );
};

export default Trailer;
