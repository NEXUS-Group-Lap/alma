"use client";

import { Reveal } from "@/components/ui/reveal";
import { Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about-alma" className="py-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <Reveal>
          <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-sm border border-border-soft relative overflow-hidden">
            <div className="absolute top-6 right-8 text-accent-gold/15">
              <Heart className="w-24 h-24" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif mb-4 relative">
              Hi, I&apos;m Alma
            </h3>
            <p className="text-muted max-w-[700px] mx-auto relative leading-relaxed">
              I enjoy finding clothing, bags, shoes, and accessories with style,
              good value, and a second chance to be worn again. Alma Closet is my
              personal space where I share pieces I personally select and post
              online.
            </p>
            <p className="text-muted max-w-[700px] mx-auto mt-4 relative leading-relaxed">
              If you have questions about size, condition, or availability, you
              can message me through the platform where the item is listed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
