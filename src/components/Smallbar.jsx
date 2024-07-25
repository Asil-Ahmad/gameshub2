import React from "react";
import { navLinks } from "../constant";
import { Back, hamburger } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  Button,
  Input,
} from "@material-tailwind/react";

const Smallbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className=" w-full flex  ">
        <div className=" w-full flex p-4  rounded-2xl justify-between items-center max-container ">
          <Link
            to="/games"
            className=" transition hover:scale-75 items-center  bg-black/50 justify-center flex  p-1 rounded-full"
          >
            <img src={Back} alt="" width={20} />
          </Link>

          <div className="px-2  ">
            <Menu>
              <MenuHandler>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="white"
                  className="w-7 h-7 bg-black/50 rounded-full"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </MenuHandler>
              <MenuList className="outline-none   ">
                {navLinks.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.href}
                    className={({ isActive }) => {
                      return (
                        "font-marcellus  rounded-xl text-[18px] p-2 flex flex-col mt-2 outline-none  " +
                        (isActive ? "  text-white bg-gray-700" : "")
                      );
                      // console.log(item.href + " " + isActive);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}

                <NavLink
                  className="bg-black flex items-center justify-center font-marcellus rounded-xl p-2 text-[18px] text-white mt-2"
                  to="/"
                >
                  Logout
                </NavLink>
              </MenuList>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Smallbar;
