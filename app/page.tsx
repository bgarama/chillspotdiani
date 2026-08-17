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
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
          </div>

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:grid-cols-2 lg:px-10 lg:pt-36">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#7ed8f7] sm:text-sm">
                Beachside dining & relaxation
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Where Diani evenings feel effortless.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                From sunrise coffee to sunset cocktails, Chillspot Diani brings
                together warm hospitality, fresh flavors, and a calm coastal atmosphere.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full bg-[#19aee6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8fc2]"
                >
                  Discover More
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                >
                  Plan Your Visit
                </a>
              </div>

              <ul className="mt-7 grid gap-2 text-sm text-white/85 sm:grid-cols-3 sm:gap-3">
                <li>Fresh coastal cuisine</li>
                <li>Relaxed lounge atmosphere</li>
                <li>Ideal for groups and quiet evenings</li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-3 backdrop-blur-sm sm:rounded-[2rem] sm:p-4">
              <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1f1f1f] shadow-2xl sm:rounded-[1.5rem]">
                <Image
                  src="/images/activities-1.jpeg"
                  alt="Chillspot Diani experience"
                  width={900}
                  height={700}
                  className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                />
                <div className="space-y-4 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19aee6] sm:text-sm">
                    Tonight at Chillspot
                  </p>
                  <h2 className="text-xl font-bold leading-snug sm:text-2xl">
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

        <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10 lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19aee6] sm:text-sm">
                About us
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:mt-4 sm:text-4xl">
                Designed for lingering, laughing, and unwinding.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#555] sm:mt-6 sm:text-lg sm:leading-8">
                Chillspot Diani is a beach-inspired destination where comfort,
                connection, and polished hospitality come together in one easy,
                welcoming setting.
              </p>
              <p className="mt-4 text-base leading-7 text-[#555] sm:text-lg sm:leading-8">
                We bring together the energy of a lively coastal venue with the
                ease of a place where guests can settle in, stay awhile, and enjoy the moment.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-[#f7fbfd] shadow-sm sm:rounded-[2rem]">
              <Image
                src="/images/about.jpeg"
                alt="About Chillspot Diani"
                width={900}
                height={700}
                className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[320px]"
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-[#111111] sm:text-2xl">
                  What guests can expect
                </h3>
                <ul className="mt-4 space-y-3 text-[#555] sm:mt-5">
                  <li>Warm service and a relaxed atmosphere</li>
                  <li>Great food, drinks, and shared experiences</li>
                  <li>Ideal for couples, friends, and small groups</li>
                  <li>A setting that feels both polished and easygoing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19aee6] sm:text-sm">
                Why guests return
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:mt-4 sm:text-4xl">
                Every detail is shaped for a relaxed coastal experience.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:rounded-[1.5rem] sm:p-6"
                >
                  <h3 className="text-lg font-semibold text-[#111111] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#555]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19aee6] sm:text-sm">
                Activities
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:mt-4 sm:text-4xl">
                More than a meal — it&apos;s a complete coastal experience.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
              {activities.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.25rem] bg-[#f7fbfd] shadow-sm sm:rounded-[1.5rem]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={500}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-[#111111] sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19aee6] sm:text-sm">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:mt-4 sm:text-4xl">
                A glimpse of the atmosphere waiting for you.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.image}
                  className="overflow-hidden rounded-[1.25rem] shadow-sm sm:rounded-[1.5rem]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={700}
                    className="h-64 w-full object-cover sm:h-72 lg:h-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#111111] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7ed8f7] sm:text-sm">
                Visit us
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl">
                Come by for a meal, a drink, or a quiet moment by the coast.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                Reservations are welcome and walk-ins are always appreciated.
                For inquiries, reach us through the contact options below.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 text-[#111111] shadow-2xl sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19aee6] sm:text-sm">
                Contact
              </p>

              <div className="mt-6 space-y-4 text-base">
                <a href="tel:+254757857700" className="block break-words hover:text-[#19aee6]">
                  +254 757 857 700
                </a>
                <a
                  href="mailto:chillspotdiani002@gmail.com"
                  className="block break-words hover:text-[#19aee6]"
                >
                  chillspotdiani002@gmail.com
                </a>
                <p>Diani Beach, Kenya</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.instagram.com/chillspotdiani.ke?igsh=MW9wcTQ3enp6emxkNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3f8fb] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#e1f3fb]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@chillspot_diani?_r=1&_t=ZS-98dR1BuqKto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3f8fb] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#e1f3fb]"
                >
                  TikTok
                </a>
                <a
                  href="mailto:chillspotdiani002@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#19aee6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8fc2]"
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
