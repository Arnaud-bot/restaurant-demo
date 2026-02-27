// Import Next.js font optimization function - automatically optimizes Google Fonts
// This reduces layout shift and improves performance by self-hosting fonts
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

// Configure Lora font - a serif font for elegant typography
// subsets: Only load Latin characters to reduce font file size
// weight: Load specific font weights (400=normal, 500=medium, 600=semibold, 700=bold)
// variable: Creates a CSS variable (--font-lora) that can be used in Tailwind config
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

// Configure Poppins font - a sans-serif font for modern UI
// Loading all weights (100-900) for maximum design flexibility
// This font variable will be available as --font-poppins in CSS
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// SEO Metadata Configuration
// This object defines all metadata for the website including SEO, social sharing, and browser settings
// Next.js automatically converts this into appropriate <meta> tags in the HTML <head>
export const metadata = {
  // Base URL for all relative URLs in metadata (for Open Graph images, etc.)
  metadataBase: new URL("https://restaurant-js-arnob.vercel.app"),
  // Title configuration with default and template
  // template: Allows dynamic page titles (e.g., "Menu | W'Food Restaurant")
  title: {
    default: "W'Food - A Taste of Local Flavours | Modern Restaurant Website",
    template: "%s | W'Food Restaurant",
  },
  // Meta description - appears in search engine results and social media previews
  // Should be 150-160 characters for optimal display
  description:
    "Experience authentic local flavours at W'Food restaurant. Discover our favorite menu featuring Stilton and pancetta penne, Chorizo and avocado spaghetti, and more. Book a table online and enjoy modern dining with us.",
  // Keywords array - helps search engines understand page content
  // Note: Modern search engines don't heavily rely on keywords meta tag, but it's still good practice
  keywords: [
    "restaurant",
    "local food",
    "dining",
    "W'Food",
    "restaurant website",
    "food menu",
    "book table",
    "restaurant reservation",
    "local flavours",
    "modern restaurant",
    "fine dining",
    "gourmet food",
    "restaurant menu",
    "online reservation",
    "restaurant booking",
    "Next.js",
    "React",
    "TailwindCSS",
    "Framer Motion",
  ],
  // Author information - helps with content attribution and SEO
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com/",
    },
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  // Robots meta tag - controls how search engines crawl and index the site
  // index: true = allow indexing, follow: true = follow links on the page
  robots: {
    index: true,
    follow: true,
    // Google-specific bot settings for rich results
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // -1 = unlimited video preview length
      "max-image-preview": "large", // Allow large image previews in search results
      "max-snippet": -1, // -1 = unlimited text snippet length
    },
  },
  // Open Graph tags - used by Facebook, LinkedIn, and other social platforms for link previews
  // When someone shares your site, these tags control what image, title, and description appear
  openGraph: {
    type: "website", // Type of content (website, article, video, etc.)
    locale: "en_US", // Language and region
    url: "https://restaurant-js-arnob.vercel.app",
    siteName: "W'Food Restaurant",
    title: "W'Food - A Taste of Local Flavours | Modern Restaurant Website",
    description:
      "Experience authentic local flavours at W'Food restaurant. Discover our favorite menu featuring Stilton and pancetta penne, Chorizo and avocado spaghetti, and more. Book a table online and enjoy modern dining with us.",
    // Images array - multiple images allow platforms to choose the best one
    // Recommended size: 1200x630px for optimal display
    images: [
      {
        url: "/hero/plate.png",
        width: 756,
        height: 682,
        alt: "W'Food Restaurant - A Taste of Local Flavours",
      },
      {
        url: "/logo.svg",
        width: 90,
        height: 36,
        alt: "W'Food Restaurant Logo",
      },
    ],
  },
  // Twitter Card tags - specifically for Twitter/X link previews
  // summary_large_image: Shows a large image preview (recommended for better engagement)
  // Alternative: "summary" for smaller image preview
  twitter: {
    card: "summary_large_image",
    title: "W'Food - A Taste of Local Flavours | Modern Restaurant Website",
    description:
      "Experience authentic local flavours at W'Food restaurant. Discover our favorite menu and book a table online.",
    images: ["/hero/plate.png"],
    creator: "@arnob_mahmud", // Twitter handle of content creator
  },
  // Icons configuration - favicon for browser tabs and bookmarks
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.ico", // Shortcut icon for older browsers
    apple: "/favicon.ico", // Apple touch icon (when saved to iOS home screen)
  },
  manifest: "/site.webmanifest", // Web app manifest for PWA features
  category: "restaurant",
  classification: "Restaurant Website",
  // Additional meta tags for mobile web app experience
  // These enable "Add to Home Screen" functionality on mobile devices
  other: {
    "application-name": "W'Food Restaurant",
    "apple-mobile-web-app-title": "W'Food", // Name shown on iOS home screen
    "apple-mobile-web-app-capable": "yes", // Enables full-screen mode on iOS
    "apple-mobile-web-app-status-bar-style": "default", // Status bar appearance
    "mobile-web-app-capable": "yes", // Enables full-screen mode on Android
    "theme-color": "#ffffff", // Browser theme color (address bar on mobile)
  },
};

// RootLayout Component
// This is the root layout for the entire Next.js application
// It wraps all pages and provides shared structure (fonts, metadata, etc.)
// The {children} prop represents the page content that will be rendered
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply font variables to body - these CSS variables are defined in Tailwind config */}
      {/* This allows us to use font-lora and font-poppins classes throughout the app */}
      <body className={`${lora.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
