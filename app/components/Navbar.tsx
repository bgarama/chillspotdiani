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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07141d]/92 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 sm:h-20 items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center rounded-xl bg-white px-2 py-1.5 shadow-sm"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.jpeg"
              alt="Chillspot Diani logo"
              width={96}
              height={44}
              className="h-8 w-auto object-contain sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#34bdf2]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#1daee5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1297ca] md:inline-flex"
            >
              Visit Us
            </a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-xl bg-white p-2.5 text-[#0b1620] shadow-sm transition hover:bg-[#f3f7fa] md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="pb-4 md:hidden">
            <div className="rounded-2xl border border-white/10 bg-white p-3 shadow-xl">
              <nav className="flex flex-col gap-1 text-sm font-medium text-[#163042]">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 transition hover:bg-[#eef8fc] hover:text-[#1daee5]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1daee5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1297ca]"
                >
                  Reserve Your Table
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
