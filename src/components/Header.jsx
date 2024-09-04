import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { NavbarItems } from "./NavbarItems";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="fixed w-full bg-[#007bbf] z-50 py-2 lg:py-1">
      <header className="flex items-center justify-between">
        {!isSearchOpen ? (
          <>
            <div className="flex items-center">
              <div className="md:hidden mr-4">
                <button onClick={toggleMenu} className="text-white text-2xl">
                  {isMenuOpen ? <IoIosClose /> : <IoIosMenu className="ml-3" />}
                </button>
              </div>
              <img className="w-12 " src={Logo} alt="logo" />
              <h4 className="title-font text-white text-xl ml-4">
                Fortview Suites
              </h4>
            </div>
            <div className="hidden md:flex ml-36">
              <ul className="flex mt-5  flex-wrap text-stone-50 font-semibold gap-8 items-center justify-center">
                {NavbarItems.map((item, index) => (
                  <NavLink
                    className="text-white text-base hover:text-blue-400"
                    to={item.url}
                    key={index}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            borderBottom: "8px solid white",
                            paddingBottom: "0px",
                            paddingRight: "5px",
                          }
                        : {
                            paddingBottom: "4px",
                            paddingRight: "5px",
                            borderBottom: "8px solid #007bbf",
                          }
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              {/* Search Icon */}
              <IoSearch
                className="text-white mr-4 text-xl cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
          </>
        ) : (
          <div className="bg-gray-200 w-full py-3">
            <div className="flex items-center justify-between px-6 w-9/12 ">
              <IoIosArrowRoundBack
                className="text-gray-800  text-3xl cursor-pointer "
                onClick={toggleSearch}
              />
              <div className="relative flex items-center w-[40rem]">
                <IoSearch className="absolute text-lg left-3 text-gray-700" />
                <input
                  type="text"
                  placeholder="Search this site"
                  className="w-full p-3 pl-14 text-black border border-white rounded-md shadow-lg outline-none"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-[#007bbf] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-3">
          <div className="flex justify-start mb-4">
            <button onClick={toggleMenu} className="text-white text-4xl">
              <IoIosClose />
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {NavbarItems.map((item, index) => (
              <NavLink
                className={`text-white text-base pl-24 hover:text-blue-400 transition-opacity duration-300 ${
                  isMenuOpen ? `opacity-100 delay-${index * 100}` : "opacity-0"
                }`}
                to={item.url}
                key={index}
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderLeft: "10px solid white",
                        paddingBottom: "1px",
                      }
                    : {
                        paddingBottom: "1px",
                        borderBottom: "10px solid transparent",
                      }
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
