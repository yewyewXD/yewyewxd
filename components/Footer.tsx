import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container pt-12 pb-11">
        <div className="mb-8 flex items-center justify-center">
          <Link
            href="https://github.com/yewyewxd"
            target="_blank"
            className="flex justify-center items-center mx-4 w-11 h-11 rounded-lg hover:bg-white"
          >
            <Image
              className="h-auto"
              src="/images/icon_github.svg"
              alt="Github"
              height={32}
              width={32}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yewyewxd"
            target="_blank"
            className="flex justify-center items-center mx-4 w-11 h-11 rounded-lg hover:bg-white"
          >
            <Image
              className="h-auto"
              src="/images/icon_linkedin.svg"
              alt="LinkedIn"
              height={32}
              width={32}
            />
          </Link>
        </div>

        <div className="text-sm py-3 px-2 text-footer text-center">
          Copyright © 2024 Kang Wei. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
