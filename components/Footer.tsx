import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Github, LinkedIn, Resume } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container pt-12 pb-11">
        <div className="mb-8 flex items-center justify-center gap-8">
          <Link
            href="https://github.com/yewyewxd"
            target="_blank"
            className="p-1 rounded hover:bg-white hover:opacity-70"
          >
            <Github className="sm:w-8 sm:h-8 w-7 h-7" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yewyewxd"
            target="_blank"
            className="p-1 rounded hover:bg-white hover:opacity-70"
          >
            <LinkedIn className="sm:w-8 sm:h-8 w-7 h-7" />
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="p-1 rounded hover:bg-white hover:opacity-70"
          >
            <Resume className="sm:w-8 sm:h-8 w-7 h-7" />
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
