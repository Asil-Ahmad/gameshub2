import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { navLinks } from "../constant";
import { cart, hamburger } from "../assets/icons";
import { useUser } from "../constant/UserDetails";
import { profile1 } from "../assets/profilepic";

const Navbar = ({ size }) => {
  const { userId } = useUser();

  return (
    <header className=" fixed z-30 bg-gray-900  w-full">
      <nav className="max-container">
        <div className="flex m-auto  w-full items-center justify-between">
          <Link
            to={`/${userId}`}
            className=" font-marcellus tracking-[0.5rem] text-gray-300 text-2xl font-extrabold"
          >
            GAMEHUB
          </Link>
          <div className="hidden lg:block">
            <div className="flex w-full items-center gap-7 text-white">
              {navLinks.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.href}
                  className={({ isActive }) =>
                    "font-marcellus flex items-center gap-2 transition text-[18px] px-5 rounded-2xl" +
                    (isActive
                      ? " text-white scale-110 bg-gray-700"
                      : " bg-gray-700/10")
                  }
                >
                  <img
                    src={item.img}
                    width={20}
                    alt={item.label}
                    className="object-contain  "
                  />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/cart"
              className="flex items-center p-1 rounded-xl"
            >
              <Badge content={size.length}>
                <img
                  src={cart}
                  alt=""
                  width={30}
          
                />
              </Badge>
            </Link>

            <Link to={`/${userId}`} className="hidden lg:block">
              <Button className="flex items-center bg-black gap-2">
                <img
                  src={profile1}
                  width={18}
                  alt="Profile"
                  className="bg-white rounded-full"
                />
                {userId}
              </Button>
            </Link>
            <Link to="/" className="hidden lg:block">
              <Button className="bg-gray-300 text-black">Logout</Button>
            </Link>
            <div className="block lg:hidden">
              <Menu>
                <MenuHandler>
                  <img
                    src={hamburger}
                    width={25}
                    height={25}
                    alt="Menu"
                    className="invert object-contain"
                  />
                </MenuHandler>
                <MenuList className="outline-none">
                
                  {navLinks.map((item) => (
                    <NavLink
                      to={item.href}
                      key={item.href}
                      className={({ isActive }) =>
                        "font-marcellus rounded-xl text-[18px] p-2 flex flex-col mt-2" +
                        (isActive ? " text-white bg-gray-700" : "")
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/"
                    className="bg-black flex items-center justify-center font-marcellus rounded-xl p-2 text-[18px] text-white mt-2"
                  >
                    Logout
                  </NavLink>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
