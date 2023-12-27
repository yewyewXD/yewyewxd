import React from 'react'

const PrimaryBtn = ({ children }) => {
  return (
    <button className="primaryButton py-4 px-12 rounded-full bg-primary text-lg font-semibold z-50 transition-transform duration-300 hover:scale-105 navShadow select-none">
      {children}
    </button>
  )
}

export default PrimaryBtn
