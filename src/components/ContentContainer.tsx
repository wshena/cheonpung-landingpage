import React from 'react'

interface Props {
  children: React.ReactNode
}

const ContentContainer = ({children}:Props) => {
  return (
    <div className='max-w-[1400px] mx-auto px-5 md:px-10'>{children}</div>
  )
}

export default ContentContainer