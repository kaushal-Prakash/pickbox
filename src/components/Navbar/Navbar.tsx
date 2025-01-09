"use client";
import { Logo } from "../Components";
import { BiSearchAlt } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Link from "next/link";
import "./Navbar.css";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    console.log("search clicked");
    setSearchOpen((prev) => !prev);
  };

  return (
    <div
      className="flex fixed justify-between w-full px-3 h-12 sm:h-14 p-1 items-center rounded-b-lg from-light-green via-green-500 to-olive-green bg-gradient-to-r"
      id="navbar"
    >
      <div className="-translate-y-1">
        <Logo />
      </div>
      <div className="flex">
        <div
          className={`hidden sm:flex mx-3 w-fit p-2 rounded-xl bg-light-cream gap-2 items-center ${
            searchOpen ? "flex" : "hidden"
          }`}
          id="search-box"
        >
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-light-cream pl-2 font-semibold text-light-green"
          />
          <button>
            <BiSearchAlt size={22} id="search-icon" />
          </button>
        </div>
        <div className="hidden sm:flex">
          <button
            className="bg-orange-200 text-dark-olive-green px-4 font-semibold rounded-md ml-2"
            id="login-btn"
          >
            Login
          </button>
          <button
            id="logout-btn"
            className="bg-red-400 text-white px-4 font-semibold rounded-md mx-3"
          >
            Logout
          </button>
        </div>
        <div
          className="hidden sm:flex justify-center items-center bg-light-cream px-3 rounded-md text-dark-olive-green font-bold"
          id="cart-btn"
        >
          <Link href="/cart" className="flex">
            <LiaShoppingCartSolid size={22} id="cart-icon" />
            <p className="ml-1">Cart</p>
          </Link>
        </div>
        <div className="flex sm:hidden justify-center items-center mx-2">
          <button onClick={toggleMenu} id="menu-btn" className="z-50">
            <FaBarsStaggered
              size={22}
              className={`${menuOpen ? "hidden" : ""}`}
            />
            <RxCross1 size={22} className={`${menuOpen ? "" : "hidden"}`} />
          </button>
        </div>
        <div className="flex sm:hidden justify-center items-center mx-2">
          <button onClick={toggleSearch} id="search-btn" className="z-50">
            <BiSearchAlt size={22} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="flex flex-col sm:hidden h-screen absolute top-0 right-0 justify-center items-center w-1/2 text-2xl bg-light-cream p-4 rounded-l-lg text-left shadow-lg"
          id="menu"
        >
          <ul className="flex flex-col gap-4">
            <button
              onClick={toggleSearch}
              className="text-dark-olive-green font-semibold"
            >
              Search
            </button>
            <button className="text-dark-olive-green font-semibold">
              Login
            </button>
            <button className="text-dark-olive-green font-semibold">
              Logout
            </button>
            <Link
              href="/cart"
              className="text-dark-olive-green flex gap-2 justify-center items-center font-semibold"
            >
              <LiaShoppingCartSolid size={28} id="cart-icon" />
              Cart
            </Link>
          </ul>
        </div>
      )}
      {searchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-40"
            onClick={toggleSearch}
          ></div>
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div
              className="flex p-2 rounded-xl gap-2 items-center w-2/3 bg-light-cream"
              id="menu-search-box"
            >
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-light-cream pl-2 font-semibold text-light-green w-full"
              />
              <button onClick={toggleSearch}>
                <RxCross1 size={22} />
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Navbar;
