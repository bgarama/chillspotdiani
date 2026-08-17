import Image from "next/image";

const highlights = [
  {
    title: "Coastal atmosphere",
    text: "Soft sea air, sun-washed tones, and a calm setting that makes every visit feel like a reset.",
  },
  {
    title: "Food & drinks",
    text: "A carefully curated menu of fresh flavors, chilled drinks, and comforting favorites for any hour of the day.",
  },
  {
    title: "Gatherings that feel easy",
    text: "Whether it is a relaxed meetup or a special celebration, the space is styled for connection and comfort.",
  },
  {
    title: "Sunset moments",
    text: "The kind of place that turns golden hour into a memory, with views, music, and a warm welcome.",
  },
];

const activities = [
  {
    title: "Dining",
    image: "/images/food.jpeg",
    alt: "Fresh food served at Chillspot Diani",
  },
  {
    title: "Signature drinks",
    image: "/images/drinks.jpeg",
    alt: "Refreshing drinks at Chillspot Diani",
  },
  {
    title: "Live music",
    image: "/images/music.jpeg",
    alt: "Live music experience at Chillspot Diani",
  },
];

const gallery = [
  {
    image: "/images/gallery-1.jpeg",
    alt: "Chillspot Diani venue atmosphere",
  },
  {
    image: "/images/gallery-2.jpeg",
    alt: "Guests enjoying the Chillspot Diani experience",
  },
  {
    image: "/images/gallery-3.jpeg",
    alt: "Chillspot Diani setting and ambience",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Chillspot Diani",
            description:
              "A beach-inspired restaurant and lounge experience in Diani offering food, drinks, and relaxed coastal hospitality.",
            url: "https://chillspotdiani.com",
            telephone: "+254757857700",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Diani Beach",
              addressRegion: "Kwale",
              addressCountry: "KE",
            },
            servesCuisine: ["International", "Coastal"],
            priceRange: "$$",
          }),
        }}
      />

      <main>
        <section id="top" className="relative overflow-hidden bg-[#111111] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpeg"
              alt="Chillspot Diani hero view"
              fill
              priority
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
          </div>

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#7ed8f7]">
                Beachside dining & relaxation
              </p>
              <h1 className="max-w-2xl text-5xl font-bold leading-tight sm:text-6xl">
                Where Diani evenings feel effortless.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                From sunrise coffee to sunset cocktails, Chillspot Diani brings
                together warm hospitality, fresh flavors, and a calm coastal atmosphere.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="rounded-full bg-[#19aee6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8fc2]"
                >
                  Discover More
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                >
                  Plan Your Visit
                </a>
              </div>

              <ul className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
                <li>Fresh coastal cuisine</li>
                <li>Relaxed lounge atmosphere</li>
                <li>Ideal for groups and quiet evenings</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.5rem] bg-white text-[#1f1f1f] shadow-2xl">
                <Image
                  src="/images/activities-1.jpeg"
                  alt="Chillspot Diani experience"
                  width={900}
                  height={700}
                  className="h-[320px] w-full object-cover"
                />
                <div className="space-y-5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#19aee6]">
                    Tonight at Chillspot
                  </p>
                  <h2 className="text-2xl font-bold leading-snug">
                    Ocean breeze, good company, and something refreshing on every table.
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <strong className="block text-sm">Open daily</strong>
                      <span className="text-sm text-[#555]">From 10:00</span>
                    </div>
                    <div>
                      <strong className="block text-sm">Reservations</strong>
                      <span className="text-sm text-[#555]">Always welcome</span>
                    </div>
                    <div>
                      <strong className="block text-sm">Vibe</strong>
                      <span className="text-sm text-[#555]">Warm, lively & unforgettable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#19aee6]">
                About us
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111]">
                Designed for lingering, laughing, and unwinding.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#555]">
                Chillspot Diani is a beach-inspired destination where comfort,
                connection, and polished hospitality come together in one easy,
                welcoming setting.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#555]">
                We bring together the energy of a lively coastal venue with the
                ease of a place where guests can settle in, stay awhile, and enjoy the moment.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7fbfd] shadow-sm">
              <Image
                src="/images/about.jpeg"
                alt="About Chillspot Diani"
                width={900}
                height={700}
                className="h-[320px] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#111111]">
                  What guests can expect
                </h3>
                <ul className="mt-5 space-y-3 text-[#555]">
                  <li>Warm service and a relaxed atmosphere</li>
                  <li>Great food, drinks, and shared experiences</li>
                  <li>Ideal for couples, friends, and small groups</li>
                  <li>A setting that feels both polished and easygoing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="bg-[#f8fafc] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#19aee6]">
                Why guests return
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111]">
                Every detail is shaped for a relaxed coastal experience.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5"
                >
                  <h3 className="text-xl font-semibold text-[#111111]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#555]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#19aee6]">
                Activities
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111]">
                More than a meal — it&apos;s a complete coastal experience.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {activities.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.5rem] bg-[#f7fbfd] shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={500}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#111111]">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#f8fafc] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#19aee6]">
                Gallery
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111]">
                A glimpse of the atmosphere waiting for you.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.image} className="overflow-hidden rounded-[1.5rem] shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={700}
                    className="h-80 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#111111] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed8f7]">
                Visit us
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Come by for a meal, a drink, or a quiet moment by the coast.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Reservations are welcome and walk-ins are always appreciated.
                For inquiries, reach us through the contact options below.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-[#111111] shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#19aee6]">
                Contact
              </p>

              <div className="mt-6 space-y-4 text-base">
                <a href="tel:+254757857700" className="block hover:text-[#19aee6]">
                  +254 757 857 700
                </a>
                <a
                  href="mailto:chillspotdiani002@gmail.com"
                  className="block hover:text-[#19aee6]"
                >
                  chillspotdiani002@gmail.com
                </a>
                <p>Diani Beach, Kenya</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/chillspotdiani.ke?igsh=MW9wcTQ3enp6emxkNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#f3f8fb] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#e1f3fb]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@chillspot_diani?_r=1&_t=ZS-98dR1BuqKto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#f3f8fb] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#e1f3fb]"
                >
                  TikTok
                </a>
                <a
                  href="mailto:chillspotdiani002@gmail.com"
                  className="rounded-full bg-[#19aee6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8fc2]"
                >
                  Reserve Your Table
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
