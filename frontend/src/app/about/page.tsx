'use client'

import Image from 'next/image'
import { motion, useAnimation, useAnimationControls, useInView } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type TimelineItem = {
  year: string
  title: string
  text: string
}

const timelineData: TimelineItem[] = [
  {
    year: '2017',
    title: 'S.U.L Founded + R&D',
    text: 'Through 6 prototypes we refined our first EV platforms.',
  },
  {
    year: '2018–2019',
    title: 'EV Policy & Advocacy',
    text: 'Working with government to shape Rwanda’s EV roadmap.',
  },
  {
    year: '2020–2021',
    title: 'E-Mobility Academy',
    text: 'Training the first generation of EV riders & technicians.',
  },
  {
    year: '2022–2023',
    title: 'GORILLA 1.0 Launch',
    text: 'Scaling pilot fleets & empowering graduates.',
  },
  {
    year: '2024',
    title: 'GORILLA 2.0 + Assembly Line',
    text: 'Commissioning a world-class assembly facility in Kigali.',
  },
]

const keyPoints = [
  {
    title: 'Build a strong brand',
    text: 'Continue staying ahead of the curve using advanced innovation.',
  },
  {
    title: 'Innovation',
    text: 'Deliver advanced solutions with continuous product development.',
  },
  {
    title: 'Affordability',
    text: 'Provide quality electric mobility at competitive prices.',
  },
  {
    title: 'Team',
    text: 'Build a strong team of experienced professionals.',
  },
  {
    title: 'Revenue Growth',
    text: 'Grow sustainably while reinvesting in R&D and skills.',
  },
  {
    title: 'Customer First',
    text: 'Prioritise customer experience with quality products & services.',
  },
]

const galleryImages = [
  '/images/about/gallery (1).JPG',
  '/images/about/gallery (2).JPG',
  '/images/about/gallery (3).JPG',
  '/images/about/gallery (4).JPG',
  '/images/about/gallery (5).JPG',
  '/images/about/gallery (6).JPG',
]

export default function About() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <WhoWeAreSection />
      <MissionTimelineSection />
      <KeyToSuccessSection />
      <GallerySection />
      <NewsSection />
      <FAQSection />
      <style jsx global>{`
  /* GLOBAL SCROLLBAR HIDE */
  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hidden {
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }

  /* THEMED RED SCROLLBAR */
  .scrollbar-themed::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  .scrollbar-themed::-webkit-scrollbar-track {
    background: #0d0d0d;
  }
  .scrollbar-themed::-webkit-scrollbar-thumb {
    background: #b91c1c;
    border-radius: 8px;
  }
  .scrollbar-themed::-webkit-scrollbar-thumb:hover {
    background: #dc2626;
  }
`}</style>

    </main>
  )
}

/* ---------------------------------------------------
   HERO
--------------------------------------------------- */
function HeroSection() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[620px]">
      <Image
        src="/images/about/hero-bike.JPG"
        alt="About S.U.L E-Mobility"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-16 flex flex-col justify-end h-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-custom font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-300 max-w-xl text-sm sm:text-base">
          Pioneering Rwanda&apos;s transition to clean, affordable and intelligent e-mobility.
        </p>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   WHO WE ARE
--------------------------------------------------- */
function WhoWeAreSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr,1fr] gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">Who We Are</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-3">
            S.U.L E-Mobility offers quality and affordable electric vehicles such as e-motorcycles,
            e-scooters, e-cars and more, along with spare parts and services to a growing market of
            private users and taxi operators in Rwanda and Africa.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            From our assembly line to our academy, we&apos;re building an ecosystem that makes
            electric mobility accessible, sustainable and profitable for everyday riders.
          </p>
        </div>
        <div className="relative h-[260px] sm:h-[320px]">
          <Image
            src="/images/about/whoweare-team.JPG"
            alt="S.U.L team"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   MISSION + CINEMATIC TIMELINE (FULL BLOCK)
--------------------------------------------------- */
function MissionTimelineSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const lineControls = useAnimation()
  const inView = useInView(containerRef, { once: true, margin: '-20% 0px' })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      lineControls.start('visible')
    }
  }, [inView, controls, lineControls])

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.25 },
    }),
  }

  const lineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: { duration: 2, ease: 'easeInOut' },
    },
  }

  return (
    <section className="bg-gray-950 py-16 md:py-24 border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* --- OUR MISSION --- */}
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-3">Our Mission</h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Our mission is to provide high-quality, convenient and comprehensive electric vehicle
              sales, leasing, after-sales service, spare parts, and EV training. Our strongest 
              foundation is trust — with riders, partners, and the communities we serve.
            </p>
          </div>

          <div className="relative h-[220px] sm:h-[260px] rounded-lg overflow-hidden">
            <Image
              src="/images/about/mission-photo.JPG"
              alt="Mission image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* --- CINEMATIC TIMELINE --- */}
        <div ref={containerRef} className="relative">
          <h3 className="text-xl sm:text-2xl font-custom font-bold mb-10">
            Our Journey
          </h3>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-950 to-transparent z-20" />

          <div className="relative overflow-x-auto pb-12 scrollbar-hidden cursor-grab active:cursor-grabbing">

            {/* DRAG HINT */}
            {inView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.6, 0.6, 0] }}
                transition={{ delay: 1, duration: 4 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-400 text-xs pointer-events-none z-30"
              >
                ⇠ drag to explore ⇢
              </motion.div>
            )}

            {/* MAIN TIMELINE LINE */}
            <motion.div
              className="absolute top-7 left-0 h-[2px] bg-gray-700 origin-left"
              variants={lineVariants}
              initial="hidden"
              animate={lineControls}
            />


            {/* DRAGGABLE TIMELINE CONTENT */}
            <motion.div
              className="relative flex gap-14 md:gap-16 min-w-max pt-4"
              drag="x"
              dragConstraints={{ left: -600, right: 0 }}
              dragElastic={0.12}
              whileTap={{ cursor: 'grabbing' }}
            >
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative min-w-[200px] max-w-[260px] flex flex-col"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {/* DOT + YEAR BADGE */}
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="h-4 w-4 rounded-full bg-red-600 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 0 12px rgba(239,68,68,0.5)',
                          '0 0 18px rgba(239,68,68,1)',
                          '0 0 12px rgba(239,68,68,0.5)',
                        ],
                      }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <motion.span
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-900 border border-gray-700"
                      whileHover={{
                        scale: 1.06,
                        backgroundColor: 'rgba(239,68,68,0.12)',
                      }}
                    >
                      {item.year}
                    </motion.span>
                  </div>

                  {/* TITLE + TEXT */}
                  <div className="pl-[22px] border-l border-gray-700/60">
                    <p className="text-xs text-red-500 uppercase tracking-wider mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ---------------------------------------------------
   KEY TO SUCCESS – Hover lift cards
--------------------------------------------------- */
function KeyToSuccessSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-8">
          Our Key to Success
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {keyPoints.map((k) => (
            <motion.div
              key={k.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="border border-gray-800 bg-gradient-to-b from-gray-950 to-black p-5 shadow-[0_0_0_rgba(0,0,0,0.0)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <p className="text-sm text-red-500 font-semibold mb-2">{k.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{k.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   MASTERPIECE GALLERY – Cinematic, Large, Premium
--------------------------------------------------- */
type GalleryRowProps = {
  images: string[]
  direction: 'left' | 'right'
}

function GalleryRow({ images, direction }: GalleryRowProps) {
  const controls = useAnimationControls()

  const startAnimation = () => {
    controls.start({
      x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        duration: 45,        // smoother + longer
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }

  useEffect(() => {
    startAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePause = () => controls.stop()
  const handleResume = () => startAnimation()

  return (
    <div
      className="relative overflow-hidden py-6"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
    >
      {/* EDGE GRADIENTS (Apple-style) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20" />

      <motion.div
        className="flex gap-6 whitespace-nowrap cursor-grab active:cursor-grabbing"
        animate={controls}
        drag="x"
        dragElastic={0.15}
        dragConstraints={{ left: -600, right: 0 }}
        onDragStart={handlePause}
        onDragEnd={handleResume}
      >
        {/* MAP TWICE FOR INFINITE LOOP */}
        {[...images, ...images].map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 35px rgba(255,0,0,0.25)',
            }}
            className="relative overflow-hidden rounded-2xl shadow-xl min-w-[380px] sm:min-w-[440px] lg:min-w-[520px] 
                       h-[240px] sm:h-[280px] lg:h-[330px]"
          >
            <Image
              src={src}
              alt="S.U.L Gallery"
              fill
              className="object-cover rounded-2xl transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function GallerySection() {
  return (
    <section className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-12">
          Our Gallery
        </h2>

        <GalleryRow images={galleryImages} direction="left" />
        <GalleryRow images={galleryImages} direction="right" />
      </div>
    </section>
  )
}


/* ---------------------------------------------------
   OUR NEWS – refined layout
--------------------------------------------------- */
function NewsSection() {
  return (
    <section className="bg-black py-20 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-8">
          Our News
        </h2>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          className="grid md:grid-cols-2 gap-10 border border-gray-800 bg-gradient-to-b from-gray-950 to-black p-6 md:p-8"
        >
          <div className="relative h-[260px] md:h-[320px]">
            <Image
              src="/images/about/news-gorilla.jpg"
              alt="Gorilla 2.0 Launch"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400 mb-1">1 d • January 4, 2025</p>
            <h3 className="font-semibold text-xl sm:text-2xl mb-3">
              Gorilla 2.0 Launch: The King of the Road Takes Over!
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              S.U.L E-Mobility has officially launched Gorilla 2.0, setting a new benchmark for
              electric motorcycles in Rwanda with powerful performance, lower running costs and
              bold design.
            </p>
           <Link
              href="/blog"
              className="text-xs text-red-500 tracking-[0.25em] uppercase hover:text-red-400 transition-colors"
              >
               Read More →
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   FAQ – polished accordion
--------------------------------------------------- */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How can I request a test ride of an EV?',
      answer:
        'Visit our “Request a Test Ride” page or contact our customer service team. We will schedule a ride at your convenience.',
    },
    {
      question: 'What is the Rent-On-The-Go (R-T-G) program?',
      answer:
        'Rent-On-The-Go allows you to rent electric vehicles on a daily basis with convenience services included at competitive rates.',
    },
    {
      question: 'How does the Lease-To-Own (L-T-O) program work?',
      answer:
        'Our Lease-To-Own program offers flexible 24–36 month payment plans, allowing you to eventually own the vehicle.',
    },
    {
      question: 'Can I purchase an EV directly from S.U.L E-Mobility?',
      answer:
        'Yes. You can purchase directly from us and access different financing options that fit your needs.',
    },
    {
      question: 'How do I schedule maintenance for my electric vehicle?',
      answer:
        'Schedule maintenance through our booking system or by contacting our maintenance team. We provide regular check-ups and repairs.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-16 text-red-600">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - questions */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.button
                key={faq.question}
                onClick={() => setOpenIndex(index)}
                className={`w-full text-left p-6 transition-all duration-300 flex items-center justify-between group ${
                  openIndex === index
                    ? 'bg-red-600 text-white'
                    : 'bg-black border border-gray-800 text-gray-400 hover:border-red-600'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="text-sm sm:text-base font-medium">{faq.question}</span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'rotate-90 text-white' : 'text-gray-500'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Right side - answer */}
          <motion.div
            key={openIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-8 md:p-12 min-h-[260px] flex flex-col justify-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              {faqs[openIndex].question}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {faqs[openIndex].answer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


