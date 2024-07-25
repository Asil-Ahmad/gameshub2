import React from "react";
import { Link } from "react-router-dom";
import { profile1 } from "../../assets/profilepic";
import GamesGenres from "../GamesGenres/GamesGenres";
import { useDispatch } from "react-redux";
import { sidebaricon } from "../../assets/icons";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="text-white flex flex-col w-[20%] 
     bg-[#0F3845] fixed top-[74px] h-[100vh] left-0 z-10 lg-max:hidden"
      >
        <div className="p-5 flex items-center  ">
          <img
            src={profile1}
            alt="User Avatar"
            className="w-[60px] rounded-full"
          />
          <div className="ml-4">
            <p className="text-[15px] font-manrope uppercase tracking-wider font-bold">Sarah</p>
          </div>
        </div>
        <nav className=" overflow-auto px-4 py-2 space-y-2">
          <GamesGenres />
          <button>Logout</button>
        </nav>
        <div className="p-10"></div>
        <div></div>
      </div>
      <div className="fixed top-[76px] left-0  lg:hidden">
        <img
          src={sidebaricon}
          alt=""
          width={50}
          className="invert"
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className="text-white bg-[#0F3845]">
           <div className="p-5 flex items-center  ">
          <img
            src={profile1}
            alt="User Avatar"
            className="w-[60px] rounded-full"
          />
          <div className="ml-4">
            <p className="text-[15px] font-manrope uppercase tracking-wider font-bold">Sarah</p>
          </div>
        </div>
            <nav className=" overflow-auto px-4 py-2 space-y-2">
              <GamesGenres />
              <button>Logout</button>
            </nav>
            <div className="p-10"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
