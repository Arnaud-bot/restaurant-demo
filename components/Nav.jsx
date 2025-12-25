"use client"

// react-scroll Link component - enables smooth scrolling to page sections
import { Link } from "react-scroll"


// Navigation links configuration
// Each link has:
// - path: The section ID to scroll to (must match id attribute on target element)
// - name: Display text for the link
// - offset: Pixel offset from top when scrolling (negative = scrolls higher, positive = lower)
//   This accounts for fixed header height so content isn't hidden behind header
const links = [
  {
    path: 'home',
    name: 'home',
    offset: -50  // Scrolls 50px above the section to account for header
  },
  {
    path: 'menu',
    name: 'menu',
    offset: -50
  },
  {
    path: 'about',
    name: 'about',
    offset: -150  // Larger offset for better visual spacing
  },
  {
    path: 'contact',
    name: 'contact',
    offset: 0  // No offset for contact section
  },
]

// Nav Component - Desktop Navigation
// Props:
// - containerStyles: CSS classes for the nav container
// - linkStyles: CSS classes for individual links
// This component is reusable and accepts custom styling via props
const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {/* Map through links array to render navigation items */}
      {
        links.map((link, index) => {
          return (
            <Link 
              key={index}  // React key for list items (required for performance)
              to={link.path}  // Target section ID
              spy={true}  // Highlights link when corresponding section is in viewport
              smooth={true}  // Enables smooth scrolling animation
              offset={link.offset}  // Scroll offset from top
              duration={500}  // Animation duration in milliseconds
              className={`${linkStyles}`}  // Custom link styling from props
            >
              {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Nav