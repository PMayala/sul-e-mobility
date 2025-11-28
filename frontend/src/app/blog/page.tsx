'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { JSX } from 'react/jsx-runtime'

/* ------------------------------
   TYPES
------------------------------ */
type Story = {
  date: string
  title: string
  image: string
  text?: string
  full: JSX.Element
}

/* ------------------------------
   MAIN BLOG PAGE
------------------------------ */
export default function Blog() {
  const articleRef = useRef<HTMLDivElement | null>(null)

  const stories: Story[] = [
    {
      date: '1 d • January 4, 2025',
      title: 'Gorilla 2.0 Launch: The King of the Road Takes Over!',
      image: '/images/blog/gorilla-launch.jpg',
      full: (
        <>
          <p className="text-gray-300 mb-4">
            S.U.L E-Mobility has officially launched the Gorilla 2.0, a groundbreaking electric
            bike redefining urban transportation. With its bold tagline, “King of the Road,”
            the Gorilla 2.0 is designed for efficiency, sustainability, and unmatched performance.
          </p>

          <h3 className="font-semibold mb-2">Game-Changing Features</h3>
          <p className="text-gray-300 mb-3">
            This eco-friendly bike boasts a fast-charging battery with a 90 KM range per charge,
            saving riders up to 60% on fuel costs. It’s packed with innovative features like LED
            lights, dual gear modes (Eco and Sport), a Bluetooth radio, and a protective guardrail.
          </p>

          <h3 className="font-semibold mb-2">Exciting Launch Offers</h3>
          <p className="text-gray-300 mb-3">
            Early buyers can enjoy helmets, jackets, and t-shirts. Refer a friend and earn instant cash rewards.
          </p>

          <h3 className="font-semibold mb-2">Event Highlights</h3>
          <p className="text-gray-300 mb-3">
            The launch event at S.U.L Dealership in Giporoso showcased innovation, live demos,
            and a strong commitment toward sustainable mobility.
          </p>

          <h3 className="font-semibold mb-2">Looking Ahead</h3>
          <p className="text-gray-300">
            With Gorilla 2.0, S.U.L E-Mobility sets a new standard for electric bikes in Rwanda.
          </p>
        </>
      ),
      text:
        'The Gorilla 2.0 launch event was a bold showcase of innovation, sustainability, and performance.',
    },

    {
      date: 'Friday, 13 Dec 2024',
      title: 'JOBNET 2024',
      image: '/images/blog/jobnet.png',
      text:
        'This event gives the opportunity to jobseekers and companies to meet face-to-face and exchange about opportunities.',
      full: (
        <>
          <p className="text-gray-300">
            JOBNET 2024 connected job seekers with leading companies in Rwanda.
            S.U.L E-Mobility showcased new career opportunities in EV Services,
            Tech, and Operations.
          </p>
          <p className="mt-3 text-gray-300">
            Attendees learned about EV technology, charging infrastructure,
            and our training programs for technicians and riders.
          </p>
        </>
      ),
    },

    {
      date: 'Friday, 19 Apr 2024',
      title: 'Faster Charging, Happier Riders',
      image: '/images/blog/giporoso.png',
      text:
        'SUL continues to introduce faster chargers — riders are loving it.',
      full: (
        <>
          <p className="text-gray-300">
            Fast-charging stations are reducing waiting times dramatically,
            giving riders more convenience and better uptime.
          </p>
        </>
      ),
    },

    {
      date: 'Recent',
      title: 'Expanding Access with New Popup Charging Stations',
      image: '/images/blog/facility.jpg',
      text:
        'EVP is installing popup charging stations in remote areas.',
      full: (
        <>
          <p className="text-gray-300">
            Popup charging stations help riders in rural communities access
            reliable charging without needing to travel long distances.
          </p>
        </>
      ),
    },
  ]

  const [active, setActive] = useState<Story>(stories[0])

  return (
    <main className="bg-black text-white">
      <HeroSection />
      <MainArticle active={active} articleRef={articleRef} />
      <MoreStories stories={stories} setActive={setActive} articleRef={articleRef} />
      <JoinCta />
    </main>
  )
}

/* ------------------------------
   HERO SECTION
------------------------------ */
function HeroSection() {
  return (
    <section className="py-20 md:py-24 border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="uppercase tracking-[0.35em] text-xs text-red-500 mb-4">
          S.U.L E-MOBILITY
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-custom font-bold mb-3">
          Our News
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Get the latest updates and deeper mobility experience from S.U.L E-Mobility.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------
   MAIN ARTICLE — DYNAMIC
------------------------------ */
function MainArticle({
  active,
  articleRef,
}: {
  active: Story
  articleRef: React.RefObject<HTMLDivElement | null>
}) {

  return (
    <section
      ref={articleRef}
      className="bg-black py-10 md:py-16 scroll-mt-24"
    >
      <motion.div
        key={active.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.25fr,1fr] gap-10 lg:gap-16 items-start"
      >
        {/* IMAGE */}
        <div className="relative h-[260px] sm:h-[360px] lg:h-[420px]">
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <p className="text-xs text-gray-400 mb-2">{active.date}</p>

          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
            {active.title}
          </h2>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            {active.full}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------
   MORE STORIES — CLICK TO LOAD ARTICLE
------------------------------ */
function MoreStories({
  stories,
  setActive,
  articleRef,
}: {
  stories: Story[]
  setActive: (story: Story) => void
  articleRef: React.RefObject<HTMLDivElement | null>
}) {

  return (
    <section className="bg-black py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-8">
          Discover More Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article
              key={story.title}
              onClick={() => {
                setActive(story)
                articleRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
              className="bg-gray-950 border border-gray-800 flex flex-col cursor-pointer hover:border-red-600 transition"
            >
              <div className="relative h-40">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-1">{story.date}</p>
                <h3 className="font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-400 text-sm flex-1">{story.text}</p>

                <div className="mt-4 text-xs text-red-500 tracking-[0.25em] uppercase">
                  Read More →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------
   CTA
------------------------------ */
function JoinCta() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
          Be part of the e-mobility revolution with
          <br />
          S.U.L E-Mobility!
        </h2>

        <button className="mt-6 px-10 py-3 bg-red-600 hover:bg-red-700 transition-colors text-sm font-semibold tracking-wide">
          Subscribe
        </button>
      </div>
    </section>
  )
}
