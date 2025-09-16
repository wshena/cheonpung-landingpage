'use client'
import { MenuIcon } from '@/icons'
import { useUtiltiyStore } from '@/lib/zustand/useUtilityStore'
import React from 'react'

const MenuButton = () => {
  const {buttonClick, setButtonClick} = useUtiltiyStore();
  const handleOpenMenu = () => setButtonClick('nav-menu', !buttonClick.value)

  return (
    <button onClick={handleOpenMenu} className='lg:hidden'>
      <MenuIcon size={30} style='text-black' />
    </button>
  )
}

export default MenuButton