// Dynamic import - loads component only on client-side, not during server-side rendering
// This is useful for components that use browser-only APIs (like Leaflet maps)
// ssr: false = Skip server-side rendering for this component
import dynamic from 'next/dynamic'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
//import Map from '../components/Map'
import Menu from '../components/Menu'
import Reservation from '../components/Reservation'

// Dynamically import Map component to avoid SSR issues with Leaflet
// Leaflet requires browser APIs (window, document) that aren't available during SSR
// This prevents hydration errors and improves initial page load
const MyMap = dynamic(() => import('../components/Map'), {ssr:false})

// Home Page Component
// This is the main page component for the root route (/)
// In Next.js App Router, page.js files define the UI for a route
// This component composes all the main sections of the restaurant website
export default function Home() {
  return (
    // Main container with max-width constraint for large screens
    // mx-auto centers the content horizontally
    // overflow-hidden prevents horizontal scroll from animations
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      {/* Dynamically imported Map component - loads only on client-side */}
      <MyMap />
      <Footer />
    </main>
  )
}
