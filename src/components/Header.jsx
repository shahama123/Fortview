import React from "react";
import { IoSearch } from "react-icons/io5";
import { NavbarItems } from "./NavbarItems";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { Menubar } from "primereact/menubar";

const Header = () => {
  return (
    <div className="fixed w-full bg-[#007bbf] z-50">
      <header className="flex items-center justify-between">
        <div className="pr-20 mr-7 flex items-center justify-between">
          <img className="w-12 ml-5" src={Logo} alt="logo" />
          <h4 className="text-white text-xl ml-4">Fortview Suites</h4>
        </div>
        <div className="ml-36">
          <ul className="flex mt-5 flex-wrap text-stone-50 font-semibold gap-8   items-center justify-center">
            {NavbarItems.map((item, index) => (
              <NavLink
                className="text-white text-base hover:text-blue-400"
                to={item.url}
                key={index}
                style={({ isActive }) =>
                  isActive
                    ? { borderBottom: "8px solid white", paddingBottom: "4px" }
                    : {
                        paddingBottom: "4px",
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
          {/* <input
            type="text"
            className="bg-transparent border rounded-md backdrop-blur-md text-white px-3 p-1"
          /> */}
          <IoSearch className="text-white mr-4 text-xl" />
        </div>
      </header>
    </div>
  );
};

export default Header;
