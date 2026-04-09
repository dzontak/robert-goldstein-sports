import Image from "next/image";

// Real photos extracted from Robert's Google Photos album
const ALBUM_PHOTOS = [
  "https://lh3.googleusercontent.com/pw/AP1GczMSFU2T6u92NQknwG5TouZojGIKz3g48iaLFIFC2qEYYogYbGzEoA1XiG55iNQYIPAnfDkVWTyfhsPaA3inIZdY7a4_YwrnBTh2-TI-d74nTVxAePk9",
  "https://lh3.googleusercontent.com/pw/AP1GczP2rNOevXsi2FvHnt1hdaxh22t_BbBlw0O7sn5X9Iz0V7-NLTSn_vWd23DZ29-m3kx9cNq3v9xiYM80XvnR7n8PAyBSr3y39OPsH-qFdFHVIaQAAo5s",
  "https://lh3.googleusercontent.com/pw/AP1GczM-prEgdkILi7B17fi5Bz4i8TKvfwcUmVRvz93n6IMddjG_GSeKtJnthMA0vot-aSImqxuM-jw-70iDA4BMRhN8mX7_Uo9VpE3Pp6QfNaEU5DpAP58a",
  "https://lh3.googleusercontent.com/pw/AP1GczOf0WLoJr_3yyZuxhIfbf3zU1wAm7Y1AhAB6Kr0qFoJZuDePm0YXdBQ8LJOp4aTk20DyVzbSTucbSHhrH6aOJDWcdGPt6UiLUWAxIn4MhPDubfQyqMC",
  "https://lh3.googleusercontent.com/pw/AP1GczNEkqXh3IlzfYWbuJPlj1Wrhrbeh6tuzrMMwSE4aQd9G1aoRCAx1Kp8dmpL-znIjXYLNCgP2zkqPcJF9Z4rQ3O7vMk_F1422YjomQtG0UaTwwaoStW4",
  "https://lh3.googleusercontent.com/pw/AP1GczMIpa9p_-7MUqTVJiIo7uZ-OeppU2HNNzhxZ6_pnSxjnN51lyzw6HDTKxnER614WT0u5IGBYh3ZGoTBxaQoCXLtKcJIHjbjSbdMzUGpQndSY9rMTwiG",
  "https://lh3.googleusercontent.com/pw/AP1GczP6kpLyg8DsJZ3UAqgi62jb2_gsmhdzWhX6tlC9qPW824wysz8U2BbZ8YNfG4Zo0KL9pqRBEy7a2eqvzzf-Ku-bDCML49pEqZg6-XxGkp0lKYFOg-AM",
  "https://lh3.googleusercontent.com/pw/AP1GczM6QmSdmPzdVUC5c7vYpxf5V6CDorML8Lm7_iQPXIjeKeAuFjpaDKYKSQS-xkv8ic20UdAtY_m8t4cjdz3OI82JSRU6PEwNK3ktA5PutftQMeIPxRJ1",
  "https://lh3.googleusercontent.com/pw/AP1GczMS7X81_91a5pUcRKFUA6Tq0M8GDgIT9vYIcuuha8XEZo7ZQyRBKTDQB9xTG0a6J2ZRYGqBoaQr3JuXAYwdG3z0wSRyNtJLuqBbltB2sNlAiNHxpuG7",
];

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/robert-logo.png"
              alt="Robert Goldstein"
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-emerald-200"
            />
            <span className="text-lg font-semibold tracking-tight text-emerald-800">
              Robert Goldstein
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex">
            <a href="#about" className="transition-colors hover:text-emerald-700">About</a>
            <a href="#sports" className="transition-colors hover:text-emerald-700">Programs</a>
            <a href="#impact" className="transition-colors hover:text-emerald-700">Impact</a>
            <a href="#gallery" className="transition-colors hover:text-emerald-700">Gallery</a>
            <a href="#contact" className="transition-colors hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900">
        {/* Decorative court lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
          <div className="absolute left-[10%] top-[10%] h-[80%] w-[80%] rounded-sm border border-white" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
          {/* Logo / Avatar */}
          <div className="mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full ring-4 ring-amber-400 ring-offset-4 ring-offset-emerald-800 shadow-2xl">
            <Image
              src="/robert-logo.png"
              alt="Robert Goldstein"
              width={160}
              height={160}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Robert Goldstein
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100 sm:text-xl">
            Volunteer Coach &amp; Sports Community Leader
          </p>
          <p className="mx-auto mt-2 text-emerald-200/80">
            Huntington Lakes of Delray Beach
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#about"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-emerald-800 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl"
            >
              Learn More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#gallery"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              View Photos
            </a>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-emerald-600/50 pt-10">
            <div>
              <p className="text-3xl font-bold text-amber-400 sm:text-4xl">10+</p>
              <p className="mt-1 text-sm text-emerald-200">Years Volunteering</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400 sm:text-4xl">3</p>
              <p className="mt-1 text-sm text-emerald-200">Sports Coached</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400 sm:text-4xl">100s</p>
              <p className="mt-1 text-sm text-emerald-200">Players Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">About Robert</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                A Decade of Dedication to Community Sports
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
                <p>
                  For over ten years, Robert Goldstein has been the driving force behind the
                  sports community at Huntington Lakes, a vibrant 55+ community in Delray
                  Beach, Florida. What started as a passion for the game quickly became a
                  mission to bring people together through sport.
                </p>
                <p>
                  Robert volunteers his time coaching residents in{" "}
                  <strong className="text-stone-800">pickleball</strong>,{" "}
                  <strong className="text-stone-800">paddle tennis</strong>, and{" "}
                  <strong className="text-stone-800">regular tennis</strong> — welcoming
                  beginners and experienced players alike. His patient teaching style and
                  genuine enthusiasm have helped hundreds of community members discover the
                  joy of racquet sports.
                </p>
                <p>
                  Beyond coaching, Robert organizes clinics, round-robins, and community
                  tournaments that bring neighbors together and create lasting friendships.
                  He&rsquo;s built a culture of inclusivity, sportsmanship, and active living.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 p-10 shadow-sm ring-1 ring-stone-200/60">
                <blockquote className="text-lg italic leading-relaxed text-stone-700">
                  &ldquo;The best part of coaching isn&rsquo;t winning — it&rsquo;s
                  watching someone pick up a paddle for the first time and seeing the
                  smile on their face when they hit that perfect shot.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src="/robert-logo.png"
                    alt="Robert Goldstein"
                    width={40}
                    height={40}
                    className="rounded-full object-cover ring-2 ring-emerald-300"
                  />
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Robert Goldstein</p>
                    <p className="text-xs text-stone-500">Volunteer Coach, Huntington Lakes</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-amber-900 shadow-md">
                10+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sports Programs ── */}
      <section id="sports" className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Programs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Three Sports, One Community
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-500">
              Robert coaches across three racquet sports, tailoring sessions for all skill
              levels — from first-time players to competitive league participants.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {/* Pickleball */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200/60 transition-all hover:shadow-md hover:ring-emerald-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="9" />
                  <line x1="12" y1="15" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="9" y2="12" />
                  <line x1="15" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">Pickleball</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                The fastest-growing sport in America — and the crown jewel of Huntington
                Lakes. Robert runs regular clinics, drilling sessions, and organizes
                inter-community league play. From beginners learning the kitchen rules to
                advanced players refining their dink game.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Beginner clinics &amp; fundamentals</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Drilling &amp; strategy sessions</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />League play &amp; tournaments</li>
              </ul>
            </div>

            {/* Paddle Tennis */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200/60 transition-all hover:shadow-md hover:ring-emerald-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="6" y="2" width="12" height="20" rx="6" />
                  <circle cx="12" cy="14" r="2" />
                  <line x1="12" y1="6" x2="12" y2="10" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">Paddle Tennis</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                A South Florida favorite that combines elements of tennis and racquetball.
                Robert coaches paddle tennis with an emphasis on technique, positioning,
                and the unique strategies that make this sport so engaging for our community.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Technique &amp; positioning</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Doubles strategy</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Social round-robins</li>
              </ul>
            </div>

            {/* Tennis */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200/60 transition-all hover:shadow-md hover:ring-emerald-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2.5 9.5C5.5 9.5 8 7 8 4" />
                  <path d="M21.5 14.5C18.5 14.5 16 17 16 20" />
                  <path d="M2 12C5 12 12 5 12 2" />
                  <path d="M22 12C19 12 12 19 12 22" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">Tennis</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                The classic racquet sport where it all started. Robert brings decades of
                tennis experience to the courts, helping players of all levels improve their
                serve, volley, and groundstrokes while keeping the focus on fun and fitness.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Serve &amp; groundstroke clinics</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Singles &amp; doubles play</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Fitness through sport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community Impact ── */}
      <section id="impact" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Community Impact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">More Than Just a Game</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-500">
              Robert&rsquo;s contributions go far beyond coaching. He&rsquo;s helped build a thriving sports
              culture that keeps Huntington Lakes active, social, and connected.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-1.997M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
                title: "Building Friendships",
                desc: "Sports bring neighbors together. Robert's programs have created a tight-knit community of players who support each other on and off the court.",
              },
              {
                icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
                title: "Active Lifestyle",
                desc: "Keeping our 55+ community moving, healthy, and energized. Regular play improves physical fitness, mental sharpness, and overall well-being.",
              },
              {
                icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
                title: "Teaching & Mentoring",
                desc: "Patient instruction for all skill levels. Robert's coaching philosophy centers on encouragement, proper technique, and making every player feel welcome.",
              },
              {
                icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77 1.522m0 0a6.003 6.003 0 01-3.77-1.522" /></svg>,
                title: "Organizing Events",
                desc: "From weekly round-robins to seasonal tournaments, Robert creates opportunities for friendly competition that everyone looks forward to.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all hover:border-emerald-200 hover:bg-emerald-50/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">{item.icon}</div>
                <h3 className="mt-4 text-base font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-emerald-800 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">What Players Say</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">From the Community</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { quote: "Robert's patience and encouragement helped me go from never holding a paddle to playing in our community league. He makes everyone feel like they belong.", name: "Community Member", role: "Pickleball Player" },
              { quote: "What Robert has done for Huntington Lakes is remarkable. He's not just teaching sports — he's bringing people together and keeping our community active and vibrant.", name: "Huntington Lakes Resident", role: "Tennis & Paddle Player" },
              { quote: "I moved here not knowing anyone. Through Robert's programs, I've made lifelong friends. The sports are great, but the community he's built is even better.", name: "Community Member", role: "Beginner Player" },
            ].map((t) => (
              <div key={t.role} className="rounded-2xl bg-emerald-700/50 p-8">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-emerald-100">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-emerald-600/50 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-emerald-300">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery — Real photos from the album ── */}
      <section id="gallery" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Gallery</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              On &amp; Off the Court
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-500">
              Moments captured from years of coaching, competing, and community building at Huntington Lakes.
            </p>
          </div>

          {/* Masonry-style photo grid with real album photos */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {/* Featured large photo */}
            <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl sm:col-span-2">
              <a href="https://photos.app.goo.gl/rmYH9pu5BjZwBcBfA" target="_blank" rel="noopener noreferrer" className="group block h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${ALBUM_PHOTOS[0]}=w800-h600`}
                  alt="Robert Goldstein — Huntington Lakes sports community"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "300px" }}
                />
              </a>
            </div>

            {/* Remaining photos */}
            {ALBUM_PHOTOS.slice(1, 7).map((url, i) => (
              <div key={url} className="overflow-hidden rounded-2xl">
                <a href="https://photos.app.goo.gl/rmYH9pu5BjZwBcBfA" target="_blank" rel="noopener noreferrer" className="group block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${url}=w400-h300`}
                    alt={`Robert Goldstein at Huntington Lakes — photo ${i + 2}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
            ))}

            {/* Bottom row — 2 more photos + view all */}
            {ALBUM_PHOTOS.slice(7, 9).map((url, i) => (
              <div key={url} className="overflow-hidden rounded-2xl">
                <a href="https://photos.app.goo.gl/rmYH9pu5BjZwBcBfA" target="_blank" rel="noopener noreferrer" className="group block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${url}=w400-h300`}
                    alt={`Robert Goldstein at Huntington Lakes — photo ${i + 8}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* View full album CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://photos.app.goo.gl/rmYH9pu5BjZwBcBfA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-700 transition-all hover:bg-emerald-100 hover:text-emerald-800"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              View Full Album on Google Photos
            </a>
          </div>
        </div>
      </section>

      {/* ── Huntington Lakes ── */}
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Our Home</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Huntington Lakes</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Located in beautiful Delray Beach, Florida, Huntington Lakes is an active
                55+ community with excellent sports facilities including dedicated
                pickleball courts, paddle tennis courts, and tennis courts. The community
                is home to hundreds of residents who enjoy an active lifestyle year-round
                under the South Florida sun.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Delray Beach, FL", "55+ Community", "Pickleball Courts", "Paddle Courts", "Tennis Courts", "Year-Round Play"].map((tag) => (
                  <span key={tag} className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-xs font-medium text-stone-600">{tag}</span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-emerald-800 p-8 text-center shadow-sm">
              <svg className="mx-auto h-16 w-16 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-white">Huntington Lakes</h3>
              <p className="mt-2 text-sm text-emerald-200">Delray Beach, Florida</p>
              <p className="mt-1 text-xs text-emerald-300/70">Palm Beach County</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section id="contact" className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Image
            src="/robert-logo.png"
            alt="Robert Goldstein"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-full ring-4 ring-amber-400/50"
          />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Community</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-emerald-200">
            Whether you&rsquo;re a seasoned player or picking up a paddle for the first
            time, everyone is welcome. Come play with us at Huntington Lakes!
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://photos.app.goo.gl/rmYH9pu5BjZwBcBfA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-emerald-800 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl"
            >
              View Photo Gallery
            </a>
            <a href="#about" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10">
              Learn About Robert
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <Image src="/robert-logo.png" alt="Robert Goldstein" width={32} height={32} className="rounded-full" />
              <div>
                <p className="text-sm font-semibold text-stone-900">Robert Goldstein</p>
                <p className="text-xs text-stone-500">Volunteer Sports Coach — Huntington Lakes, Delray Beach, FL</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs text-stone-400">
              <p>Serving the community since 2014</p>
              <span className="hidden h-4 w-px bg-stone-200 sm:block" />
              <p className="hidden sm:block">&copy; {new Date().getFullYear()}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-stone-400">
            Created with care by{" "}
            <a href="https://webagent.build" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-stone-600 transition-colors">
              Webagent
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
