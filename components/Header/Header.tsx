import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import { HiBell, HiSearch } from 'react-icons/hi'

import styles from './header.module.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true)
      else setIsScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled ? 'bg-dgbg' : 'bg-transparent'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          className="cursor-pointer object-contain"
          src="/logo.svg"
          alt="netflix logo"
          width={100}
          height={40}
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My Watchlist</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm">
        <HiSearch className="hidden h-6 w-6 sm:inline" />
        <span className="hidden lg:inline">Kids</span>
        <HiBell className="h-6 w-6" />

        <span>
          <Link href={'/account'}>
            <Image
              className="cursor-pointer rounded"
              src="/acc.png"
              alt="account"
              width={25}
              height={25}
            />
          </Link>
        </span>
      </div>
    </header>
  )
}

export default Header
