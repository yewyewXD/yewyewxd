import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Home, Mail, User } from './Icons'
import { useRouter } from 'next/router'

const circleButtonClass =
  'sm:h-[60px] sm:w-[60px] w-14 h-14 bg-white flex justify-center items-center rounded-full flex-shrink-0 relative transition-all duration-300 md:hover:scale-105 shadow-lg md:hover:shadow-xl select-none'
const circleButtonSizes = {
  height: 18,
  width: 18,
}

const NAV_LINKS = [
  {
    link: '/',
    name: 'Home',
    Icon: Home,
  },
  {
    link: '/about',
    name: 'About',
    Icon: User,
  },
  {
    link: '/contact',
    name: 'Contact',
    Icon: Mail,
  },
]

const Navbar = ({ hasBack }: { hasBack?: boolean }) => {
  const { pathname } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleShowMenu() {
    setIsMenuOpen((bool) => !bool)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`container sm:pt-7 pt-4 flex items-center ${
          hasBack ? 'justify-between' : 'justify-end'
        }`}
      >
        {hasBack && (
          <Link href="/" className={circleButtonClass} onClick={handleShowMenu}>
            <Image
              {...circleButtonSizes}
              src="/images/icon_arrowleft.svg"
              alt="Back button"
              className="h-auto"
            />
          </Link>
        )}

        <div className="relative flex justify-end">
          <button className={circleButtonClass} onClick={handleShowMenu}>
            <Image
              {...circleButtonSizes}
              src="/images/icon_close.svg"
              alt="Close button"
              className={`h-auto absolute ${
                isMenuOpen
                  ? 'opacity-100 transition-opacity duration-300'
                  : 'opacity-0'
              }`}
            />
            <Image
              {...circleButtonSizes}
              src="/images/icon_menu.svg"
              alt="Burger menu"
              className={`h-auto absolute ${
                isMenuOpen
                  ? 'opacity-0'
                  : 'opacity-100 transition-opacity duration-300'
              }`}
            />
          </button>

          <div
            className={`bg-white shadow-lg top-[72px] absolute p-2 rounded-xl w-64 text-lg transition-all duration-300 ${
              isMenuOpen
                ? 'scale-100 opacity-100'
                : 'scale-0 translate-x-24 -translate-y-6 opacity-0'
            }`}
          >
            {NAV_LINKS.map(({ Icon, link, name }) => (
              <Link
                key={link}
                href={link}
                className={`p-3 hover:bg-lightGrey rounded-lg flex items-center gap-3 ${
                  pathname === link
                    ? 'text-contentDark font-semibold'
                    : 'text-default'
                }`}
              >
                <Icon className="w-5 h-5" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
