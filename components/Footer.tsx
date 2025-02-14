import React from 'react'
import Socials from './Socials'

const YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container pt-12 pb-11">
        <div className="mb-8 flex items-center justify-center gap-8">
          <Socials />
        </div>

        <div className="text-sm py-3 px-2 text-footer text-center">
          Copyright © {YEAR} Kang Wei. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
