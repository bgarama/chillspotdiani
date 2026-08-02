export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-r from-blue-900 via-cyan-700 to-teal-500 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-100">
            Welcome to Diani Beach
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Chillspot Diani
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cyan-50 md:text-xl">
            Your relaxing coastal destination for great vibes, refreshing drinks,
            delicious food, and unforgettable beachside moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-white px-6 py-3 font-semibold text-cyan-800 shadow-md transition hover:bg-cyan-50"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-cyan-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">About Chillspot Diani</h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Chillspot Diani is a beach-inspired lifestyle destination designed
              for comfort, connection, and memorable experiences. Whether you are
              dropping by for a casual meal, sunset drinks, or a full day of
              relaxation, we offer a welcoming space with a laid-back coastal feel.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              We combine warm hospitality, a beautiful atmosphere, and a menu
              crafted to suit both locals and visitors looking for the best of
              Diani.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Why visitors love us</h3>
            <ul className="mt-6 space-y-4 text-lg text-gray-700">
              <li>• Relaxed and stylish beach atmosphere</li>
              <li>• Great food, drinks, and social spaces</li>
              <li>• Ideal for friends, families, and travelers</li>
              <li>• Perfect for sunset moments and weekend hangouts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">What to Expect</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Food & Drinks</h3>
              <p className="mt-3 text-gray-700">
                Enjoy a selection of tasty meals, refreshing cocktails, and
                satisfying beverages in a relaxed setting.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Relaxed Ambience</h3>
              <p className="mt-3 text-gray-700">
                Experience a calm, inviting environment inspired by the beauty
                and rhythm of the coast.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Memorable Moments</h3>
              <p className="mt-3 text-gray-700">
                From casual meetups to special celebrations, Chillspot Diani is
                made for meaningful experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-cyan-900 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Visit or Contact Us</h2>
          <p className="mt-4 max-w-2xl text-lg text-cyan-100">
            Planning to stop by? We would love to welcome you. Reach out for
            reservations, inquiries, or event details.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="mt-2 text-cyan-100">Diani Beach, Kenya</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="mt-2 text-cyan-100">+254 XXX XXX XXX</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="mt-2 text-cyan-100">info@chillspotdiani.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}