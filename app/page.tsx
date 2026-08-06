export default function Home() {
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
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "late",
            },
          }),
        }}
      />
      <main className="page-shell">
      <header className="topbar">
        <a href="#top" className="brand">
          <img src="/images/logo.jpeg" alt="Chillspot Diani logo" className="brand-mark" />
          <span>Chillspot Diani</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#visit">Visit</a>
        </nav>
        <a href="#visit" className="btn btn-primary compact">
          Visit Us
        </a>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Beachside dining & relaxation</p>
            <h1>Where Diani evenings feel effortless.</h1>
            <p className="hero-text">
              From sunrise coffee to sunset cocktails, Chillspot Diani brings
              together warm hospitality, fresh flavors, and a calm coastal
              atmosphere.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="btn btn-light">
                Discover More
              </a>
              <a href="#visit" className="btn btn-outline">
                Plan Your Visit
              </a>
            </div>

            <ul className="hero-points">
              <li>Fresh coastal cuisine</li>
              <li>Relaxed lounge atmosphere</li>
              <li>Ideal for groups and quiet evenings</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <img src="/images/hero.jpeg" alt="Chillspot Diani hero view" className="hero-image" />
              <p className="panel-label">Tonight at Chillspot</p>
              <h2>
                Ocean breeze, good company, and something refreshing on every
                table.
              </h2>
              <div className="panel-stats">
                <div>
                  <strong>Open daily</strong>
                  <span>From 10:00</span>
                </div>
                <div>
                  <strong>Reservations</strong>
                  <span>Always welcome</span>
                </div>
                <div>
                  <strong>Vibe</strong>
                  <span>Warm, lively & unforgettable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow section-eyebrow">About us</p>
            <h2>Designed for lingering, laughing, and unwinding.</h2>
            <p>
              Chillspot Diani is a beach-inspired destination where comfort,
              connection, and polished hospitality come together in one easy,
              welcoming setting.
            </p>
            <p>
              We bring together the energy of a lively coastal venue with the
              ease of a place where guests can settle in, stay awhile, and enjoy
              the moment.
            </p>
          </div>

          <div className="info-card">
            <img src="public/images/activities-1.jpeg" alt="Chillspot Diani activities" className="about-image" />
            <h3>What guests can expect</h3>
            <ul>
              <li>Warm service and a relaxed atmosphere</li>
              <li>Great food, drinks, and shared experiences</li>
              <li>Ideal for couples, friends, and small groups</li>
              <li>A setting that feels both polished and easygoing</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="highlights" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why guests return</p>
            <h2>Every detail is shaped for a relaxed coastal experience.</h2>
          </div>

          <div className="cards-grid">
            {highlights.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="image-strip">
            <img src="public/images/food.jpeg" alt="Signature food served at Chillspot Diani" className="strip-image" />
            <img src="public/images/drink-1.jpeg" alt="Refreshing drink at Chillspot Diani" className="strip-image" />
            <img src="public/images/music.jpeg" alt="Live music atmosphere at Chillspot Diani" className="strip-image" />
          </div>
        </div>
      </section>

      <section id="visit" className="section contact-preview">
        <div className="container callout">
          <div>
            <p className="eyebrow">Visit us</p>
            <h2>Come by for a meal, a drink, or a quiet moment by the coast.</h2>
            <img src="/images/gallery-1.jpeg" alt="Chillspot Diani venue atmosphere" className="visit-image" />
            <p>
              Reservations are welcome and walk-ins are always appreciated. For
              inquiries, reach us at the details below and we will be happy to
              help.
            </p>
          </div>

          <div className="contact-card">
            <p className="contact-label">Contact</p>
            <a href="tel:+254757857700">+254 757 857 700</a>
            <a href="mailto:chillspotdiani002@gmail.com">chillspotdiani002@gmail.com</a>
            <a href="mailto:chillspotdiani002@gmail.com" className="btn btn-primary">
              Reserve Your Table
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <a href="#top" className="brand footer-brand">
              Chillspot Diani
            </a>
            <p>Coastal comfort, fresh flavor, and laid-back energy.</p>
          </div>
          <div className="footer-credit">
            <p>
              Designed and deployed by{' '}
              <a
                href="https://bahamadzogadze.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baha Digital Innovation Hub
              </a>
            </p>
            <p>© 2026 Chillspot Diani. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
