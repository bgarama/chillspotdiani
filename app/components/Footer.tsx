import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#183140] bg-[#08131b] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl bg-white px-3 py-2 shadow-sm"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Chillspot Diani logo"
              width={140}
              height={70}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">
            Chillspot Diani is your beachfront destination for fresh food,
            signature drinks, live music, and unforgettable coastal moments.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#49c6f4]">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/90">
            <a href="#about" className="transition hover:text-[#49c6f4]">About</a>
            <a href="#highlights" className="transition hover:text-[#49c6f4]">Experience</a>
            <a href="#activities" className="transition hover:text-[#49c6f4]">Activities</a>
            <a href="#gallery" className="transition hover:text-[#49c6f4]">Gallery</a>
            <a href="#contact" className="transition hover:text-[#49c6f4]">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#49c6f4]">Visit</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white/90">
            <p>Diani Beach, Kenya</p>
            <p>Food, drinks, music, and beach vibes</p>
            <p>Open daily from 10:00</p>
            <a href="tel:+254757857700" className="block transition hover:text-[#49c6f4]">
              +254 757 857 700
            </a>
            <a
              href="mailto:chillspotdiani002@gmail.com"
              className="block break-words transition hover:text-[#49c6f4]"
            >
              chillspotdiani002@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/75 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Chillspot Diani. All rights reserved.</p>
        <p className="mt-2">
          Designed and developed by{" "}
          <a
            href="https://bahamadzogadze.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49c6f4] underline underline-offset-4 transition hover:text-[#82ddff]"
          >
            Baha Digital Innovation Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
