"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Experience" },
  { href: "#activities", label: "Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-xl bg-white/85 px-3 py-2 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.jpeg"
              alt="Chillspot Diani logo"
              width={140}
              height={70}
              className="h-14 w-auto rounded-sm object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#19aee6]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#19aee6] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0f8fc2] md:inline-flex"
            >
              Visit Us
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-xl bg-white/85 p-3 text-[#1f1f1f] backdrop-blur-sm transition hover:bg-white md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-[#1f1f1f]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 transition hover:bg-[#eaf8fd] hover:text-[#19aee6]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#19aee6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8fc2]"
              >
                Visit Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
