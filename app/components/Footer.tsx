import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-10">
        <div>
          <Link href="/" className="inline-flex items-center rounded-xl bg-white/90 px-3 py-2">
            <Image
              src="/images/logo.jpeg"
              alt="Chillspot Diani logo"
              width={140}
              height={70}
              className="h-14 w-auto rounded-sm object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Chillspot Diani is your beachfront destination for fresh food,
            signature drinks, live music, and unforgettable coastal moments.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#19aee6]">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
            <a href="#about" className="hover:text-[#19aee6]">
              About
            </a>
            <a href="#highlights" className="hover:text-[#19aee6]">
              Experience
            </a>
            <a href="#activities" className="hover:text-[#19aee6]">
              Activities
            </a>
            <a href="#gallery" className="hover:text-[#19aee6]">
              Gallery
            </a>
            <a href="#contact" className="hover:text-[#19aee6]">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#19aee6]">Visit</h3>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <p>Diani Beach, Kenya</p>
            <p>Food, drinks, music, and beach vibes</p>
            <p>Open for unforgettable moments by the coast</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50 lg:px-10">
        <p>© {new Date().getFullYear()} Chillspot Diani. All rights reserved.</p>
        <p className="mt-2">
          Designed and developed by{" "}
          <a
            href="https://bahamadzogadze.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#19aee6] underline underline-offset-4 transition hover:text-[#7ed8f7]"
          >
            Baha Digital Innovation Hub
          </a>
        </p>
      </div>
    </footer>
  );
}