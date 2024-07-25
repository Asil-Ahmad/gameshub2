import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const SubNavbar = () => {
  return (
    <div className="max-container w-full bg-black  ">
      <div className="flex justify-between items-center ">
        <ul className=" flex flex-1 justify-evenly items-center gap-16 max-lg:hidden ">
          <a
            href=""
            className="font-sans text-2xl text-gray-300 font-semibold hover:text-white"
          >
            Arcade Mode
          </a>
          <div className="text-white flex items-center  gap-5">
            <a href="/">Overview</a>
            <Typography
              variant="h6"
              color="white"
              className="flex items-center text-sm font-bold"
            >
              How-To-Film
            </Typography>

            <Button size="sm"  className="bg-orange-600  px-3 rounded-full">
              Try it free
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
