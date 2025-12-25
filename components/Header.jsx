"use client"

import Image from "next/image"
import Link from "next/link"
// useState: Manages component state (whether header should have background)
// useEffect: Handles side effects (scroll event listener)
import { useEffect, useState } from "react"
// react-scroll: Enables smooth scrolling to page sections
import { Link as ScrollLink } from "react-scroll"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import { Button } from "./ui/button"



// Header Component
// Fixed navigation header that changes appearance on scroll
// Features: Logo, navigation links, CTA button, and mobile menu
const Header = () => {

  // State to track if user has scrolled past 100px
  // When active is true, header gets a dark background
  const[active, setActive] = useState(false);

  // useEffect hook: Runs after component mounts
  // Empty dependency array [] means it only runs once on mount
  useEffect(() => {
    
    // Scroll event handler - detects when user scrolls
    // window.scrollY: Current vertical scroll position
    // If scrolled more than 100px, set active to true
    const handleScroll = () => {                        // Detect scroll
      setActive(window.scrollY > 100);
    };

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);    // add event listener
    
    // Cleanup function: Removes event listener when component unmounts
    // Prevents memory leaks and ensures no orphaned event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll); // clear event listener
    }
  },[]) // Empty array = effect runs only once on mount

  return (
    // Fixed header that stays at top when scrolling
    // Conditional styling: dark background when scrolled, transparent when at top
    // z-50: High z-index ensures header stays above other content
    // transition-all: Smooth transition when background changes
    <header className={`${active ? 'bg-black-heavy py-4': 'bg-none py-8'} fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200'`}>
      <div className="container mx-auto">
        {/* Flexbox layout: logo on left, nav in center, button on right */}
        <div className="flex items-center justify-between">
          {/* Logo - links to homepage */}
          <Link href='/'>
            <Image 
              src='/logo.svg' 
              width={75}
              height={30}
              alt='logo'
            />
          </Link>
          {/* Desktop Navigation - hidden on mobile, visible on xl screens */}
          {/* Props allow customization of container and link styles */}
          <Nav 
            containerStyles='hidden xl:flex gap-x-12 text-white'
            linkStyles='capitalize'
          />
          {/* CTA Button - smooth scrolls to reservation section */}
          {/* ScrollLink from react-scroll enables smooth scrolling behavior */}
          <ScrollLink to='reservation' smooth={true}>
            <Button variant='orange' size='sm'>
              Book a table
            </Button>
          </ScrollLink>
          {/* Mobile Navigation - visible on mobile, hidden on xl screens */}
          {/* Hamburger menu that slides in from right */}
          <NavMobile 
            containerStyles='xl:hidden'
            iconStyles='text-3xl'
            linkStyles='uppercase'
          />
        </div>
      </div>
    </header>
  )
}

export default Header