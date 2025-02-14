import React from 'react'
import { Github, LinkedIn, Resume } from '@/components/Icons'
import Link from 'next/link'

const PROPS = {
  target: '_blank',
  rel: 'noreferrer noopener',
  className: 'p-2 rounded-md hover:bg-white',
}

const Socials = () => {
  return (
    <>
      <Link href="https://github.com/yewyewxd" {...PROPS}>
        <Github className="sm:size-8 size-7" />
      </Link>

      <Link href="https://www.linkedin.com/in/yewyewxd" {...PROPS}>
        <LinkedIn className="sm:size-8 size-7" />
      </Link>

      <Link href="/resume.pdf" {...PROPS}>
        <Resume className="sm:size-8 size-7" />
      </Link>
    </>
  )
}

export default Socials
