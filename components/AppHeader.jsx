import React from "react";
import navItems from "../json/navItems.json";
import Link from "next/link";

const AppHeader = () => {
  return (
    <header className="mt-4">
      <div className="container flex justify-between items-center">
        <div className="section-title">yewyewXD</div>

        <nav className="flex items-center">
          {navItems.map((navItem) => (
            <div
              className={navItem.subLinks ? "NavItemExpand relative" : ""}
              key={navItem.link}
            >
              <Link href={navItem.link} passHref>
                <span className="py-4 px-5 flex items-center cursor-pointer">
                  {navItem.name}
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
