"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Thank You", id: "thank-you" },
  { label: "About Alma", id: "about-alma" },
  { label: "Find Me", id: "find-me" },
  { label: "Instagram", id: "instagram" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/94 backdrop-blur-md border-b border-accent-gold/20">
      <div className="max-w-[1000px] mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <Link
            href="#"
            className="text-3xl font-bold font-serif text-foreground no-underline tracking-tight"
          >
            Alma <span className="text-accent-gold">Closet</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-7 items-center">
            {navItems.map(({ label, id }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-foreground no-underline relative hover:text-accent-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-0 after:h-0.5 after:bg-accent-gold after:transition-all hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground hover:text-accent-gold transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-border-soft pt-4">
            {navItems.map(({ label, id }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground no-underline py-2 px-3 rounded-lg hover:bg-background-soft hover:text-accent-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
