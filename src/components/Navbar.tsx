import React from 'react'
import ContentContainer from './ContentContainer'
import Logo from './Logo'
import { MainNavigations } from '@/const'
import Link from 'next/link'
import MenuButton from './buttons/MenuButton'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-3 bg-white z-50">
      <ContentContainer>
        <nav className='flex items-center justify-between'>
          <Logo />
          
          {/* nav links */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-5">
            {MainNavigations?.map((item:MainNavProps) => (
              <li key={item.label}>
                <Link href={item.link} className='group text-sm md:text-md capitalize pb-1'>
                  <span>{item.label}</span>
                  <span className="block w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* menu button */}
          <MenuButton />
        </nav>
      </ContentContainer>
    </header>
  )
}

export default Navbar