import React from 'react'

interface IProps {
  children: React.ReactNode
  onClick?: () => void
}

const PrimaryBtn = ({ children, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="primaryButton py-4 px-12 rounded-full bg-primary text-lg font-semibold z-50 transition-all duration-300 md:hover:scale-105 shadow-lg md:hover:shadow-xl select-none"
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
