import React from 'react'
import ContentContainer from './ContentContainer'
import Logo from './Logo'
import { FooterNav } from '@/const'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pb-20'>
      <ContentContainer>
        <span className="block w-full h-[1px] bg-black mb-10" />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start md:justify-between">
          <div className="w-full flex flex-col items-start gap-5">
            <Logo />
            <div className="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d104914.62997083711!2d126.38100814109745!3d34.74092457052552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s55%2C%20Daebuljugong%203-ro%2C%20Samho-eup%2C%20Yeongam-gun%2C%20Jeollanam-do%2C%20Annex%20102%2C%20201!5e0!3m2!1sid!2sid!4v1757996386706!5m2!1sid!2sid" width="600" height="350" className='w-full lg:w-[350px] h-[350px] xl:w-[600] xl:h-[350px] border-none' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <nav className='flex flex-col md:flex-row items-start gap-5 md:gap-10'>
            <ul className="flex flex-col items-start md:flex-row gap-5 md:gap-10">
              {FooterNav.map((item:FooterNavProps) => (
                <li key={item.label} className='flex flex-col items-start gap-3 md:gap-5'>
                  <h3 className='text-md md:text-lg text-gray-600'>{item.label}</h3>
                  <div className="flex flex-col gap-1 md:gap-3">
                    {item.links.map((item:MainNavProps) => (
                      <Link key={item.label} href={item.link} className='text-sm md:text-md hover:text-gray-600 transition-colors duration-300 ease-in-out'>{item.label}</Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-1">
              <p className='w-full md:w-[300px] text-[16px] font-[400]'>55, Daebuljugong 3-ro, Samho-eup, Yeongam-gun, Jeollanam-do, Annex 102, 201</p>
              <span className='text-[16px] font-[400]'>Email: ds4epa@cheonpung.com</span>
              <span className='text-[16px] font-[400]'>Phone: 061-273-8811</span>
              <span className='text-[16px] font-[400]'>Website: www.cheonpung.kr</span>
            </div>
          </nav>
        </div>
      </ContentContainer>
    </footer>
  )
}

export default Footer