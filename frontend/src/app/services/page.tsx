'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, Clock, MapPin, Wrench, Car, AlertCircle, ChevronRight, Facebook, Twitter, Linkedin, Instagram, ArrowDown, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <MaintenanceSection />
      <ChecklistSection />
      <RepairsSection />
      <AppointmentsSection />
      <RoadsideAssistance />
      <FAQSection />
    </main>
  )
}

function HeroSection() {
  return (
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src='/images/four.jpg'
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
            Services<br />We offer
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            SUL Mobility provides high quality, commercial and long-distance electric vehicle ownership, daily short term rentals, and monthly leasing terms.
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

function MaintenanceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6 text-[#FF0000]">
              SCHEDULED<br />MAINTENANCE
            </h2>
            <p className="text-gray-300 mb-8">
              Book your vehicle for a full tune-up and maintenance servicing including inspecting, repairing, and safety checking of all electrical and mechanical components. Service includes a thorough inspection of your vehicle's battery, motor, controller, and all other critical components.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-4">
              <Input
                placeholder="NAME"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Input
                placeholder="PHONE"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Input
                placeholder="EMAIL"
                type="email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Textarea
                placeholder="MESSAGE"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 transition-colors duration-300">
                Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ChecklistSection() {
  const checkItems = [
    {
      title: 'Tires and Wheels',
      description: 'Regular check of tire pressure and thread depth to ensure they meet the required standards, and proper wheel alignment.',
      icon: Car
    },
    {
      title: 'Controls',
      description: 'Inspection of all controls and pedals for smooth operation, cables for signs of fraying, and proper functionality.',
      icon: Wrench
    },
    {
      title: 'Lights & Mirrors',
      description: 'Check all lights including headlights, brake lights, indicators, and ensure all mirrors are properly adjusted.',
      icon: AlertCircle
    },
    {
      title: 'Oils & Other Fluids',
      description: 'Inspection and top-up of all necessary fluids, including coolant levels and brake fluid.',
      icon: Wrench
    },
    {
      title: 'Chassis',
      description: 'Inspect the suspension for proper function and check the frame for any signs of damage.',
      icon: Car
    },
    {
      title: 'Stands',
      description: 'Check that the side stand and center stand work smoothly and remain secure.',
      icon: Wrench
    }
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-custom font-bold mb-12"
        >
          Things to <span className="text-[#FF0000]">check</span><br />
          <span className="text-[#FF0000]">Regularly.</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {checkItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-[#FF0000]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RepairsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6 text-[#FF0000]">
              REPAIRS
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our well trained and highly skilled technicians provide comprehensive repairs and services for all types of electric vehicles.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-[#FF0000]" />
                  <p>Monday-Friday: 8:00am to 5:00pm</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-[#FF0000]" />
                  <p>Saturday: 9:00am to 3:00pm</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-[#FF0000]" />
                  <p>Call: 020-1234567</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Location Map"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AppointmentsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-custom font-bold mb-12"
        >
          Appointments &<br />
          Service Rates
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF0000]">WALK-INS</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Appointment needed for tire changes</li>
                  <li>• Drop-off repair requests must be made before 10:00 AM for same-day service</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF0000]">DROP-OFFS</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Diagnostics, warranty repairs, or scheduled maintenance</li>
                  <li>• Please drop off before 10:00 AM with completion dates provided at drop-off</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF0000]">SERVICE PRICES</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Prices depend on type of E-Vehicle and nature of the service</li>
                  <li>• Labor rate estimates are provided during consultation</li>
                  <li>• Parts are not included in the labor rate</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function RoadsideAssistance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
              Africa's First<br />
              <span className="text-[#FF0000]">EV Solution Provider!</span>
            </h2>
            <p className="text-gray-300 mb-8">
              We are customer-centric ensuring personalized care and seamless electric vehicle solutions.
            </p>
            <div className="bg-black p-6">
              <h3 className="text-xl font-bold mb-4">ROADSIDE ASSISTANCE</h3>
              <p className="text-gray-400 mb-6">
                Our roadside assistance service gives you peace of mind knowing that help is just a phone call away. Our experienced technicians are available to assist you with any issues you may encounter while on the road.
              </p>
              <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 transition-colors duration-300">
                Get Help Now
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden"
          >
            <Image
              src='/images/roadside.png'
              alt="Roadside Assistance"
              fill
              className="object-cover"
            />
          </motion.div>
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
