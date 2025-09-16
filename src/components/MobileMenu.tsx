'use client'
import { MainNavigations } from '@/const';
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore'
import Link from 'next/link';
import React from 'react'

function MobileMenu() {
  const {buttonClick, setButtonClick} = useUtiltiyStore();
  const closeMenu = () => setButtonClick('', false);
  const isMenuClick = buttonClick.label === 'nav-menu' && buttonClick.value;

  return (
    <section className={`fixed w-full h-screen lg:hidden z-50 top-[71.31px] py-5 bg-white transition-all duration-300 ease-in-out ${isMenuClick ? 'left-0' : 'translate-x-[1000px]'}`}>
      <nav className='px-5 md:px-10'>
        <ul className="flex flex-col items-start gap-3">
          {MainNavigations?.map((item:MainNavProps) => (
            <li key={item.label}>
              <Link href={item.link} onClick={closeMenu} className='group text-md capitalize pb-1'>
                <span>{item.label}</span>
                <span className="block w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default MobileMenu