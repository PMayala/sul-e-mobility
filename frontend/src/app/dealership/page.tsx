'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Dealership() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <SparePartsSection />
      <LocationsSection />
      <BecomeDealerSection />
      <TestimonialSection />
      <FAQSection />
    </main>
  )
}

/* -----------------------------------------------------
   COUNTER HOOK (ANIMATES NUMBERS UPWARD)
----------------------------------------------------- */
function useCounter(target: number, duration = 2000, startWhen: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startWhen) return

    let start = 0
    const end = target
    if (start === end) return

    let totalDuration = duration
    let increment = Math.max(1, Math.ceil(end / 100))
    let stepTime = totalDuration / (end / increment)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, duration, startWhen])

  return count
}

/* -----------------------------------------------------
   HERO SECTION
----------------------------------------------------- */
function HeroSection() {
  return (
    <section className="relative h-[520px] sm:h-[620px]">
      <Image
        src="/images/dealership/hero.png"
        alt="S.U.L Dealership"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-8">
        <p className="uppercase tracking-[0.35em] text-xs text-red-700 mb-4">
          DEALERSHIP NETWORK
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-custom font-bold mb-4">
          Find Your Nearest Dealership
        </h1>
        <p className="text-gray-300 max-w-xl">
          Our dealership network provides access to electric motorcycles, after-sales service,
          spare parts, and flexible ownership solutions across Rwanda.
        </p>
        <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-sm font-semibold tracking-wide w-fit">
          Locate a Dealer
        </button>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
   STATS SECTION — WITH COUNTER ANIMATION
----------------------------------------------------- */
function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const dealerships = useCounter(12, 1500, inView)
  const sold = useCounter(5000, 2000, inView)
  const evs = useCounter(1053, 2000, inView)
  const satisfaction = useCounter(98, 1500, inView)

  return (
    <section ref={ref} className="bg-black py-10 md:py-16 border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid sm:grid-cols-4 gap-6">

        <div className="text-center">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-2">Dealerships</p>
          <p className="text-3xl font-bold mb-1">{dealerships}+</p>
          <p className="text-gray-400 text-xs">Countrywide coverage</p>
        </div>

        <div className="text-center">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-2">Motorcycles Sold</p>
          <p className="text-3xl font-bold mb-1">{sold.toLocaleString()}+</p>
          <p className="text-gray-400 text-xs">GORILLA 2.0 and others</p>
        </div>

        <div className="text-center">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-2">EVs on the Road</p>
          <p className="text-3xl font-bold mb-1">{evs.toLocaleString()}</p>
          <p className="text-gray-400 text-xs">Backed by our network</p>
        </div>

        <div className="text-center">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-2">Customer Satisfaction</p>
          <p className="text-3xl font-bold mb-1">{satisfaction}%</p>
          <p className="text-gray-400 text-xs">Based on rider feedback</p>
        </div>

      </div>
    </section>
  )
}

/* -----------------------------------------------------
   EXPERIENCE
----------------------------------------------------- */
function ExperienceSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-red-500 mb-3">
            WHY S.U.L DEALERSHIP
          </p>
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-8">
            Experience Quality and
            <br />
            Reliability with our Dealership
          </h2>

          <div className="space-y-6 text-sm text-gray-300">
            <div>
              <p className="text-xs text-red-500 tracking-[0.3em] mb-1">01</p>
              <h3 className="font-semibold mb-1">Comprehensive Customer Support</h3>
              <p>
                Our dealerships offer end-to-end customer support, from test rides and financing
                to maintenance and technical assistance.
              </p>
              <ul className="mt-2 space-y-1 text-gray-400 list-disc list-inside">
                <li>Scheduled maintenance and service reminders</li>
                <li>24/7 roadside assistance for registered customers</li>
              </ul>
            </div>

            <div>
              <p className="text-xs text-red-500 tracking-[0.3em] mb-1">02</p>
              <h3 className="font-semibold mb-1">Flexible Financing & Leasing Options</h3>
              <p>
                We partner with leading financial institutions to offer flexible lease-to-own and
                rent-to-own options.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[400px]">
          <Image
            src="/images/dealership/customers.JPG"
            alt="Happy customers at dealership"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
   SPARE PARTS SECTION
----------------------------------------------------- */
function SparePartsSection() {
  const parts = [
    { name: 'Drive Chain (Gorilla 2.0 428H 76links)', price: '49,000', availability: 'In Stock' },
    { name: 'Motor Controller', price: '160,000', availability: 'In Stock' },
    { name: 'LCD Display', price: '75,000', availability: 'Limited' },
    { name: 'Tyre (Front/Rear)', price: '40,000', availability: 'In Stock' },
    { name: 'Suspension (Back)', price: '90,000', availability: 'Limited' },
    { name: 'Charging Port', price: '30,000', availability: 'In Stock' },
  ]

  return (
    <section className="bg-gray-950 py-16 md:py-24 border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="uppercase tracking-[0.3em] text-xs text-red-500 mb-2">
          AVAILABILITY OF SPARE PARTS & ACCESSORIES
        </p>
        <p className="text-gray-300 max-w-3xl text-sm mb-6">
          Our dealerships maintain a comprehensive inventory of genuine spare parts and accessories.
        </p>

        <div className="overflow-x-auto border border-gray-800">
          <table className="min-w-full text-sm">
            <thead className="bg-black">
              <tr className="text-left">
                <th className="px-4 py-3 border-b border-gray-800">PART NAME</th>
                <th className="px-4 py-3 border-b border-gray-800">PRICE (RWF)</th>
                <th className="px-4 py-3 border-b border-gray-800">AVAILABILITY</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, i) => (
                <tr key={part.name} className={i % 2 === 0 ? 'bg-gray-950' : 'bg-black'}>
                  <td className="px-4 py-3 border-b border-gray-900">{part.name}</td>
                  <td className="px-4 py-3 border-b border-gray-900">{part.price}</td>
                  <td className="px-4 py-3 border-b border-gray-900">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        part.availability === 'In Stock'
                          ? 'bg-green-500/15 text-green-400'
                          : 'bg-yellow-500/15 text-yellow-400'
                      }`}
                    >
                      {part.availability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-xs font-semibold tracking-[0.2em] uppercase">
          Inquire for Parts
        </button>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
   LOCATIONS
----------------------------------------------------- */
function LocationsSection() {
  const branches = [
    {
      name: 'Kigali City Center',
      address: 'KN 78 ST, Kigali',
      phone: '+250 78 000 0000',
      hours: 'Mon–Sat: 8:00am – 6:00pm',
    },
    {
      name: 'Nyabugogo',
      address: 'KN 1 RD, Kigali',
      phone: '+250 78 111 1111',
      hours: 'Mon–Sat: 8:00am – 6:00pm',
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
            Find a Dealer Near You
          </h2>
          <div className="space-y-4 text-sm text-gray-300">
            {branches.map((b) => (
              <div key={b.name} className="border border-gray-800 p-4">
                <h3 className="font-semibold mb-1">{b.name}</h3>
                <p className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <MapPin className="w-3 h-3" />
                  {b.address}
                </p>
                <p className="text-xs">{b.phone}</p>
                <p className="text-xs text-gray-500">{b.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[380px]">
          <Image
            src="/images/dealership/map.png"
            alt="Dealership map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
   BECOME A DEALER
----------------------------------------------------- */
function BecomeDealerSection() {
  return (
    <section className="bg-gray-950 py-16 md:py-24 border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.15fr,0.85fr] gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
            Become a Dealer – Join the E-Mobility Revolution
          </h2>
          <p className="text-gray-300 mb-4 text-sm">
            Partner with S.U.L E-Mobility and be part of Rwanda's sustainable transportation future.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Exclusive territory rights</li>
            <li>Comprehensive staff training</li>
            <li>Marketing and promotional support</li>
            <li>Access to genuine parts & accessories</li>
          </ul>
          <button className="mt-8 px-7 py-3 bg-red-600 hover:bg-red-700 text-xs font-semibold tracking-[0.2em] uppercase">
            Learn More
          </button>
        </div>

        <div className="relative h-[260px] sm:h-[320px]">
          <Image
            src="/images/dealership/red-car.jpg"
            alt="EV dealership car visual"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
   TESTIMONIAL
----------------------------------------------------- */
function TestimonialSection() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="italic text-gray-300 mb-4 text-sm">
          “As a taxi-moto operator, switching to GORILLA 2.0 has transformed my business. I save
          over 70% on daily operating costs.”
        </p>
        <p className="text-xs font-semibold">
          Jean Claude Mbarabazi – Taxi-Moto Operator, Kigali
        </p>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
   FAQ
----------------------------------------------------- */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How can I request a test ride of an EV?",
      answer:
        "Visit our Request a Test Ride page or contact customer service. We will schedule a ride at your convenience.",
    },
    {
      question: "What is the Rent-On-The-Go (R-T-G) program?",
      answer:
        "Rent electric vehicles daily with full convenience services included at competitive rates.",
    },
    {
      question: "How does the Lease-To-Own (L-T-O) program work?",
      answer:
        "Flexible payment plans over 24–36 months, allowing you to eventually own your EV.",
    },
    {
      question: "Can I purchase an electric vehicle directly?",
      answer:
        "Yes! We offer competitive pricing and financing options for private and commercial users.",
    },
    {
      question: "How do I schedule maintenance?",
      answer:
        "Use our service booking system or contact our maintenance team. We provide full diagnostics and repairs.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-16 text-red-600">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* FAQ Left List */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`w-full text-left p-6 transition-all duration-300 flex items-center justify-between group ${
                  openIndex === index
                    ? 'bg-red-600 text-white'
                    : 'bg-black border border-gray-800 text-gray-400 hover:border-red-600'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      openIndex === index ? 'bg-white' : 'bg-gray-600'
                    }`}
                  />
                  <span className="text-base md:text-lg font-medium">{faq.question}</span>
                </div>
                <ChevronRight
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'text-white rotate-90' : 'text-gray-600'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Answer Panel */}
          <motion.div
            key={openIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-8 md:p-12 min-h-[300px] flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {faqs[openIndex].question}
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {faqs[openIndex].answer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
