"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { motion } from "framer-motion";

export function ThankYouHero() {
  return (
    <section
      id="thank-you"
      className="bg-gradient-to-r from-background to-background-soft py-8 md:py-12 text-center"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <HandWrittenTitle
          title="Thank you for your purchase ♡"
          subtitle="I'm Alma, and this is my personal closet of selected clothing, bags, shoes, and accessories."
        />
        <motion.p
          className="max-w-[650px] mx-auto text-base text-muted mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          Thank you for supporting my closet. I personally select and share
          pieces through Instagram and my resale platforms. You can use this page
          to find where I post, where I sell, and how to follow new drops.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
        >
          <Link
            href="https://www.instagram.com/alma_martinez_l?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent-gold text-white font-semibold py-3 px-7 rounded-full no-underline text-sm transition-all hover:bg-accent-gold-dark hover:-translate-y-0.5 hover:shadow-lg"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </Link>
          <Link
            href="#find-me"
            className="inline-flex items-center gap-2 bg-white border border-border-soft text-foreground font-medium py-3 px-6 rounded-full no-underline text-sm transition-all hover:bg-background-soft hover:text-accent-gold-dark hover:border-accent-gold hover:-translate-y-0.5"
          >
            <Search className="w-4 h-4" />
            Find Me Here
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
