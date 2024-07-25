import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { as4v, cyber, elder, genshin, god4v, jedi } from "../assets/games";
import { clickx } from "../assets/icons";
import { useUser } from "../constant/UserDetails";

const Hero = () => {
  const { id } = useParams();
  const { setUserId } = useUser();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    setUserId(id);
  }, [id, setUserId]);

  return (
    <section
      className="dark:bg-[url('./assets/icons/mainbackground.jpg')] animate-fade animate-once animate-duration-1000
      bg-[url('./assets/icons/mainbackgrounddark.jpg')] 
    bg-cover bg-center"
    >
      <div className="max-container px-0 font-marcellus pb-10  text-white flex flex-col">
        <h1 className="uppercase text-center  text-white dark:text-black pb-[1rem] text-4xl">
          Explore More Games
        </h1>
        <div className="bg-[url('./assets/icons/peakpx.jpg')] bg-cover bg-center flex w-full  ">
          <div
            className="bg-[url('./assets/games/ascreed.png')] relative hover:scale-105 hover:z-10 
            hover:customshadow
             duration-500 transition ease-in-out bg-cover bg-center flex box-content w-[65%] h-auto"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <video
              id="hero2"
              src={as4v}
              autoPlay
              muted
              loop
              controls={false}
              playsInline
              className="w-full h-full duration-500 transition ease-in-out object-cover"
            ></video>
            <div className="p-5 absolute flex items-start justify-end w-full flex-col m-auto h-full animate-fade-right animate-once animate-duration-500">
              {open && (
                <>
                  <h1 className="text-2xl bg-black/50 px-4 rounded-2xl tracking-widest">
                    Assassin's Creed Mirage
                  </h1>
                  <Link to="/games/845261"
                   
                    className="hover:scale-110 transition ease-in-out text-black font-semibold font-nunito glass text-sm hover:bg-white px-2 py-1 mt-2 rounded-3xl flex items-center gap-2"
                  >
                    <img
                      src={clickx}
                      width={25}
                      alt="icon"
                      className="bg-white invert rounded-full"
                    />
                   Explore
                  </Link>
                </>
              )}
            </div>
          </div>
          <div
            className="bg-[url('./assets/games/god.webp')] hover:z-10 relative hover:scale-105 
            duration-500 transition ease-in-out bg-cover bg-center flex w-[35%] "
            onMouseEnter={() => setOpen1(true)}
            onMouseLeave={() => setOpen1(false)}
          >
            <video
              src={god4v}
              autoPlay
              muted
              loop
              controls={false}
              playsInline
              className="w-full hover:customshadow object-cover"
            ></video>
            {open1 && (
              <div className="p-5 absolute flex items-start justify-end w-full flex-col m-auto h-full animate-fade-right animate-once animate-duration-500">
                <h1 className="text-2xl bg-black/50 px-4 rounded-2xl tracking-widest">
                  God of War Ragnarok
                </h1>
                <Link to="/games/494384">
                <button className="hover:scale-110 transition ease-in-out text-black font-semibold font-nunito text-sm hover:bg-white glass px-2 py-1 mt-2 rounded-3xl flex items-center gap-2">
                  <img
                    src={clickx}
                    width={25}
                    alt="icon"
                    className="bg-white invert rounded-full"
                  />
                  Explore
                </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <Link to="/games/793647" className="flex">
            <img
              src={jedi}
              alt="jedi"
              className="animate-ease-linear hover:scale-105 object-cover object-center cursor-pointer"
            />
          </Link>
          <Link to="/games/846303" className="flex">
            <img
              src={cyber}
              alt="cyber"
              className="hover:scale-105 object-cover object-center cursor-pointer"
            />
          </Link>
          <Link to="/games/326243" className="flex">
            <img
              src={elder}
              alt="elder"
              className="hover:scale-105 object-cover object-center cursor-pointer"
            />
          </Link>
          <div className="relative">
            <img
              src={genshin}
              alt="genshin"
              className="blur object-cover w-full h-full cursor-pointer object-center"
            />
            <p className="absolute h-full w-full m-auto flex items-center justify-center bottom-0 right-0  text-white tracking-wide shadow-2xl text-3xl font-semibold">
              Explore More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
