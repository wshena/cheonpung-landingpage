'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const ProductCards = ({item}:{item:{ label:string, image:string, features:string[] }}) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => setShowMore(!showMore)

  return (
    <div className='w-fit'>
      <div className="w-[300px] p-10 flex flex-col gap-5 rounded-[15px] shadow-2xl border border-gray-300">
        <div className="flex items-center justify-center">
          <Image src={item.image} alt={item.label} width={250} height={250} className='' />
        </div>
        <ul className={`overflow-hidden transition-all duration-300 ease-in-out list-disc flex flex-col justify-start gap-3 ${showMore ? 'max-h-[1000px]' : 'max-h-20'}`}>
          {item.features.map((item:string) => (
            <li key={item} className="text-sm md:text-md">{item}</li>
          ))}
        </ul>

        {/* show more button */}
        <div className="flex items-start justify-between">
          <button
            className='pb-1 border-b border-black transition-all duration-300 hover:opacity-80 active:scale-95 cursor-pointer'
            onClick={handleClick}
          >
            <span className="capitalize text-sm md:text-md text-black">
              {showMore ? 'show less' : 'show more'}
            </span>
          </button>
          <button className='pb-1 border-b border-black transition-all duration-300 hover:opacity-80 active:scale-95 cursor-pointer'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCards