'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Training() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <TrainingSection />
      <CustomizationSection />
      <ImpactSection />
      <FAQSection />
    </main>
  )
}


function HeroSection() {
  return (
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="/images/gallery (4).JPG"
        alt="Electric Vehicles Lineup"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-custom font-bold mb-6 tracking-tight">
            Our Training <br />Academy
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
             Empowering Africa through sustainable innovation, modern training, and world-class EV technology.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originX: 0 }}
        >
          <div className="w-full h-1 bg-red-600 mx-auto max-w-xs"></div>
        </motion.div>
      </div>
    </section>
  )
}


function TrainingSection() {
  const trainings = [
    {
      title: "EV Technical Training",
      description: "Learn the fundamentals of electric vehicle technology and technology."
    },
    {
      title: "EV Mechanical Training",
      description: "Master the basic and advanced vehicle service."
    },
    {
      title: "EV Assembling",
      description: "Get hands-on experience with electric vehicle from scratch."
    },
    {
      title: "EV Operator",
      description: "Become proficient in operating and managing electric mobility services."
    }
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
            Training That Transforms
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            At SUL Academy, we provide comprehensive training programs and development courses. Our programs cover technical skill, mechanical knowledge, in-vehicle assembly, and operations. We offer both in-person workshops, online courses, and specialized programs designed for the future market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-gray-800 hover:bg-gray-900/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-8 h-8  bg-[#FF0000] mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg text-red-600 font-bold mb-2">{training.title}</h3>
                    <p className="text-gray-400">{training.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CustomizationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
              Easily customized to<br />
              match your personality
            </h2>
            <p className="text-gray-300 mb-8">
              SUL Academy trains individuals with hands-on learning, shaping skilled professionals for success in e-mobility and beyond.
            </p>
            <div className="grid gap-6">
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-red-600 text-lg font-bold mb-2">Old Riders</h3>
                  <p className="text-gray-400">
                    Traditional training that doesn't keep pace with e-mobility advancements and limited programs for opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-red-600 text-lg font-bold mb-2">New Riders</h3>
                  <p className="text-gray-400">
                    Modern training that keeps up with comprehensive training, equipping you with passion and for success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[600px]"
          >
            <Image
              src='/images/teacher.svg'
              alt="Training Customization"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const impacts = [
    "Job Creation",
    "Gender Inclusion",
    "Affordable Transportation",
    "Energy Independence"
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
            Our Impact
          </h2>
          <p className="text-gray-300 mb-12">
            SUL Academy is transforming lives and driving Africa's green revolution through empowering individuals who know e-mobility.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">
                SUL Academy is shaping Africa's future by driving meaningful change
              </h3>
              <p className="text-gray-400 mb-8">
                SUL Academy has empowered hundreds by providing job-ready skills, fostering entrepreneurship in green economy, promoting gender inclusivity, and creating opportunities for sustainable growth. #AfricanFutureInnovation
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {impacts.map((impact, index) => (
                  <motion.span
                    key={impact}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="inline-flex px-4 py-2 bg-gray-800 text-sm"
                  >
                    {impact}
                  </motion.span>
                ))}
              </div>
              <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 transition-colors duration-300">
                Join Us Today
              </Button>
            </div>
            <div className="relative h-[300px]  overflow-hidden group">
              <Image
                src='/images/ourimpact.jpg'
                alt="Our Impact"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button className="w-16 h-16 bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
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
