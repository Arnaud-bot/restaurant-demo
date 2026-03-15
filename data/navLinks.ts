import type { NavLinkConfig } from "@/types";

/** Desktop nav links: path = section id, offset for fixed header */
export const navLinks: NavLinkConfig[] = [
  { path: "home", name: "home", offset: -50 },
  { path: "menu", name: "menu", offset: -50 },
  { path: "about", name: "about", offset: -150 },
  { path: "contact", name: "contact", offset: 0 },
];
