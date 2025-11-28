'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Sponsor() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <HowItWorksSection />
      <DonateSection />
      <FAQSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[520px] sm:h-[620px]">
      <Image
        src="/images/sponsor/hero.jpg"
        alt="S.U.L impact hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
        <p className="uppercase tracking-[0.35em] text-xs text-red-500 mb-3">
          S.U.L IMPACT PROGRAMS
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-custom font-bold mb-4">
          Be Part of
          <br />
          The Impact
        </h1>
        <p className="text-gray-300 max-w-xl">
          S.U.L&apos;s capacity-building programs empower youth and women operators with skills,
          knowledge, and tools to embrace sustainable e-mobility, improve livelihoods, and drive
          Rwanda&apos;s green transition.
        </p>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      title: 'Submission',
      text: 'Get in touch with our team to discuss your ideas around our capacity-building programs.',
    },
    {
      title: 'Meet',
      text: 'Meet with our team, choose programs in-line with your agenda, and screen beneficiaries.',
    },
    {
      title: 'Partnership',
      text: 'Agree & finalize on course of action with all stakeholders involved & channel your sponsorship.',
    },
    {
      title: 'Implementation',
      text: 'Start seeing your actual impact unfold and change the lives of people & communities around you.',
    },
    {
      title: 'M & E',
      text: 'Monitor & evaluate the success of chosen programs & participate in post-sponsorship activities.',
    },
    {
      title: 'Retain',
      text: 'Review your impact, enjoy your positive change, come back to and change the world with us.',
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24 border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="uppercase tracking-[0.3em] text-xs text-red-500 mb-2">
          HOW IT WORKS
        </p>
        <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-10">
          Sponsor
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="border border-gray-800 bg-gray-950/50 p-5">
              <p className="text-xs text-red-500 tracking-[0.3em] mb-1">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DonateSection() {
  return (
    <section className="bg-gray-950 py-16 md:py-24 border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.2fr,1fr] gap-10 items-start">
        <div>
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-2">
            DONATE – CHANGE 1 LIFE, CHANGE A NATION
          </p>
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-4">
            Be the Change You Want to See in The World!
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Imagine the impact of transforming a family&apos;s future—one GORILLA motorcycle can
            help a woman or young man earn $10–$15 daily, providing stability and opportunity.
            Your donation today can give a family the means to thrive and pave the way for lasting
            change.
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Be the change you want to see in the world by supporting this life-changing
            initiative.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-xs font-semibold tracking-[0.2em] uppercase">
            Donate Now
          </button>
        </div>

        <div className="relative h-[280px] sm:h-[340px]">
          <Image
            src="/images/sponsor/donations.png"
            alt="Gorilla motorcycles ready for beneficiaries"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
              <span className="triangle border-l-[10px] border-l-white border-y-[8px] border-y-transparent ml-1" />
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
