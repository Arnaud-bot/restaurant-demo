// "use client" directive - marks this as a Client Component
// Required for components using React hooks, browser APIs, or event listeners
// Client components are rendered on the client-side and can be interactive
"use client"

// Import animation variants - reusable animation configurations for Framer Motion
import { fadeIn } from "@/variants"
// Framer Motion - powerful animation library for React
import { motion } from "framer-motion"
// Next.js Image component - automatically optimizes images (lazy loading, responsive, WebP conversion)
import Image from "next/image"
import { Button } from "./ui/button"



// Hero Section Component
// The main hero/banner section at the top of the homepage
// Features animated text and images using Framer Motion
const Hero = () => {
  return (
    // Section with background image, responsive height, and padding
    // id="home" is used for smooth scrolling navigation
    <section className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0" id="home">
      <div className="container mx-auto">
        {/* text & image */}
        <div className="flex items-center xl:h-[960px]">
          {/* Hero Text Content */}
          {/* Responsive width: full on mobile, max 460px on desktop */}
          {/* Text alignment: centered on mobile, left-aligned on desktop */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            {/* Framer Motion h1 with fade-in animation from bottom */}
            {/* variants: Animation configuration (direction: "down", delay: 0.2s) */}
            {/* initial: Starting state (hidden) */}
            {/* whileInView: Animation triggers when element enters viewport */}
            {/* viewport: once: false = re-animate every time it enters view, amount: 0.4 = trigger when 40% visible */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-7"
            >
              A taste of local <br /> flavours
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              by: <span className="text-orange">Wildan Wari</span>
            </motion.p>
            <motion.p 
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-w-lg mx-auto xk:max-w-none xl:mx-0"
            >
              Posuere amet, sed vitae condimentum accumsan aliquam et, aliquam. Tellus in fusce vel gravida lobortis diam dis ut.
              Bibendum senectus urna, in ultricies sed lorem natoque. Risus pharetra
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>
                Let's eat
              </Button>
            </motion.div>
          </div>
          {/* Hero Image - Plate */}
          {/* Hidden on mobile, visible on desktop (xl breakpoint) */}
          {/* Absolutely positioned on desktop for overlay effect */}
          {/* Animation: fades in from bottom with 0.8s delay */}
          <motion.div 
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}  
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
          >
            {/* Next.js Image component with explicit dimensions for optimization */}
            <Image
              src="/hero/plate.png"
              width={756}
              height={682}
              alt="plate"
            />
          </motion.div>
        </div>
      </div>

      {/* Coffee Image - Decorative Element */}
      {/* Positioned with negative top margin to overlap with hero section */}
      {/* Animation delay of 1.2s creates staggered animation effect */}
      <motion.div 
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}  
        className="hidden xl:flex xl:relative xl:-top-36"
      >
        <Image
          src="/hero/coffee.png"
          width={386}
          height={404}
          alt="coffe"
        />
      </motion.div>
    </section>
  )
}

export default Hero