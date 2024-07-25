import React from "react";
import { ps } from "../assets/icons";
import ProfileCard from "../constant/ProfileCard";

const Profile = () => {
  
  return (
    
    <section
      className=" animate-fade animate-once animate-duration-1000 animate-delay-500 animate-ease-in  
      dark:bg-[url('./assets/icons/mainbackground.jpg')] bg-[url('./assets/icons/mainbackgrounddark.jpg')] bg-cover  w-full flex  
      min-h-screen"
    >
      <div className="flex items-center flex-col justify-center w-full m-auto">
        <img
          src={ps}
          alt=""
          width={500}
          className="animate-fade dark:invert-0 invert  animate-once animate-delay-1000 animate-ease-linear"
        />
        <div
          className="flex  flex-wrap mt-10 gap-10  p-5
        animate-fade-up animate-once animate-delay-100 animate-ease-linear
        items-center justify-center "
        >
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default Profile;
