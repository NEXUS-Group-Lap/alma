import Link from "next/link";
import { InstagramIcon, PoshmarkIcon, EbayIcon, MercariIcon } from "@/components/ui/icons";
import type { ReactNode } from "react";

const socialLinks: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alma_martinez_l?utm_source=qr",
    icon: <InstagramIcon className="w-5 h-5" />,
  },
  {
    name: "Poshmark",
    href: "https://poshmark.com/closet/almamartinez171",
    icon: <PoshmarkIcon className="w-5 h-5" />,
  },
  {
    name: "eBay",
    href: "https://ebay.us/m/H1ZyX6",
    icon: <EbayIcon className="w-5 h-5" />,
  },
  {
    name: "Mercari",
    href: "https://www.mercari.com/u/delalma84?sv=0",
    icon: <MercariIcon className="w-5 h-5" />,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2825] text-[#D6CFC7] text-center py-10 text-sm mt-auto">
      <div className="max-w-[1000px] mx-auto px-6">
        <Link
          href="#"
          className="text-2xl font-bold font-serif text-[#D6CFC7] no-underline tracking-tight inline-block mb-4"
        >
          Alma <span className="text-accent-gold">Closet</span>
        </Link>

        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D6CFC7] transition-all hover:bg-accent-gold hover:text-white hover:-translate-y-0.5"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <p className="leading-relaxed">
          Personal closet by Alma.
          <br />
          Selected clothing, bags, shoes, and accessories shared through
          Instagram, Poshmark, eBay, and Mercari.
        </p>
        <p className="mt-3 text-xs text-[#9A9189]">
          &copy; {year} Alma Closet &mdash; Thank you for supporting my closet
        </p>
      </div>
    </footer>
  );
}
