import React from 'react'

const PrimaryBtn = ({ children }) => {
  return (
    <button className="primaryButton py-4 px-12 rounded-full bg-primary text-lg font-bold z-50">
      {children}
    </button>
  )
}

export default PrimaryBtn
