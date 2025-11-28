'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, Play } from 'lucide-react'
import { useState } from 'react'

export default function Assembly() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <WorldClassSection />
      <ProductionProcessSection />
      <ImpactSection />
      <BehindScenesSection />
      <FAQSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px]">
      <Image
        src="/images/assembly/hero-bike.jpg"
        alt="Gorilla 2.0 electric motorcycle"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-red-500 mb-4">
            S.U.L E-MOBILITY ASSEMBLY LINE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-custom font-bold leading-tight mb-6">
            Precision. Innovation.
            <br />
            Sustainability – The Future
            <br />
            of E-Mobility Starts Here.
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Our state-of-the-art assembly facility ensures the highest standards in electric
            motorcycle production, delivering the iconic GORILLA 2.0 for riders across Rwanda
            and East Africa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition-colors text-sm font-semibold tracking-wide">
              Explore Our Facility
            </button>
            <button className="px-8 py-3 border border-gray-700 hover:border-red-600 text-sm font-semibold tracking-wide">
              Book a Test Ride
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WorldClassSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr,1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
            Our World-Class
            <br />
            Assembly Line
          </h2>
          <p className="text-gray-300 mb-6">
            Our ISO-compliant processes ensure every GORILLA 2.0 motorcycle meets the highest
            standards of quality, durability, and safety. The facility combines advanced
            manufacturing technology with sustainable production practices, creating equipment
            for green micro-mobility in Rwanda and beyond.
          </p>
          <p className="text-gray-400">
            Our commitment to excellence is reflected in every vehicle that rolls off our
            assembly line.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10 text-sm">
            {[
              {
                title: 'Advanced Assembly Technology',
                text: 'High-precision tools & jigs for consistent build quality.',
              },
              {
                title: 'Sustainable Production',
                text: 'Processes optimized for energy efficiency & minimal waste.',
              },
              {
                title: 'Automated Testing',
                text: 'Every bike undergoes rigorous electrical & performance testing.',
              },
              {
                title: 'Quality & Safety First',
                text: 'Multi-point inspections before any GORILLA 2.0 reaches the road.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 p-4">
                <p className="text-xs text-red-500 uppercase mb-2 tracking-[0.25em]">
                  0{i + 1}
                </p>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-[340px] sm:h-[420px] lg:h-full min-h-[320px] overflow-hidden"
        >
          <Image
            src="/images/assembly/team-photo.jpg"
            alt="Assembly team in front of Gorilla 2.0"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center">
              <Play className="w-6 h-6" />
            </span>
          </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProductionProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Component Sourcing & Logistics',
      desc: 'We source high-quality components from trusted global suppliers, ensuring reliability, traceability, and on-time delivery to our Kigali facility.',
    },
    {
      step: '02',
      title: 'Frame & Body Assembly',
      desc: 'The heart and soul of every GORILLA 2.0 — the frame, body panels, and key structural parts are assembled and torqued to specification.',
    },
    {
      step: '03',
      title: 'Software & Performance Testing',
      desc: 'Electronics, controllers, and battery management systems are calibrated and stress-tested for optimal performance in real-world conditions.',
    },
    {
      step: '04',
      title: 'Quality Assurance & Road Testing',
      desc: 'Each motorcycle undergoes a multi-point inspection and on-road test to ensure alignment, braking, acceleration, and safety all meet our standard.',
    },
  ]

  return (
    <section className="bg-gray-950 py-16 md:py-24 border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
          Production Process – Step by Step
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl">
          From component sourcing to final delivery, our production process ensures quality at
          every stage.
        </p>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="grid md:grid-cols-[80px,1fr] gap-6 items-start md:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center border border-red-600 text-red-500">
                  {step.step}
                </span>
                <div className="hidden md:block h-px bg-red-600 flex-1" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const stats = [
    {
      label: 'Dealerships',
      value: '12+',
      desc: 'Growing network across Rwanda & East Africa.',
    },
    {
      label: 'Motorcycles Assembled',
      value: '5,000+',
      desc: 'GORILLA series motorcycles assembled to date.',
    },
    {
      label: 'Tons CO₂ Saved',
      value: '1,053',
      desc: 'Estimated emissions avoided compared to petrol bikes.',
    },
    {
      label: 'Customer Satisfaction',
      value: '98%',
      desc: 'Riders reporting improved uptime & lower costs.',
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-red-500 mb-3">
            OUR IMPACT
          </p>
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
            Commitment to
            <br />
            Rwanda&apos;s Green Future
          </h2>
          <p className="text-gray-300 mb-4">
            Our assembly line is a key component in Rwanda&apos;s journey toward a sustainable,
            low-carbon future. By manufacturing electric motorcycles locally, we reduce emissions
            and create quality jobs across the value chain.
          </p>
          <p className="text-gray-400 text-sm">
            Located in Kigali&apos;s Special Economic Zone, S.U.L E-Mobility is pioneering an
            e-mobility ecosystem built for African cities.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {stats.map((card, i) => (
            <div key={i} className="border border-gray-800 p-5 bg-gray-950/60">
              <p className="text-xs text-red-500 uppercase tracking-[0.3em] mb-2">
                0{i + 1}
              </p>
              <p className="text-3xl font-bold mb-1">{card.value}</p>
              <p className="text-sm font-semibold mb-1">{card.label}</p>
              <p className="text-xs text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BehindScenesSection() {
  return (
    <section className="bg-gray-950 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-red-500 mb-3">
          BEHIND-THE-SCENES VIDEO TOUR
        </p>
        <p className="text-gray-300 max-w-2xl mb-8 text-sm">
          Take a virtual tour of our state-of-the-art assembly facility and see how GORILLA 2.0
          motorcycles are mounted to your liking.
        </p>

        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 items-start">
          <div className="relative h-[260px] sm:h-[360px] lg:h-[420px] overflow-hidden">
            <Image
              src="/images/assembly/video-poster.jpg"
              alt="Technicians working on Gorilla 2.0"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                <Play className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-800 p-4 bg-black">
              <p className="text-xs text-red-500 tracking-[0.3em] mb-2">01</p>
              <h3 className="font-semibold mb-1">Workers Assembling the GORILLA 2.0</h3>
              <p className="text-gray-400 text-sm">
                Our skilled technicians meticulously assemble each component to factory
                specification.
              </p>
            </div>
            <div className="border border-gray-800 p-4 bg-black">
              <p className="text-xs text-red-500 tracking-[0.3em] mb-2">02</p>
              <h3 className="font-semibold mb-1">
                Engineers Conducting Final Inspections
              </h3>
              <p className="text-gray-400 text-sm">
                Our quality control engineers ensure every motorcycle meets our rigorous
                standards before handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How can I request a test ride of an EV?",
      answer: "To request a test ride, simply visit our \"Request a Test Ride\" page or contact our customer service team. We will schedule a ride at your convenience so you can experience the thrill of driving an electric vehicle."
    },
    {
      question: "What is the \"Rent-On-The-Go\" (R-T-G) program?",
      answer: "Our Rent-On-The-Go program allows you to rent electric vehicles on a daily basis with all convenience services included at competitive rates."
    },
    {
      question: "How does the Lease-To-Own (L-T-O) program work?",
      answer: "Our Lease-To-Own program offers flexible payment plans over 24-36 months, allowing you to eventually own the vehicle at the lowest rates available."
    },
    {
      question: "Can I purchase an electric vehicle directly from S.U.L E-Mobility?",
      answer: "Yes, you can purchase any of our electric vehicles directly. We offer competitive pricing and various financing options to suit your needs."
    },
    {
      question: "How do I schedule maintenance for my electric vehicle?",
      answer: "Schedule maintenance through our service booking system or contact our maintenance team. We provide regular check-ups, battery monitoring, and all necessary repairs."
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-16 text-red-600">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - FAQ List */}
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
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>
                <ChevronRight
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'text-white' : 'text-gray-600'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Right side - Answer Display */}
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
