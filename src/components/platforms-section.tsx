"use client";

import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";
import { InstagramIcon, PoshmarkIcon, EbayIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const platforms: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alma_martinez_l?utm_source=qr",
    icon: <InstagramIcon className="w-10 h-10 text-accent-gold mb-3" />,
  },
  {
    name: "Poshmark",
    href: "https://poshmark.com/closet/almamartinez171",
    icon: <PoshmarkIcon className="w-10 h-10 text-accent-gold mb-3" />,
  },
  {
    name: "eBay",
    href: "https://ebay.us/m/H1ZyX6",
    icon: <EbayIcon className="w-10 h-10 text-accent-gold mb-3" />,
  },
  {
    name: "Mercari",
    href: "https://www.mercari.com/u/delalma84?sv=0",
    icon: <ArrowLeftRight className="w-10 h-10 text-accent-gold mb-3" />,
  },
];

export function PlatformsSection() {
  return (
    <section id="find-me" className="py-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-serif font-semibold text-center mb-2 relative after:content-[''] after:block after:w-15 after:h-0.5 after:bg-accent-gold after:mx-auto after:mt-2.5 after:rounded-sm">
            Find me here
          </h2>
          <p className="text-center max-w-[600px] mx-auto mb-6 text-muted">
            You can find my available pieces and new posts through these
            platforms.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 text-center w-[180px] border border-border-soft no-underline text-foreground transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-accent-gold flex flex-col items-center"
              >
                {p.icon}
                <span className="font-medium">{p.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
