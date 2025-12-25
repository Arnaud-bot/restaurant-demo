# Restaurant JS Landing Page - Next.js, TailwindCSS, Framer Motion Frontend Project

A modern, responsive restaurant website built with Next.js 14, featuring smooth animations, interactive maps, and a beautiful UI. This project demonstrates best practices for building static websites with React Server Components, TailwindCSS, and modern animation libraries.

- **Live-Demo:** [https://restaurant-js-arnob.vercel.app/](https://restaurant-js-arnob.vercel.app/)

> _Note: This project is implemented in JavaScript. A TypeScript version is also available at [RestaurantTS-NextJS](https://github.com/arnobt78/RestaurantTS-NextJS-Website)._

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16-0055FF?style=for-the-badge)

![project23](https://github.com/user-attachments/assets/77de8404-aeba-4f67-b5fe-0438e80bda73) ![Screenshot 2024-09-13 at 03 34 24](https://github.com/user-attachments/assets/1ef89f8a-e6f8-4bfa-9c95-453e35bbf4ee) ![Screenshot 2024-09-13 at 03 35 51](https://github.com/user-attachments/assets/9f3eb9e5-5dd7-46fd-9b23-aee505fa84d1) ![Screenshot 2024-09-13 at 03 34 55](https://github.com/user-attachments/assets/bd1df324-3ba9-45d9-a530-5ebce27cfe36) ![Screenshot 2024-09-13 at 03 35 12](https://github.com/user-attachments/assets/d6f0347c-3ec7-41d1-9d64-695ee0ddfd24) ![Screenshot 2024-09-13 at 03 35 33](https://github.com/user-attachments/assets/7bff98ba-b797-4c01-962e-ec0e2156bbd6)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Environment Variables](#-environment-variables)
- [Project Walkthrough](#-project-walkthrough)
- [Component Documentation](#-component-documentation)
- [Routes and Navigation](#-routes-and-navigation)
- [Reusing Components](#️-reusing-components)
- [Code Examples](#-code-examples)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Learning Resources](#-learning-resources)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Project Overview

W'Food is a modern restaurant website showcasing local flavors and cuisine. Built as a static site using Next.js 14 App Router, it features:

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Maps**: React-Leaflet integration for location display
- **Modern UI Components**: Radix UI components for accessible form elements
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Performance Optimized**: Image optimization, font optimization, and code splitting

This project serves as both a production-ready website and an educational resource for learning modern React/Next.js development patterns.

---

## ✨ Features

### Core Features

- **Hero Section**: Eye-catching introduction with animated text and images
- **Menu Display**: Showcase featured dishes with hover effects and responsive grid
- **Reservation System**: Interactive form with date picker and party size selector
- **About Section**: Two-column layout with restaurant information
- **Interactive Map**: Multiple location markers with popups
- **Responsive Navigation**: Desktop and mobile navigation with smooth scrolling
- **Footer**: Links, social media, and copyright information

### Technical Features

- **Server-Side Rendering (SSR)**: Fast initial page loads
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **Dynamic Imports**: Code splitting for better performance
- **Font Optimization**: Self-hosted Google Fonts via Next.js
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **SEO**: Comprehensive metadata, Open Graph, and Twitter Card tags

---

## 🛠 Technology Stack

### Core Framework

- **Next.js 14.2.35**: React framework with App Router, SSR, and SSG
- **React 18**: UI library with hooks and modern patterns
- **JavaScript (ES6+)**: Modern JavaScript features

### Styling

- **TailwindCSS 3.3**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities for Tailwind
- **Custom CSS Variables**: Font and color management

### Animation & Interaction

- **Framer Motion 10.16**: Production-ready animation library
- **react-scroll**: Smooth scrolling navigation
- **react-responsive**: Media query hooks

### UI Components

- **Radix UI**: Accessible component primitives
  - `@radix-ui/react-popover`: Popover component
  - `@radix-ui/react-select`: Select dropdown
  - `@radix-ui/react-label`: Form labels
  - `@radix-ui/react-slot`: Polymorphic components
- **Lucide React**: Modern icon library
- **React Icons**: Comprehensive icon collection

### Maps & Location

- **React-Leaflet 4.2**: React wrapper for Leaflet maps
- **Leaflet 1.9**: Interactive maps library

### Date Handling

- **date-fns 2.30**: Date utility library
- **react-day-picker 8.9**: Date picker component

### Utilities

- **class-variance-authority**: Type-safe variant system
- **clsx**: Conditional class names
- **tailwind-merge**: Merge Tailwind classes intelligently

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

---

## 📁 Project Structure

```bash
restaurant-js/
├── app/                          # Next.js App Router directory
│   ├── layout.js                 # Root layout with metadata and fonts
│   ├── page.js                   # Homepage component
│   ├── globals.css               # Global styles and Tailwind directives
│   └── favicon.ico               # Site favicon
├── components/                   # React components
│   ├── About.jsx                 # About section component
│   ├── Footer.jsx                # Footer component
│   ├── Header.jsx                # Header with navigation
│   ├── Hero.jsx                  # Hero section component
│   ├── Map.jsx                   # Interactive map component
│   ├── Menu.jsx                  # Menu display component
│   ├── Nav.jsx                   # Desktop navigation
│   ├── NavMobile.jsx             # Mobile navigation
│   ├── Reservation.jsx           # Reservation section wrapper
│   ├── ReservationForm.jsx       # Reservation form component
│   ├── StyleGuide.jsx            # Style guide component
│   └── ui/                       # Reusable UI components
│       ├── button.jsx            # Button component with variants
│       ├── calendar.jsx          # Calendar component
│       ├── input.jsx             # Input component
│       ├── label.jsx             # Label component
│       ├── popover.jsx            # Popover component
│       └── select.jsx             # Select dropdown component
├── lib/                          # Utility functions
│   └── utils.js                  # Class name merging utility
├── public/                       # Static assets
│   ├── about/                    # About section images
│   ├── footer/                   # Footer background
│   ├── hero/                     # Hero section images
│   ├── map/                      # Map marker images
│   ├── menu/                     # Menu item images
│   ├── reservation/             # Reservation background
│   ├── logo.svg                  # Site logo
│   └── pin-solid.svg             # Map pin icon
├── variants.js                   # Framer Motion animation variants
├── components.json               # shadcn/ui configuration
├── jsconfig.json                 # JavaScript path aliases
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # TailwindCSS configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Git** (for cloning the repository)

### Step 1: Clone the Repository

```bash
git clone https://github.com/arnobt78/RestaurantJS--TailwindCSS-Fundamental-Project-5.git
cd RestaurantJS--TailwindCSS-Fundamental-Project-5
```

---

### Step 2: Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

Or using bun:

```bash
bun install
```

---

### Step 3: Verify Installation

Check that all dependencies are installed correctly:

```bash
npm list --depth=0
```

---

## 🏃 Running the Project

### Development Mode

Start the development server with hot reloading:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

**Features in Development Mode:**

- Hot Module Replacement (HMR)
- Fast Refresh for React components
- Error overlay in the browser
- Source maps for debugging

---

### Production Build

Create an optimized production build:

```bash
npm run build
```

This command:

- Compiles and optimizes all code
- Generates static pages
- Minifies JavaScript and CSS
- Optimizes images
- Creates production-ready files in `.next` directory

---

### Production Server

After building, start the production server:

```bash
npm start
```

The production server will be available at [http://localhost:3000](http://localhost:3000)

---

### Linting

Check code quality and style:

```bash
npm run lint
```

---

## 🔐 Environment Variables

### Why No .env File?

This project is a **static website** that doesn't require:

- API keys
- Database connections
- Server-side environment variables
- Third-party service credentials

All data is static and embedded in components. The map uses public tile layers that don't require authentication.

### When You Might Need .env

If you extend this project with:

1. **Backend API Integration**

   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   NEXT_PUBLIC_API_KEY=your-api-key
   ```

2. **Analytics Services**

   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
   ```

3. **Map Service API Keys**

   ```env
   NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token
   NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-google-maps-key
   ```

4. **Content Management System**

   ```env
   NEXT_PUBLIC_CMS_URL=https://cms.example.com
   NEXT_PUBLIC_CMS_TOKEN=your-cms-token
   ```

### Creating .env.local

If you need environment variables:

1. Create `.env.local` in the root directory:

   ```bash
   touch .env.local
   ```

2. Add your variables:

   ```env
   # Example environment variables
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Access in code:

   ```javascript
   // In any component or page
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

**Important Notes:**

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Variables without prefix are server-only
- Never commit `.env.local` to version control
- Add `.env.local` to `.gitignore`

---

## 🎓 Project Walkthrough

### Understanding the Architecture

This project uses **Next.js 14 App Router**, which provides:

1. **File-based Routing**: Files in `app/` directory become routes
2. **Server Components**: Default components are server-rendered
3. **Client Components**: Marked with `"use client"` for interactivity
4. **Layouts**: Shared UI across routes
5. **Metadata API**: SEO and social sharing configuration

---

### Page Flow

```text
User visits / (homepage)
    ↓
app/page.js renders
    ↓
Components load in order:
    1. Header (fixed navigation)
    2. Hero (main banner)
    3. Menu (featured dishes)
    4. Reservation (booking form)
    5. About (restaurant info)
    6. Map (location)
    7. Footer (links and copyright)
```

---

### Component Hierarchy

```text
RootLayout (app/layout.js)
    └── Home (app/page.js)
        ├── Header
        │   ├── Nav (desktop)
        │   └── NavMobile (mobile)
        ├── Hero
        ├── Menu
        ├── Reservation
        │   └── ReservationForm
        │       ├── Input (ui)
        │       ├── Calendar (ui)
        │       └── Select (ui)
        ├── About
        ├── Map
        └── Footer
```

---

## 📚 Component Documentation

### Layout Components

#### `app/layout.js`

Root layout component that wraps all pages.

**Features:**

- Font optimization (Lora, Poppins)
- SEO metadata configuration
- Open Graph and Twitter Card tags
- Global styles application

**Key Code:**

```javascript
export const metadata = {
  title: {
    default: "W'Food - A Taste of Local Flavours",
    template: "%s | W'Food Restaurant",
  },
  description: "Experience authentic local flavours...",
  // ... more metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
```

---

#### `app/page.js`

Homepage component that composes all sections.

**Features:**

- Dynamic imports for performance
- Component composition
- Static page generation

**Key Code:**

```javascript
// Dynamic import prevents SSR issues with Leaflet
const MyMap = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <MyMap />
      <Footer />
    </main>
  );
}
```

---

### Navigation Components

#### `components/Header.jsx`

Fixed header with scroll detection and responsive navigation.

**Features:**

- Scroll-based background change
- Desktop and mobile navigation
- Smooth scroll to sections
- Event listener cleanup

**Key Code:**

```javascript
const [active, setActive] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setActive(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**Props:** None (self-contained)

**Usage:**

```jsx
<Header />
```

---

#### `components/Nav.jsx`

Desktop navigation component with smooth scrolling.

**Features:**

- Smooth scroll to sections
- Active link highlighting
- Configurable styles via props

**Props:**

- `containerStyles`: CSS classes for nav container
- `linkStyles`: CSS classes for links

**Usage:**

```jsx
<Nav
  containerStyles="hidden xl:flex gap-x-12 text-white"
  linkStyles="capitalize"
/>
```

---

#### `components/NavMobile.jsx`

Mobile hamburger menu with slide-in animation.

**Features:**

- Toggleable sidebar menu
- Icon-based navigation
- Smooth animations
- Click outside to close

**Props:**

- `containerStyles`: CSS classes for container
- `iconStyles`: CSS classes for icons
- `linkStyles`: CSS classes for links

**Usage:**

```jsx
<NavMobile
  containerStyles="xl:hidden"
  iconStyles="text-3xl"
  linkStyles="uppercase"
/>
```

---

### Content Components

#### `components/Hero.jsx`

Hero section with animated text and images.

**Features:**

- Framer Motion animations
- Responsive image display
- Call-to-action button
- Staggered animations

**Key Code:**

```javascript
<motion.h1
  variants={fadeIn("down", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.4 }}
>
  A taste of local flavours
</motion.h1>
```

**Usage:**

```jsx
<Hero />
```

---

#### `components/Menu.jsx`

Menu items display with hover effects.

**Features:**

- Responsive grid layout
- Image hover animations
- Price display
- Link to full menu

**Data Structure:**

```javascript
const menu = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$24.00",
  },
  // ... more items
];
```

**Usage:**

```jsx
<Menu />
```

**Customization:**

Replace the `menu` array with your own data:

```javascript
const menu = [
  {
    img: "/menu/your-item.png",
    title: "Your Dish Name",
    price: "$XX.XX",
  },
];
```

---

#### `components/About.jsx`

About section with two-column layout.

**Features:**

- Text and image layout
- Framer Motion animations
- Responsive design
- Read more button

**Usage:**

```jsx
<About />
```

---

#### `components/Reservation.jsx` & `components/ReservationForm.jsx`

Reservation section with interactive form.

**Features:**

- Date picker (react-day-picker)
- Party size selector
- Form inputs
- Background image

**Form Fields:**

- First name
- Last name
- Date selection
- Number of people

**Usage:**

```jsx
<Reservation />
```

**Note:** Currently UI-only. To add functionality:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic
  // e.g., API call, email service, etc.
};
```

---

#### `components/Map.jsx`

Interactive map with multiple markers.

**Features:**

- React-Leaflet integration
- Custom marker icons
- Popup information
- Responsive zoom levels

**Configuration:**

```javascript
const markers = [
  {
    position: [34.052235, -118.243683], // [lat, lng]
    title: "Location 1",
    subtitle: "Description",
    image: "/map/1.png",
  },
];
```

**Usage:**

```jsx
<Map />
```

**Customization:**

Update `markers` array with your locations:

```javascript
const markers = [
  {
    position: [YOUR_LATITUDE, YOUR_LONGITUDE],
    title: "Your Location",
    subtitle: "Your description",
    image: "/map/your-image.png",
  },
];
```

---

#### `components/Footer.jsx`

Footer with links and social media.

**Features:**

- Three-column layout
- Blog links
- New items section
- Social media links
- Copyright information

**Usage:**

```jsx
<Footer />
```

---

### Reusable UI Components

#### `components/ui/button.jsx`

Reusable button component with variants.

**Variants:**

- `default`: Green primary button
- `orange`: Orange accent button
- `input`: Transparent input-style button

**Sizes:**

- `default`: 170px × 62px
- `sm`: 150px × 58px

**Usage:**

```jsx
<Button variant="orange" size="sm">
  Click me
</Button>
```

**With asChild (polymorphic):**

```jsx
<Button asChild variant="default">
  <Link href="/menu">View Menu</Link>
</Button>
```

---

#### `components/ui/input.jsx`

Styled input component.

**Usage:**

```jsx
<Input id="email" type="email" placeholder="Enter email" />
```

---

#### `components/ui/select.jsx`

Accessible select dropdown.

**Usage:**

```jsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

#### `components/ui/calendar.jsx`

Date picker calendar component.

**Usage:**

```jsx
<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
```

---

### Utility Files

#### `variants.js`

Framer Motion animation variants.

**Function:**

```javascript
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      // ... more config
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      // ... more config
    },
  };
};
```

**Usage:**

```javascript
import { fadeIn } from "@/variants";

<motion.div variants={fadeIn("up", 0.2)}>Content</motion.div>;
```

---

#### `lib/utils.js`

Class name merging utility.

**Function:**

```javascript
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

**Usage:**

```javascript
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />;
```

---

## 🛣 Routes and Navigation

### File-Based Routing

Next.js App Router uses file-based routing:

```text
app/
  ├── page.js          → / (homepage)
  ├── about/
  │   └── page.js      → /about
  ├── menu/
  │   └── page.js      → /menu
  └── contact/
      └── page.js      → /contact
```

### Current Routes

This project currently has one route:

- **`/`** (Homepage) - `app/page.js`

### Adding New Routes

1. Create a new directory in `app/`:

```bash
mkdir app/about
```

1. Create `page.js`:

```javascript
export default function AboutPage() {
  return <div>About Page</div>;
}
```

1. Add navigation link in `components/Nav.jsx`:

```javascript
const links = [
  // ... existing links
  {
    path: "about",
    name: "about",
    offset: -50,
  },
];
```

### Smooth Scrolling Navigation

The project uses `react-scroll` for smooth section navigation:

```javascript
import { Link as ScrollLink } from "react-scroll";

<ScrollLink to="menu" smooth={true} offset={-50}>
  Menu
</ScrollLink>;
```

**Parameters:**

- `to`: Section ID to scroll to
- `smooth`: Enable smooth scrolling
- `offset`: Pixel offset from top

---

## ♻️ Reusing Components

### Using Components in Other Projects

All components are self-contained and can be easily reused.

#### Step 1: Copy Component File

Copy the component file to your project:

```bash
cp components/Hero.jsx /path/to/your/project/components/
```

#### Step 2: Copy Dependencies

Ensure required dependencies are installed:

```bash
npm install framer-motion next/image
```

#### Step 3: Copy Utilities

Copy utility files if needed:

```bash
cp variants.js /path/to/your/project/
cp lib/utils.js /path/to/your/project/lib/
```

#### Step 4: Update Imports

Update import paths to match your project structure:

```javascript
// Before
import { fadeIn } from "@/variants";

// After (if using different alias)
import { fadeIn } from "../variants";
```

#### Step 5: Update Styles

Ensure Tailwind classes match your configuration, or update them:

```javascript
// Update Tailwind classes to match your theme
className = "bg-hero"; // Make sure 'hero' is defined in tailwind.config.js
```

### Component Customization

#### Customizing the Hero Component

```javascript
// Change text content
<motion.h1>
  Your Custom Heading
</motion.h1>

// Change images
<Image
  src="/your-hero-image.png"
  width={756}
  height={682}
  alt="your alt text"
/>

// Change animation
variants={fadeIn("left", 0.5)} // Different direction and delay
```

#### Customizing the Menu Component

```javascript
// Replace menu data
const menu = [
  {
    img: "/your-menu/item-1.png",
    title: "Your Dish",
    price: "$XX.XX",
  },
];

// Change grid columns
className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
```

#### Customizing the Map Component

```javascript
// Update map center
center={[YOUR_LAT, YOUR_LNG]}

// Update markers
const markers = [
  {
    position: [YOUR_LAT, YOUR_LNG],
    title: "Your Location",
    subtitle: "Your description",
    image: "/map/your-image.png"
  },
];

// Change map style
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
```

---

## 💻 Code Examples

### Creating a New Animated Section

```javascript
"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

export default function NewSection() {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          Your Section Title
        </motion.h2>
      </div>
    </motion.section>
  );
}
```

### Creating a Custom Button Variant

```javascript
// In tailwind.config.js
buttonVariants: {
  // ... existing variants
  outline: "border-2 border-green text-green hover:bg-green hover:text-white",
}

// Usage
<Button variant="outline">Click me</Button>
```

### Adding Form Validation

```javascript
import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: null,
    people: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.lastName) newErrors.lastName = "Required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.people) newErrors.people = "Please select party size";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
      console.log("Form submitted:", formData);
    }
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
};
```

### Adding API Integration

```javascript
// app/api/reservation/route.js
export async function POST(request) {
  const data = await request.json();

  // Process reservation
  // Save to database, send email, etc.

  return Response.json({ success: true });
}

// In component
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  // Handle result
};
```

---

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  green: { DEFAULT: '#YOUR_COLOR', hover: '#YOUR_HOVER_COLOR' },
  orange: { DEFAULT: '#YOUR_COLOR', hover: '#YOUR_HOVER_COLOR' },
  // ... more colors
}
```

### Changing Fonts

1. Update `app/layout.js`:

```javascript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

1. Update `tailwind.config.js`:

```javascript
fontFamily: {
  yourFont: ['var(--font-your-font)', 'sans-serif'],
}
```

### Changing Breakpoints

Edit `tailwind.config.js`:

```javascript
screens: {
  sm: '640px',
  md: '768px',
  lg: '1024px',  // Changed from 960px
  xl: '1280px',  // Changed from 1200px
}
```

### Adding New Sections

1. Create component:

```javascript
// components/Testimonials.jsx
export default function Testimonials() {
  return <section id="testimonials">...</section>;
}
```

1. Add to homepage:

```javascript
// app/page.js
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      {/* ... existing components */}
      <Testimonials />
    </main>
  );
}
```

1. Add to navigation:

```javascript
// components/Nav.jsx
const links = [
  // ... existing links
  {
    path: "testimonials",
    name: "testimonials",
    offset: -50,
  },
];
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy

**Vercel automatically:**

- Detects Next.js
- Optimizes builds
- Provides CDN
- Handles environment variables

### Netlify

1. Push code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy

### Other Platforms

**AWS Amplify:**

- Connect repository
- Auto-detects Next.js
- Configure build settings

**DigitalOcean App Platform:**

- Connect GitHub repository
- Select Node.js environment
- Configure build and run commands

**Self-Hosting:**

```bash
npm run build
npm start
```

---

## 📖 Learning Resources

### Next.js Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

### React Resources

- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [React Patterns](https://reactpatterns.com)

---

### TailwindCSS Resources

- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TailwindCSS Components](https://tailwindui.com)

---

### Framer Motion

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

---

### React-Leaflet

- [React-Leaflet Docs](https://react-leaflet.js.org/)
- [Leaflet Docs](https://leafletjs.com/)

---

### Radix UI

- [Radix UI Docs](https://www.radix-ui.com/)
- [Component Examples](https://www.radix-ui.com/primitives)

---

## 🔑 Keywords

**Framework & Libraries:**

- Next.js, React, JavaScript, ES6+, App Router, Server Components

**Styling:**

- TailwindCSS, CSS, Responsive Design, Mobile-First, Utility-First CSS

**Animation:**

- Framer Motion, Animations, Transitions, Scroll Animations

**UI/UX:**

- Modern UI, User Interface, User Experience, Interactive Design

**Features:**

- Restaurant Website, Menu Display, Reservation System, Interactive Map, Smooth Scrolling

**Development:**

- Static Site Generation, Server-Side Rendering, Code Splitting, Performance Optimization

**Tools:**

- Vercel, Deployment, Git, npm, Package Management

**Learning:**

- Tutorial, Educational, Learning Project, Code Examples, Best Practices

---

## 🎓 Conclusion

This project demonstrates modern web development practices using Next.js 14, React, and TailwindCSS. It showcases:

- **Component-Based Architecture**: Reusable, maintainable components
- **Performance Optimization**: Image optimization, code splitting, font optimization
- **Modern Animations**: Smooth, engaging user experiences
- **Responsive Design**: Mobile-first approach with breakpoints
- **SEO Best Practices**: Comprehensive metadata and Open Graph tags
- **Accessibility**: Semantic HTML and ARIA labels
- **Developer Experience**: Clean code, educational comments, best practices

### What You've Learned

By exploring this project, you've gained experience with:

1. Next.js App Router and file-based routing
2. React Server Components and Client Components
3. TailwindCSS utility-first styling
4. Framer Motion animations
5. React-Leaflet map integration
6. Form handling with Radix UI
7. Responsive design patterns
8. Performance optimization techniques
9. SEO and metadata configuration
10. Component reusability and composition

### Next Steps

1. **Extend Functionality**: Add backend API, database integration
2. **Add More Pages**: Create About, Menu, Contact pages
3. **Enhance Animations**: Experiment with different animation patterns
4. **Add Testing**: Implement unit and integration tests
5. **Optimize Further**: Add analytics, improve performance metrics
6. **Customize Design**: Create your own color scheme and branding

### Contributing

Feel free to:

- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues
- Suggest improvements

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
