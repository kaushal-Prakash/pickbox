"use client";
import { Logo } from "../Components";
import { BiSearchAlt } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Link from "next/link";
import "./Navbar.css";

function Navbar() {
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
          className="flex mx-3 w-fit p-2 rounded-xl bg-light-cream gap-2 items-center"
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
        <div className="flex">
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
          className="flex justify-center items-center bg-light-cream px-3 rounded-md text-dark-olive-green font-bold"
          id="cart-btn"
        >
          <Link href="/cart" className="flex">
            <LiaShoppingCartSolid size={22} id="cart-icon" />
            <p className="ml-1">Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
