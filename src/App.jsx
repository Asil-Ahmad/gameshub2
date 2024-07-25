import React, { useState } from "react";

import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import { Routes, Route } from "react-router-dom";
import GameInformation from "./components/GameInformation/GameInformation";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Trailer from "./components/Trailer/Trailer";
import { Alert } from "@material-tailwind/react";

import { useLocation } from "react-router-dom";
import Profile from "./components/Profile";
import ProductList from "./components/Cart/ProductList";
import Cart from "./components/Cart/Cart";
import Preorder from "./components/Preorder";
import Cartdummy from "./components/Cart/Cartdummy";
import Payment from "./components/Cart/Payment";
import GamesGenres from "./components/GamesGenres/GamesGenres";
import GamesGenresById from "./components/GamesGenres/GamesGenresById";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // const [show, setShow] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isItemPresent = false;
    cartItems.forEach((product) => {
      if (item.id === product.id) isItemPresent = true;
    });
    if (isItemPresent) {
      setWarning(!warning);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCartItems([...cartItems, item]);
    console.log("Hello", cartItems);
  };

  const location = useLocation();
  const showNavbar = [
    "/null",
    "/sarah",
    "/mario",
    "/kratos",
    "/games",
    "register",
    "/products",
    "/cart",
    "/cartdummy",
    "/payment",
    "/genres",
  ].includes(location.pathname);

  const Homepage = () => {
    return (
      <div>
        <Preorder />
        <Hero />
        <Hero2 />
        <Trailer />
      </div>
    );
  };

  return (
    <main className={`absoulte w-full bg-gray-900 ${darkMode ? "dark" : ""}`}>
      {showNavbar && <Navbar size={cartItems} />}
      <button
        className="fixed bottom-4 z-10 right-4 
        text-white bg-gray-800 dark:hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-4
          font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
         hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
        "
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/:id" element={<Homepage />}></Route>
        <Route path="/games" element={<Games />}></Route>
        {/* <Route path="/products" element={<Products />}></Route> */}
        <Route path="/games/:id" element={<GameInformation />}></Route>
        <Route
          path="/products"
          element={<ProductList handleClick={handleClick} />}
        ></Route>
        {/* <Route
          path="/cart/payment"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          // cartItems to add and setCartItems to remove
        ></Route> */}
        <Route
          path="/cart"
          element={
            <Cartdummy cartItems={cartItems} setCartItems={setCartItems} />
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <Payment cartItems={cartItems} setCartItems={setCartItems} />
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="/genres" element={<GamesGenres />}></Route> */}
        <Route path="/genres/:id" element={<GamesGenresById />}></Route>
      </Routes>
      {warning && alert("Item already added in your cart")}
    </main>
  );
};

export default App;
