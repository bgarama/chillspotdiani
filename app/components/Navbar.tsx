"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08131b]/78 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="Chillspot Diani"
            width={96}
            height={40}
            priority
            className="h-auto w-20 rounded-md object-contain sm:w-24"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.18em] text-white">
              CHILLSPOT
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#7ed8f7]">
              Diani
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-[#20b8f0]/60 bg-[#20b8f0]/12 px-4 text-sm font-semibold text-[#9be7ff] transition hover:bg-[#20b8f0]/20"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}
