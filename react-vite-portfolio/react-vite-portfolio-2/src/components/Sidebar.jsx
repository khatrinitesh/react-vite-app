import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuSidebar } from "../constants/Constants";

const Sidebar = () => {
  const [btnToggle, setBtnToggle] = useState(false);

  const handleToggle = () => {
    setBtnToggle(!btnToggle);
  };

   // Function to handle navigation link click
   const handleNavClick = () => {
    // Close the sidebar when a navigation link is clicked
    setBtnToggle(false);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className={`transition-all rounded-[3px] duration-300 btnHamburger bg-primary  border-0 w-[30px] px-[3px] h-[30px] absolute top-[50%] translate-y-[-50%] outline-none right-[30px] active:bg-gray-700 z-[99999]  ${
          btnToggle ? "active" : ""
        }`}
      >
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] dark:bg-white bg-primaryD block relative top-[-7px]"></span>
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] dark:bg-white bg-primaryD block relative top-[0px]"></span>
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] dark:bg-white bg-primaryD block top-[7px] relative"></span>
      </button>
        <div
          className={`sidebar bg-secondaryL z-[9999] flex items-center justify-center transition-all duration-500  h-screen fixed top-[-100%]  right-0 w-full  ${btnToggle ? "dark:bg-primaryD !top-0 ": ""
          }`}
        >
          <ul className="w-full flex-col flex justify-center items-center ">
            {menuSidebar.map((section) => (
              <li key={section.id} className="group pl-6">
                <Link
                  activeclassname="active"
                  className={`font-raleway text-fs16 font-semibold uppercase cursor-pointer py-[5px] block ${section.color}`}
                  to={section.href}
                  offset={-70}
                  duration={500} onClick={handleNavClick}
                >
                  <span className="pt-0.5 dark:!text-white !text-primaryD">{section.text}</span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-hovergreen bg-defaultgreen"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
};

export default Sidebar;
