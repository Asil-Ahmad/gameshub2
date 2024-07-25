import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@material-tailwind/react";
import { ac_shadows_logo } from "../assets/games";

const Preorder = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // TODO: Implement gsap text animation
  useGSAP(() => {
    gsap.to("#mainText", {
      ease: "power1.inOut",
      opacity: 1,
      delay: 0.5,
      y: 0,
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <section
      id="mainText"
      className=" opacity-0 bg-[url('./assets/games/ac_shadows.avif')] dark:bg-[url('./assets/games/aswalldark.jpg')] bg-cover bg-center h-[100vh] w-full flex"
    >
      <div className="max-container relative flex items-center justify-center flex-col">
        {/* <div className="pt-20 pb-10 animate-fade-down animate-ease-linear">
         */}
        <div className="para pt-20 opacity-0 pb-10">
          <h1 className="text-5xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)] text-white tracking-widest   text-center font-bold font-marcellus">
            ASSASSIN'S CREED SHADOWS RELEASES NOVEMBER <br />
            15TH
          </h1>
          <p className="para opacity-0 text-xl mt-5  [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)] text-white  text-center tracking-wider font-marcellus">
            Become a legendary Samurai and a Shinobi Assassin in Feudal Japan
          </p>
        </div>

        <div className=" para opacity-0 flex gap-10 flex-wrap justify-center ">
          <a href="https://www.pcgamer.com/games/assassins-creed/the-assassins-creed-game-about-ninjas-in-feudal-japan-is-called-assassins-creed-shadows-full-reveal-coming-on-wednesday/">
            <Button className="  px-[3rem] py-4 bg-black text-white rounded-full">
              Learn More
            </Button>
          </a>
          <a href="https://www.youtube.com/watch?v=vovkzbtYBC8">
            <Button className="  px-[3rem] py-4 bg-black text-white rounded-full">
              Watch Trailer Now
            </Button>
          </a>
        </div>
        <div className="para opacity-0 absolute bottom-0 p-4">
          <img src={ac_shadows_logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Preorder;
