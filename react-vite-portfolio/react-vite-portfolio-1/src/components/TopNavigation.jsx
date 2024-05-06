import React from "react";
import { Link } from "react-scroll";
import { sections } from "../constants/constants";

const TopNavigation = () => {
  return (
    <>
      <nav className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container mx-auto flex justify-between">
          <Link to="section1">Logo</Link>
          <ul className="flex items-center">
            {sections.map((section) => (
              <li key={section.id} className="group pl-6">
                <Link
                  activeclass="active"
                  className={`font-raleway font-semibold uppercase cursor-pointer ${section.color}`}
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span className="pt-0.5">{section.text}</span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;
