import React from "react";
import navItems from "../json/navItems.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
  return (
    <header className="mt-4">
      <div className="container flex justify-between items-center">
        <div className="section-title">yewyewXD</div>

        <nav className="flex items-center font-medium">
          {navItems.map((navItem) => (
            <div
              className={navItem.subLinks ? "NavItemExpand relative" : ""}
              key={navItem.link}
            >
              <Link href={navItem.link} passHref>
                <span className="py-4 px-5 flex items-center cursor-pointer">
                  {navItem.name}
                  {navItem.subLinks && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="NavItemAccord w-2 ml-3"
                    />
                  )}
                </span>
              </Link>

              {navItem.subLinks && (
                <div className="NavDropdown opacity-0 cursor-pointer whitespace-nowrap absolute flex flex-col pointer-events-none z-50">
                  {navItem.subLinks.map((subLink) => (
                    <Link href={subLink.link} key={subLink.link} passHref>
                      <span>{subLink.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
