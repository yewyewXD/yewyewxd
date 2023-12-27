import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleShowMenu() {
    setIsMenuOpen((bool) => !bool)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container py-7 flex justify-end items-center">
        <div className="relative flex justify-end">
          <button
            className="h-[60px] w-[60px] bg-white myShadow flex justify-center items-center rounded-full flex-shrink-0 relative transition-transform duration-300 md:hover:scale-105"
            onClick={handleShowMenu}
          >
            <Image
              height={20}
              width={20}
              src="/images/icon_close.svg"
              alt="Close button"
              className={`absolute ${
                isMenuOpen
                  ? 'opacity-100 transition-opacity duration-300'
                  : 'opacity-0'
              }`}
            />
            <Image
              height={20}
              width={20}
              src="/images/icon_menu.svg"
              alt="Burger menu"
              className={`absolute ${
                isMenuOpen
                  ? 'opacity-0'
                  : 'opacity-100 transition-opacity duration-300'
              }`}
            />
          </button>

          <div
            className={`bg-white navShadow top-[72px] absolute p-2 rounded-xl w-64 text-lg transition-all duration-300 ${
              isMenuOpen
                ? 'scale-100 opacity-100'
                : 'scale-0 translate-x-24 -translate-y-6 opacity-0'
            }`}
          >
            <Link
              href="/"
              className="p-3 hover:bg-lightGrey block rounded-lg font-bold"
            >
              <span className="mr-4">h</span>
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
