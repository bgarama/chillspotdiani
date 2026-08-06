import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const highlights = [
  {
    title: "Fresh Coastal Dining",
    description:
      "Enjoy expertly prepared seafood, local favorites, and satisfying plates served in a relaxed beachfront setting.",
    image: "/images/food.jpeg",
    alt: "Chillspot Diani food plate with fish and sides",
  },
  {
    title: "Signature Drinks",
    description:
      "Cool off with cocktails, refreshing drinks, and sunset-perfect beverages crafted for the beach mood.",
    image: "/images/drinks.jpeg",
    alt: "Chillspot Diani cocktail drink",
  },
  {
    title: "Live Music & Entertainment",
    description:
      "Feel the rhythm with live performances, great energy, and memorable evenings by the ocean.",
    image: "/images/music.jpeg",
    alt: "Singer performing live at Chillspot Diani",
  },
];

const galleryImages = [
  { src: "/images/activities-1.jpeg", alt: "Beach activity at Chillspot Diani" },
  { src: "/images/gallery-1.jpeg", alt: "Chillspot Diani atmosphere and venue" },
  { src: "/images/gallery-2.jpeg", alt: "Evening atmosphere at Chillspot Diani" },
  { src: "/images/gallery-3.jpeg", alt: "Guests enjoying Chillspot Diani" },
  { src: "/images/bartender.jpeg", alt: "Bartender at Chillspot Diani" },
  { src: "/images/music-2.jpeg", alt: "Live music performance at Chillspot Diani" },
];

export default function HomePage() {
  return (
    <>
      <main className="bg-[#f8f4ec] text-[#1f1f1f]">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpeg"
              alt="Oceanfront seating and sunrise view at Chillspot Diani"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
          </div>

          <Navbar />

          <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 pb-16 pt-28 sm:pt-32 lg:px-10">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#7ed8f7] sm:text-sm">
                Beachfront dining • Music • Good vibes
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                Relax, dine, and experience the spirit of Diani.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
                Chillspot Diani brings together ocean views, fresh food,
                crafted drinks, live music, and a warm coastal atmosphere made
                for unforgettable moments.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#highlights"
                  className="inline-flex items-center justify-center rounded-full bg-[#19aee6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8fc2]"
                >
                  Explore the Experience
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f1f1f]"
                >
                  Plan Your Visit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/about.jpeg" alt="Guests relaxing at Chillspot Diani beachfront seating" width={900} height={700} className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#19aee6]">About Chillspot</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A laid-back coastal escape built for connection.</h2>
            <p className="mt-6 text-base leading-8 text-[#4b4b4b]">Set in the heart of Diani’s beach lifestyle, Chillspot is where guests come to slow down, share good food, enjoy music, and soak in the beauty of the coast. It is relaxed, welcoming, and full of character.</p>
            <p className="mt-4 text-base leading-8 text-[#4b4b4b]">Whether you are here for a quiet oceanfront meal, drinks with friends, or an evening of live entertainment, Chillspot offers an atmosphere that feels both vibrant and easy.</p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-[#19aee6]">Beachfront</p>
                <p className="mt-1 text-sm text-[#555]">Scenic ocean setting</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-[#19aee6]">Fresh Food</p>
                <p className="mt-1 text-sm text-[#555]">Seafood and local flavor</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-[#19aee6]">Live Vibes</p>
                <p className="mt-1 text-sm text-[#555]">Music and energy</p>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#19aee6]">The Experience</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything you need for a memorable day by the beach.</h2>
              <p className="mt-4 text-base leading-8 text-[#4b4b4b]">From delicious meals and refreshing drinks to live entertainment and oceanfront relaxation, Chillspot Diani is made for easy, joyful moments.</p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-3xl bg-[#f8f4ec] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-72">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#555]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#19aee6]">Beach Activities</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">More than a restaurant — a full beachside experience.</h2>
            <p className="mt-6 text-base leading-8 text-[#4b4b4b]">Chillspot is a place to move, laugh, gather, and enjoy the coast. Whether you are dropping in for a casual afternoon or spending the whole evening here, the space invites you to be part of the energy.</p>
            <p className="mt-4 text-base leading-8 text-[#4b4b4b]">Expect social beach moments, vibrant surroundings, and a setting that blends relaxation with fun.</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/activities.jpeg" alt="Activities and beachside fun at Chillspot Diani" width={900} height={700} className="h-full w-full object-cover" />
          </div>
        </section>

        <section id="gallery" className="bg-[#fffaf2] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#19aee6]">Gallery</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A glimpse into the Chillspot vibe.</h2>
              <p className="mt-4 text-base leading-8 text-[#4b4b4b]">Warm lighting, live moments, beach energy, great people, and the kind of atmosphere that keeps guests coming back.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-3xl shadow-md">
                  <Image src={image.src} alt={image.alt} width={800} height={700} className="h-72 w-full object-cover transition duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="overflow-hidden rounded-3xl bg-[#1f1f1f] text-white shadow-2xl">
              <div className="grid gap-10 px-6 py-12 lg:grid-cols-2 lg:px-12 lg:py-16">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7ed8f7]">Visit Chillspot Diani</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Come for the view, stay for the experience.</h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/80">Whether you are planning a relaxed lunch, sunset drinks, a live music night, or a beach hangout with friends, Chillspot Diani is ready to welcome you.</p>

                  <div className="mt-8 space-y-3 text-sm text-white/85">
                    <p>📍 Diani Beach, Kenya</p>
                    <p>📞 +254 115 679584</p>
                    <p>📧 hello@chillspotdiani.com</p>
                    <p>🕒 Daily: 10:00 AM – Late</p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href="https://wa.me/254115679584?text=Hello%20Chillspot%20Diani!%20%F0%9F%91%8B%20I%E2%80%99d%20like%20to%20make%20a%20reservation.%20Please%20share%20availability,%20seating%20options,%20and%20any%20details%20I%20should%20know%20before%20visiting.%20Thank%20you!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]">Reserve on WhatsApp</a>
                    <a href="https://maps.google.com/?q=Diani+Beach+Kenya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f1f1f]">Open Map</a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image src="/images/choma.jpeg" alt="Nyama choma served at Chillspot Diani" width={600} height={700} className="h-full w-full object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image src="/images/bartender.jpeg" alt="Bartender serving guests at Chillspot Diani" width={600} height={700} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-[#171717] p-4">
                <iframe title="Chillspot Diani Map" src="https://www.google.com/maps?q=Diani%20Beach%20Kenya&output=embed" className="h-[300px] w-full rounded-2xl border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
