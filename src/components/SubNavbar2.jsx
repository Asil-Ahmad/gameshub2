import React, { useState, useEffect } from "react";

const SubNavbar2 = () => {
  // const [popUp, setPopUp] = useState(false);

  // useEffect(() => {
  //   setPopUp(true);
  //   setTimeout(() => {
  //     setPopUp(false);
  //   },null);
  // }, []);
  return (
    <>
      {/* {popUp ? ( */}
      <div className="p-4 w-full bg-[#333336]   ">
        <div className="flex justify-between items-center ">
          <ul className=" flex flex-1 justify-evenly items-center gap-16 max-lg:hidden ">
            <a href="" className="text-gray-300 font-sans hover:text-white">
              Get 3 months of Arcade Mode free when you buy a new games for PC ,
              Playstation , or X-Box.*{" "}
              <span className=" text-blue-500 hover:underline">
                Learn more{" "}
              </span>{" "}
              <span className=" text-blue-500">&#62;</span>
            </a>
          </ul>
        </div>
      </div>
      {/* ) : (
        console.log("Error")
      )} */}
    </>
  );
};

export default SubNavbar2;
