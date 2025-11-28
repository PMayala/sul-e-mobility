'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Check, Phone, ChevronRight, ArrowDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useAutoSlide } from '../../hooks/use-auto-slide'

export default function Products() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseSection />
        {/* ⭐ OVERLAPPING RED CTA BAR */}
<section className="relative z-30 -mt-20 mb-[-60px]"> 
  <div className="mx-auto max-w-6xl px-6">
    <div className="
      bg-red-600 text-white py-6 px-10 
      flex flex-col md:flex-row items-center justify-between shadow-2xl
    ">
      {/* LEFT TEXT */}
      <div className="text-xl md:text-xl font-custom font-light">
        Explore Your <br className="md:hidden" /> Ownership Journey
      </div>

      {/* CENTER ICON */}
      <div className="my-4 md:my-0">
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
          <Phone className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="text-right">
        <div className="text-sm md:text-base opacity-90">
          Call to Own it today!
        </div>
        <div className="text-3xl md:text-4xl font-bold tracking-wide">
          6242
        </div>
      </div>

    </div>
  </div>
</section>

      <OwnershipOptions />
      <TestimonialsSection />
      <FAQSection />
    </main>
  )
}


function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src='/images/Dealership Landscape_5.png'
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
              Explore<br />Our Lineup
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
  

function FeaturedProducts() {
  // 1️⃣ Product Type
  type Product = {
    name: string
    year: string
    bodyStyle: string
    transmission: string
    oldPrice: string
    newPrice: string
    image: string
    category: string
    isNew: boolean
    specs: string[]
  }

  // 2️⃣ products array typed
  const products: Product[] = [
    {
      name: 'Gorilla EMV 54',
      year: '2023',
      bodyStyle: 'Adventure bike',
      transmission: 'Manual',
      oldPrice: '$3,000',
      newPrice: '$2,500',
      image: '/images/Products/image 11.jpg',
      category: 'EV Bike',
      isNew: true,
      specs: ['Range: 120km', 'Charge: 1 hour', 'Battery: 72V 32Ah'],
    },
    {
      name: 'Cityhopper Gen II',
      year: '2023',
      bodyStyle: 'Minivan',
      transmission: 'Manual',
      oldPrice: '$15,000',
      newPrice: '$10,000',
      image: '/images/Products/image 16.png',
      category: 'EV Van',
      isNew: false,
      specs: ['14 Seater', 'Range: 200km', 'Fast Charging'],
    },
    {
      name: 'EV5 Dolphin',
      year: '2023',
      bodyStyle: 'Hatchback',
      transmission: 'Automatic',
      oldPrice: '$35,000',
      newPrice: '$20,000',
      image: '/images/Products/image 12.png',
      category: 'EV Car',
      isNew: false,
      specs: ['Range: 400km', 'Fast Charging', 'Automatic'],
    },
    {
      name: 'EV5 King Pro',
      year: '2023',
      bodyStyle: 'SUV',
      transmission: 'Automatic',
      oldPrice: '$33,000',
      newPrice: '$25,000',
      image: '/images/Products/image 15.png',
      category: 'Compact SUV',
      isNew: false,
      specs: ['Range: 450km', 'Premium Interior', 'Fast Charging'],
    },
    {
      name: 'BYD K9',
      year: '2019',
      bodyStyle: 'Full-size bus',
      transmission: 'Automatic',
      oldPrice: '$400,000',
      newPrice: '$300,000',
      image: '/images/Products/image 17.png',
      category: 'EV Bus',
      isNew: false,
      specs: ['40 Seater', 'Range: 300km', 'Fast Charging'],
    },
    {
      name: 'HONDA UNI-K4',
      year: '2023',
      bodyStyle: 'Step-through scooter',
      transmission: 'Automatic (CVT)',
      oldPrice: '$1,500',
      newPrice: '$1,000',
      image: '/images/Products/image 14.png',
      category: 'EV Scooter',
      isNew: false,
      specs: ['Range: 150km', 'Charge: 4–5 hours', 'Battery: 72V 42Ah'],
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // 3️⃣ selectedProduct typed
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-24 md:py-32 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-4 text-white text-center">
          Featured Products
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Discover our diverse range of innovative e-mobility solutions.
        </p>

        {/* PRODUCT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p: Product, index: number) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="bg-black border border-gray-800 overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.08)]">

                {p.isNew && (
                  <div className="absolute top-0 right-0 bg-gray-200 text-black text-xs font-bold px-3 py-1 z-20">
                    New
                  </div>
                )}

                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain bg-[#0A0A0A]"
                  />

                  <div className="absolute bottom-4 right-6 bg-red-600 text-white px-4 py-1 text-sm font-bold flex items-center gap-2">
                    <span className="line-through opacity-80">{p.oldPrice}</span>
                    <span>{p.newPrice}</span>
                    <span className="ml-2 text-xs bg-black px-2 py-1 rounded">Tax Incl.</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="text-sm text-red-600 mb-2 font-semibold">{p.category}</div>

                  <h3 className="text-xl font-bold mb-2 text-white">{p.name}</h3>

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 mt-6">
                    <div>
                      <div className="text-gray-500">Year</div>
                      <div className="font-semibold text-white">{p.year}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Body Style</div>
                      <div className="font-semibold text-white">{p.bodyStyle}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Transmission</div>
                      <div className="font-semibold text-white">{p.transmission}</div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedProduct(p)}
                    className="w-full mt-6 bg-red-600 hover:bg-red-700 transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* BOOK TEST RIDE */}
        <div className="flex justify-center mt-16">
          <Button className="border-red-600 hover:bg-red-700 px-10 py-8 text-lg">
            Book A Test Ride
          </Button>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="bg-gray-900 p-8 rounded-lg max-w-lg w-full border border-gray-700"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {selectedProduct.name}
                </h3>

                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>

                <p className="text-gray-300 mb-4">Specifications:</p>

                <ul className="text-gray-400 space-y-2 mb-6">
                  {selectedProduct.specs.map((s: string, i: number) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Book a Test Ride
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}


function WhyChooseSection() {
  const benefits = [
    {
      title: 'Sustainability First',
      description:
        'We’re committed to reducing carbon emissions and promoting green mobility for a cleaner, healthier future.',
      icon: '/images/products/sustainable-sustainability.png'
    },
    {
      title: 'Innovative Technology',
      description:
        'Our electric vehicles are designed with advanced technology to deliver superior performance, reliability, and efficiency.',
      icon: '/images/products/maki_car-repair.png'
    },
    {
      title: 'Customer-Centric',
      description:
        'Your satisfaction is our priority. We deliver exceptional products & services to meet your needs & expectations.',
      icon: '/images/products/help-desk-svgrepo-com 1.png'
    },
    {
      title: 'Best Prices in District',
      description:
        'We make e-mobility accessible with cost-effective options, ensuring value without compromising on quality.',
      icon: '/images/products/solar_tag-price-broken.png'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="mb-20 md:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-8 text-white">
          Why Choose S.U.L E-Mobility?
        </h2>
        <p className="text-gray-300 text-sm max-w-xl">
          At S.U.L E-Mobility, we’re redefining transportation in Africa with cutting-edge electric mobility solutions tailored to your needs. Choose S.U.L E-Mobility — your partner in sustainable and innovative transportation. Together, we’re driving Africa’s transition to a greener future.
        </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-left"
            >
              <div className="mb-6 w-14 h-14 relative">
                <Image
                  src={b.icon}
                  alt={b.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



function OwnershipOptions() {
  const options = [
    {
      title: 'Rent-On-The-Go (R-T-G)',
      description:
        'Rent and work at your convenience with our R-T-G weekly/bi-weekly program.',
      icon: '/images/products/game-icons_auto-repair.png'
    },
    {
      title: 'Lease-To-Own (L-T-O)',
      description:
        'Enroll to L-T-O program and pay over a period of 18 to 24 months.',
      icon: '/images/products/kingsley.png'
    },
    {
      title: 'Direct Purchase',
      description:
        'Purchase upfront from our fleet of E-Vehicles.',
      icon: '/images/products/teenyicons_appointments-outline.png'
    }
  ];

  return (
    <section className="relative bg-zinc-900 py-24 md:py-32">
      {/* Right image */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/images/Gallery/image-6.png"
          alt="Ownership Options"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/20 to-transparent" />
      </div>

      {/* Left content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-custom mb-10 text-white">
            Flexible Ownership Options
          </h2>

          <p className="text-gray-400 max-w-xl mb-10">
            At S.U.L, we offer three distinct and flexible ownership programs tailored to meet your needs and lifestyle.
          </p>

          <div className="space-y-10">
            {options.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <Image
                    src={o.icon}
                    alt={o.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">{o.title}</h3>
                  <p className="text-gray-400 text-sm">{o.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Switching to an E-Vehicle from SUL Mobility was one of the best decisions for me. The battery range is great, and the cost savings compared to a traditional vehicle is incredibly fulfilling. Their customer service is exceptional!",
      author: "John Doe",
      role: "Business Owner",
      image: "/images/testimonials/first.jpg"
    },
    {
      quote: "SUL Mobility's Lease-To-Own program has exceeded my delivery business expectations. The affordability and reliability of their E-Motorcycles while staying within budget is amazing. Their support and maintenance service is top-notch!",
      author: "Jane Smith",
      role: "Delivery Service Owner",
      image: "/images/testimonials/second.jpg"
    },
    {
      quote: "The transition to electric vehicles was seamless with SUL Mobility. Their team guided us through every step, and the vehicles have performed beyond our expectations. Highly recommend their services!",
      author: "Mike Johnson",
      role: "Fleet Manager",
      image: "/images/testimonials/third.jpg"
    },
    {
      quote: "Outstanding service and quality vehicles. SUL Mobility has transformed how we think about transportation. The cost savings and environmental impact make it a win-win situation.",
      author: "Sarah Williams",
      role: "Sustainability Director",
      image: "/images/testimonials/fourth.jpg"
    }
  ]

  const currentIndex = useAutoSlide(testimonials.length, 5000)

  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-custom font-bold mb-16 text-red-600">Loved & Trusted</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="w-full md:w-1/3">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl mb-1 font-custom">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 transition-colors duration-300 ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-600'
                }`}
              />
            ))}
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
