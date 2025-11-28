'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ChevronRight, ArrowDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Partner logos (FIXED — no broken imports)
const partners = [
  { name: "Partner 1", logo: "/images/partners/image-2.png" },
  { name: "Partner 2", logo: "/images/partners/image-4.png" },
  { name: "Partner 3", logo: "/images/partners/image-5.png" },
  { name:"Partner 4", logo: "/images/partners/image-6.png" },
  { name: "Partner 5", logo: "/images/partners/image-7.png" },
  { name: "Partner 6", logo: "/images/partners/image-8.png" },
  { name: "Partner 7", logo: "/images/partners/image-9.png" },
  { name: "Partner 8", logo: "/images/partners/image-main.png" },
]

export default function Impact() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <CommitmentSection />
      <DealerSection />
      <ProjectsSection />
      <PartnersSection />
      <FAQSection />
    </main>
  )
}

/* ---------------- HERO SECTION ---------------- */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="/images/impacthero.png"
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
            Join Our Community
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

/* ---------------- COMMITMENT ---------------- */
function CommitmentSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-12">
            Our<br />Commitment
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300">
                At SUL Mobility, we stand as a leading advocate of sustainable transportation in evolving markets and communities. 
              </p>

              <ul className="space-y-4">
                {[
                  'Ensuring accessibility to sustainable mobility solutions', 
                  'Supporting green energy initiatives and infrastructure', 
                  'Building sustainable communities for tomorrow'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-[#FF0000]" />
                    <p className="text-gray-400">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[300px] lg:h-[400px] overflow-hidden group">
              {isVideoPlaying ? (
                <video className="w-full h-full object-cover" autoPlay controls>
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                </video>
              ) : (
                <>
                  <Image
                    src="/images/4e6a0614_54249901408_o.jpg"
                    alt="Our Commitment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button 
                      className="w-16 h-16 bg-[#FF0000] flex items-center justify-center"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- DEALER ---------------- */
function DealerSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
  }, [email])

  return (
    <section className="py-16 md:py-24 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
              Become a Dealer<br />with Us!
            </h2>

            <p className="text-gray-300 mb-8">
              Join SUL Mobility's trusted partner network and offer customers sustainable mobility solutions.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-900/50 border-gray-800 text-white"
              />
              <Button type="submit" className="bg-[#FF0000] hover:bg-[#FF0000]/90">
                Subscribe
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] lg:h-[400px]"
          >
            <Image
              src="/images/1153.jpg"
              alt="Electric Vehicle"
              fill
              className="object-contain"
            />
          </motion.div>

        </div>

      </div>
    </section>
  )
}

/* ---------------- PROJECTS ---------------- */
function ProjectsSection() {
  const projects = [
    {
      partner: "GIZ DeveloPPP.de",
      project: "Human Empowerment and Job Creation in Ridesharing Green Transport",
      period: "01/04/2020 to 30/09/2021",
      status: "Completed"
    },
    {
      partner: "SwissContact Rwanda",
      project: "Pilot Dual Training in Maintenance & Repair of Electric Motorcycle",
      period: "01/10/2021 to 31/03/2022",
      status: "Completed"
    },
    {
      partner: "University of Rwanda, IPRC and TVET",
      project: "Academic Internships",
      period: "Continuous",
      status: "Ongoing"
    },
    {
      partner: "Rwanda TVET Board (RTB)",
      project: "Development of Competency-based Curriculum",
      period: "22/08/2021 to 10/09/2022",
      status: "Completed"
    },
    {
      partner: "Electric Mobility Committee",
      project: "Public Bikeshare Implementation – City of Kigali",
      period: "Continuous",
      status: "Ongoing"
    },
    {
      partner: "KESC & MIGEPROF",
      project: "Training of girls in electric motorcycle riding",
      period: "10/10/2020 to 15/12/2020",
      status: "Completed"
    }
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-16 md:py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-12 text-center">
            OUR DEVELOPMENT PROJECTS
          </h2>

          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Over the years we have successfully trained & empowered hundreds of youths through partnerships with our development partners.
          </p>

          <div className="space-y-4">
            {projects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-5 gap-4 p-4 bg-black/50 rounded-lg"
              >

                <div>
                  <p className="text-sm text-gray-400">Partner</p>
                  <p className="font-semibold">{project.partner}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm text-gray-400">Project</p>
                  <p className="font-semibold">{project.project}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Period</p>
                  <p className="font-semibold">{project.period}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <span
                    className={`inline-flex items-center px-2 py-1 text-sm rounded-full ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : project.status === 'Ongoing'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}

/* ---------------- PARTNERS ---------------- */
function PartnersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >

          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-12">
            OUR PARTNERS
          </h2>

          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            We collaborate with key stakeholders to promote sustainable e-mobility.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How can I request a test ride of an EV?",
      answer: "Visit the Request a Test Ride page or contact support."
    },
    {
      question: "What is Rent-On-The-Go?",
      answer: "Daily rentals including full convenience services."
    },
    {
      question: "How does Lease-To-Own work?",
      answer: "Monthly payments over 24–36 months until you own the vehicle."
    },
    {
      question: "Can I purchase an electric vehicle directly?",
      answer: "Yes, we offer direct EV purchases."
    },
    {
      question: "How do I schedule maintenance?",
      answer: "Use our service booking system or contact support."
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-16 text-red-600">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT LIST */}
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
                  <div className={`w-3 h-3 rounded-full ${
                      openIndex === index ? 'bg-white' : 'bg-gray-600'
                    }`} />
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            ))}
          </div>

          {/* RIGHT ANSWER */}
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
  