"use client"

// useState: Manages mobile menu open/close state
import { useState } from "react"
// React Icons - icon library with various icon sets
// Importing specific icons from different icon families
import { RiMenu2Line, RiHomeFill } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "./ui/button";



// Mobile navigation links with icons
// Each link includes an icon component for visual navigation
const links = [
  {
    icon: <RiHomeFill />,
    path: 'home',
    name: 'home',
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: 'menu',
    name: 'menu',
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: 'about',
    name: 'about',
    offset: -50,
  },
  {
    icon: <FaEnvelope />,
    path: 'contact',
    name: 'contact',
    offset: 0,
  },
]

// NavMobile Component - Mobile Navigation Menu
// Features: Hamburger menu that slides in from right
// Props allow customization of container, icon, and link styles
const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  
  // State to control mobile menu visibility
  // false = closed, true = open
  const [isOpen, setIsOpen] = useState( false );

  return (
    <div className={`${containerStyles}`}>
      {/* Hamburger Menu Trigger Button */}
      {/* onClick toggles menu state (open/close) */}
      {/* cursor-pointer: Shows hand cursor on hover */}
      <div
        onClick={() => setIsOpen(!isOpen)} 
        className='cursor-pointer outline-none'
      >
        <RiMenu2Line className='text-3xl text-white transition-all duration-200' />
      </div>
      {/* Mobile Menu Sidebar */}
      {/* Conditional positioning: right-0 when open, -right-full when closed */}
      {/* fixed: Positioned relative to viewport, covers full screen */}
      {/* z-20: High z-index to appear above page content */}
      {/* transition-all: Smooth slide animation */}
      <aside
        className={`${isOpen ? 'right-0' : '-right-full'} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className='flex flex-col items-center justify-between h-full'>
          {/* Close Button - positioned absolutely in top-left */}
          {/* Clicking closes the menu by setting isOpen to false */}
          <div 
            onClick={() => setIsOpen(!isOpen)}  
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 bg-green flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* Logo in mobile menu */}
          <Link href='/'>
            <Image 
              src='/logo.svg'
              width={90}
              height={36}
              alt=''
            />
          </Link>
          {/* Navigation Links with Icons */}
          {/* flex-col: Vertical layout for mobile menu */}
          {/* gap-y-8: Spacing between links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink 
                  key={index} 
                  to={link.path}
                  offset={link.offset}
                  smooth={false}  // Instant scroll on mobile (better UX)
                  className='flex items-center gap-x-3'  // Icon and text side by side
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              )
            })}
          </div>
          {/* CTA Button in Mobile Menu */}
          {/* Scrolls to reservation section when clicked */}
          <ScrollLink
            to='reservation'
            smooth
            offset={-150}
          >
            <Button
              variant='orange'
            >
              Book a table
            </Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  )
}

export default NavMobile