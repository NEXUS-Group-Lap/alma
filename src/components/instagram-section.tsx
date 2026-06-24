"use client";

import Link from "next/link";
import { InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

export function InstagramSection() {
  return (
    <section id="instagram" className="py-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <Reveal>
          <div className="bg-background-soft rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif mb-2">Follow for new drops</h3>
            <p className="text-muted mb-6 max-w-[550px] mx-auto leading-relaxed">
              I post new pieces and updates on Instagram. Follow Alma Closet to
              see new clothing, bags, shoes, accessories, and special finds.
            </p>
            <Link
              href="https://www.instagram.com/alma_martinez_l?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent-gold text-white font-semibold py-3 px-7 rounded-full no-underline text-sm transition-all hover:bg-accent-gold-dark hover:-translate-y-0.5 hover:shadow-lg"
            >
              <InstagramIcon className="w-4 h-4" />
              Follow on Instagram
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
