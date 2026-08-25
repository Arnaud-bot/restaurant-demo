"use client";

/**
 * About – Two-column section: text (heading + paragraphs + CTA) and image.
 * Framer Motion: text fades in from right, image from left. Image hidden on mobile (xl:block).
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:px-0 xl:py-24 items-center"
      id="about"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9">Let&apos;s Talk About LUMA</h1>
        <p className="mb-8">
          LUMA was born from a simple idea: Mediterranean cooking doesn&apos;t
          need reinventing, just honest ingredients and room to breathe. Our
          kitchen sources daily from local markets and lets the produce lead
          the menu, season by season.
        </p>
        <p className="mb-10">
          From the open kitchen to the last table by the window, every detail
          of the dining room was designed around one goal: a night out that
          feels unhurried, in the middle of Dubai.
        </p>
        <Button>Read more</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt="LUMA Dubai dining room"
          className="hidden xl:block"
        />
      </motion.div>
    </section>
  );
}
