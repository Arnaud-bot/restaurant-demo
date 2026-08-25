"use client";

/**
 * Hero – Top section with headline, byline, and imagery.
 * Framer Motion: fadeIn variants from lib/variants; animations trigger when in view (whileInView).
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex items-center xl:h-[960px]">
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            {/* Staggered fade-in from bottom: direction "down", delay 0.2s. viewport.amount = 0.4 triggers when 40% visible. */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-7"
            >
              Contemporary Mediterranean <br /> dining
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              <span className="text-orange">Dubai</span> · Fine Dining
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0"
            >
              LUMA brings the flavours of the Mediterranean coast to Dubai —
              seasonal ingredients, an open kitchen, and a dining room built
              for long, unhurried evenings.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Let&apos;s eat</Button>
            </motion.div>
          </div>
          {/* Hero plate image: fades in from bottom (up), hidden on mobile, absolute on xl */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
          >
            <Image
              src="/hero/plate.png"
              width={756}
              height={682}
              alt="Plate"
            />
          </motion.div>
        </div>
      </div>
      {/* Decorative coffee image: same variant, longer delay for staggered effect */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-36"
      >
        <Image
          src="/hero/coffee.png"
          width={386}
          height={404}
          alt="Coffee"
        />
      </motion.div>
    </section>
  );
}
