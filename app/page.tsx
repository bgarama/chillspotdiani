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

      <main className="bg-[#fcfaf6] text-[#163042]">
        <section
          id="top"
          className="relative overflow-hidden bg-[#08131b] pt-24 text-white sm:pt-28"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpeg"
              alt="Chillspot Diani hero view"
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08131b]/75 via-[#08131b]/82 to-[#08131b]" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-14 sm:px-6 sm:pb-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:pb-20">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#7ed8f7] sm:text-sm">
                Beachside dining & relaxation
              </p>

              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
                Where Diani evenings feel effortless.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                From sunrise coffee to sunset cocktails, Chillspot Diani brings
                together warm hospitality, fresh flavors, and a calm coastal atmosphere.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#about"
                  className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#1daee5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1297ca]"
                >
                  Discover More
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#08131b]"
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

            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.25rem] bg-[#fffdf9] text-[#163042] shadow-2xl">
                <Image
                  src="/images/activities-1.jpeg"
                  alt="Chillspot Diani experience"
                  width={900}
                  height={700}
                  className="h-[200px] w-full object-cover sm:h-[240px] lg:h-[300px]"
                />
                <div className="space-y-4 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1daee5] sm:text-sm">
                    Tonight at Chillspot
                  </p>
                  <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                    Ocean breeze, good company, and something refreshing on every table.
                  </h2>
                  <div className="grid gap-4 text-sm text-[#4c6472] sm:grid-cols-3">
                    <div>
                      <strong className="block text-[#163042]">Open daily</strong>
                      <span>From 10:00</span>
                    </div>
                    <div>
                      <strong className="block text-[#163042]">Reservations</strong>
                      <span>Always welcome</span>
                    </div>
                    <div>
                      <strong className="block text-[#163042]">Vibe</strong>
                      <span>Warm, lively & unforgettable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#fcfaf6] py-14 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1daee5] sm:text-sm">
                About us
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102835] sm:text-4xl">
                Designed for lingering, laughing, and unwinding.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#526977] sm:text-lg sm:leading-8">
                Chillspot Diani is a beach-inspired destination where comfort,
                connection, and polished hospitality come together in one easy,
                welcoming setting.
              </p>
              <p className="mt-4 text-base leading-7 text-[#526977] sm:text-lg sm:leading-8">
                We bring together the energy of a lively coastal venue with the
                ease of a place where guests can settle in, stay awhile, and enjoy the moment.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#e8eef1] bg-white shadow-sm">
              <Image
                src="/images/about.jpeg"
                alt="About Chillspot Diani"
                width={900}
                height={700}
                className="h-[210px] w-full object-cover sm:h-[260px] lg:h-[300px]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#102835] sm:text-2xl">
                  What guests can expect
                </h3>
                <ul className="mt-4 space-y-3 text-[#526977]">
                  <li>Warm service and a relaxed atmosphere</li>
                  <li>Great food, drinks, and shared experiences</li>
                  <li>Ideal for couples, friends, and small groups</li>
                  <li>A setting that feels both polished and easygoing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="scroll-mt-24 bg-[#f4f8fa] py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1daee5] sm:text-sm">
                Why guests return
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102835] sm:text-4xl">
                Every detail is shaped for a relaxed coastal experience.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.25rem] border border-[#e6edf0] bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#102835] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#526977]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="scroll-mt-24 bg-[#fcfaf6] py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1daee5] sm:text-sm">
                Activities
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102835] sm:text-4xl">
                More than a meal — it&apos;s a complete coastal experience.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {activities.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.4rem] border border-[#e6edf0] bg-white shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={500}
                    className="h-52 w-full object-cover sm:h-56"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#102835] sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 bg-[#f4f8fa] py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1daee5] sm:text-sm">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102835] sm:text-4xl">
                A glimpse of the atmosphere waiting for you.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.image}
                  className="overflow-hidden rounded-[1.4rem] border border-[#e6edf0] bg-white shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={700}
                    className="h-56 w-full object-cover sm:h-64 lg:h-72"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#0c1a24] py-14 text-white lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7ed8f7] sm:text-sm">
                Visit us
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Come by for a meal, a drink, or a quiet moment by the coast.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Reservations are welcome and walk-ins are always appreciated.
                For inquiries, reach us through the contact options below.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white p-6 text-[#163042] shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1daee5] sm:text-sm">
                Contact
              </p>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4c6472]">
                <a href="tel:+254757857700" className="block hover:text-[#1daee5]">
                  +254 757 857 700
                </a>
                <a
                  href="mailto:chillspotdiani002@gmail.com"
                  className="block break-words hover:text-[#1daee5]"
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
                  className="inline-flex items-center justify-center rounded-full bg-[#eef8fc] px-5 py-3 text-sm font-semibold text-[#163042] transition hover:bg-[#d8f1fb]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@chillspot_diani?_r=1&_t=ZS-98dR1BuqKto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#eef8fc] px-5 py-3 text-sm font-semibold text-[#163042] transition hover:bg-[#d8f1fb]"
                >
                  TikTok
                </a>
                <a
                  href="mailto:chillspotdiani002@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#1daee5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1297ca]"
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
