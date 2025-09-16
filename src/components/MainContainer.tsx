import React from 'react'
import MobileMenu from './MobileMenu'

interface Props {
  children: React.ReactNode
}

const MainContainer = ({children}:Props) => {
  return (
    <div className="relative overflow-x-hidden">
      <MobileMenu />
      {children}
    </div>
  )
}

export default MainContainer