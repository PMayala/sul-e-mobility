'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, ArrowRight, MapPin, Plus, Minus, Mail, Phone, Car, Building2, Users } from 'lucide-react'
import createGlobe from "cobe"


export default function Home() {
  return (
        <main className="bg-black text-white overflow-x-hidden w-full max-w-full">
      <div className="overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <WhoWeAreSection />
        <FleetSection />
        <OfferingsSection />
        <ServicesSection />
        <PresenceSection />
        <ScheduleVisitSection />
        <CommunitySection />
        <TrainingSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  )
}

function HeroSection() {
  const leftColumnImages = [
    "/images/one.jpg",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
    "/images/five.jpg",
    "/images/six.jpg",
  ];

  const rightColumnImages = [
    "/images/un.JPG",
    "/images/deux.JPG",
    "/images/troix.JPG",
    "/images/quatre.JPG",
    "/images/cinq.JPG",
    "/images/sis.JPG",
  ];

  const duplicated = [...leftColumnImages, ...leftColumnImages, ...leftColumnImages, ...leftColumnImages];
  const duplicatedRight = [...rightColumnImages, ...rightColumnImages, ...rightColumnImages, ...rightColumnImages];

  return (
    <section className="relative h-[100svh] overflow-hidden bg-black w-full max-w-full overflow-x-hidden">
      {/* ---------------- MOBILE ---------------- */}
      <div className="relative h-full lg:hidden">
        {/* MOBILE BACKGROUND GRID */}
        <div className="absolute inset-0 flex gap-2 opacity-30">
          {/* Column 1 */}
          <div className="w-1/2 relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-2"
              animate={{ y: [0, -2400] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicated.map((img, i) => (
                <div key={i} className="relative h-[200px] sm:h-[260px] w-full flex-shrink-0">
                  <Image src={img} alt="" fill sizes="50vw" className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="w-1/2 relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-2"
              animate={{ y: [-2400, 0] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedRight.map((img, i) => (
                <div key={i} className="relative h-[200px] sm:h-[260px] w-full flex-shrink-0">
                  <Image src={img} alt="" fill sizes="50vw" className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE VIGNETTE */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,1) 100%)",
          }}
        />

        {/* MOBILE CONTENT */}
        <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl font-custom font-bold leading-tight mb-4">
              Revolutionizing <br />
              <span className="text-red-600">E-Mobility</span> <br />
              Across Africa <br />
              Today!
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto mb-6">
              Empowering the transition to mobility with Cutting Edge Electric Vehicles
              and Industry Pioneering Sustainable Transportation Solutions.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:scale-105"
            >
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ---------------- DESKTOP ---------------- */}
      <div className="hidden mx-auto max-w-7xl h-full lg:grid lg:grid-cols-2 overflow-hidden w-full">
        {/* LEFT TEXT */}
        <div className="flex items-center px-12 xl:px-20 2xl:px-28 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-custom font-bold leading-[1.1] mb-6">
              Revolutionizing <br />
              <span className="text-red-600">E-Mobility</span> <br />
              Across Africa <br />
              Today!
            </h1>

            <p className="text-lg xl:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Empowering the transition to mobility with Cutting Edge Electric Vehicles and
              pioneering Sustainable Transportation Solutions.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 xl:px-10 xl:py-5 text-lg xl:text-xl border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-600/40"
            >
              Read more <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="relative overflow-hidden">
          {/* EDGE FADES */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/70 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* SCROLLING COLUMNS */}
          <div className="flex gap-4 h-full px-2">
            {/* COL LEFT */}
            <div className="w-1/2 relative overflow-hidden max-w-full">
              <motion.div
                className="flex flex-col gap-3"
                animate={{ y: [0, -2400] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                {duplicated.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[330px] xl:h-[400px] 2xl:h-[460px] w-full overflow-hidden"
                  >
                    <Image src={img} alt="" fill sizes="50vw" className="object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* COL RIGHT */}
            <div className="w-1/2 relative overflow-hidden max-w-full">
              <motion.div
                className="flex flex-col gap-3"
                animate={{ y: [-2400, 0] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                {duplicatedRight.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[330px] xl:h-[400px] 2xl:h-[460px] w-full overflow-hidden"
                  >
                    <Image src={img} alt="" fill sizes="50vw" className="object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WhoWeAreSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const AnimatedCounter = ({ end, duration = 3, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        setCount(Math.floor(easeOutQuart * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }, [inView, end, duration])

    return <span>{count.toLocaleString()}{suffix}</span>
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/70 to-transparent" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-custom font-bold mb-16 text-center text-red-600">WHO WE ARE</h2>
          <h3 className="text-4xl font-bold mb-12 text-center">Your All-In-One EV Solution</h3>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <Image
                src="/images/whoweare.png"
                alt="Electric Motorcycles"
                width={600}
                height={400}
                className="shadow-2xl"
              />
            </div>
            <div className='mb-32'>
              <p className="text-gray-300 text-lg mb-16 leading-relaxed">
                SAFI UNIVERSAL LINK (S.U.L) is an electric mobility solutions hub dedicated to providing a complete value chain for electric vehicles  including services and maintenance, as well as capacity building through training courses for technicians, mechanics, and riders.
              </p>
              <Link
                href="/about"
                className="text-red-600 hover:text-red-500 inline-flex items-center text-lg font-semibold"
              >
                About Us <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: 8900, label: 'Happy Customers', suffix: '+' },
              { value: 426000, label: 'Total Trips Made', suffix: '+' },
              { value: 6, label: 'Countries Served', suffix: '' },
              { value: 1129062, label: 'KGs CO2 Saved', suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold font-custom mb-2 text-red-600">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


function OfferingsSection() {
  const offerings = [
    {
      title: 'Rent-On-The-Go',
      description:
        'Rent and work at your convenience with our R-T-G weekly/bi-weekly program, providing flexibility for your needs.',
      image: '/images/offerings/div.png',
      href: '/services#rent-on-the-go',
    },
    {
      title: 'Lease-To-Own',
      description:
        'Enroll in the L-T-O program and pay over a convenient period of 18 to 24 months, making ownership accessible.',
      image: '/images/offerings/div-1.png',
      href: '/services#lease-to-own',
    },
    {
      title: 'Direct Purchase',
      description:
        'Purchase directly from our fleet of premium E-Vehicles, tailored for sustainable mobility.',
      image: '/images/offerings/div-2.png',
      href: '/services#direct-purchase',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <h2 className="text-4xl sm:text-5xl font-custom font-bold text-white">
            Our Offerings
          </h2>

          <p className="text-gray-300 text-lg max-w-xl">
            Discover flexible solutions tailored to your needs with Rent-On-The-Go, Lease-To-Own, 
            and Direct Purchase programs for E-Vehicles.
          </p>
        </div>

        {/* OFFERING ROWS */}
        <div className="space-y-20">
          {offerings.map((o, index) => (
            <Link key={o.title} href={o.href}>
              <motion.div
                className="grid lg:grid-cols-2 gap-10 items-center border-b border-gray-800 pb-12 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* LEFT TEXT */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-custom font-bold mb-3 flex items-center text-white">
                    {o.title}
                    <ArrowRight className="ml-3 h-5 w-5 text-red-600 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-red-500 -rotate-45" />
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                    {o.description}
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden mt-6 mb-6">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA BUTTONS (Bottom Right Like Screenshot) */}
        <div className="flex flex-wrap gap-4 mt-16 justify-center lg:justify-end">
          <Link
            href="/services"
            className="border border-white/40 px-8 py-3 text-white text-sm flex items-center gap-2 hover:border-red-600 transition duration-300"
          >
            Learn More <ArrowRight className="h-4 w-4 text-red-600" />
          </Link>

          <Link
            href="/charging"
            className="border border-white/40 px-8 py-3 text-white text-sm flex items-center gap-2 hover:border-green-600 transition duration-300"
          >
            Find Charger <ArrowRight className="h-4 w-4 text-green-600" />
          </Link>
        </div>

      </div>
    </section>
  )
}

function FleetSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: 'E-SUV', image: '/images/Products/image 15.png' },
    { title: 'E-Motorcycle', image: '/images/Products/image 11.jpg' },
    { title: 'E-Scooter', image: '/images/Products/image 14.png' },
    { title: 'E-Van', image: '/images/Products/image 16.png' },
    { title: 'E-Bus', image: '/images/Products/image 17.png' },
    { title: 'E-Car', image: '/images/Products/image 12.png' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide, loop back at the end
    }, 5000); // Slide changes every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-custom font-bold mb-16 text-center text-red-600">
          OUR EV FLEET
        </h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed text-center max-w-4xl mx-auto">
          We offer a wide range of EV products & services and a sales team with superior
          customer awareness and interaction experience, alongside well-trained and
          certified mechanics who provide needed services/maintenance of our EV products
          to always guarantee customer satisfaction.
        </p>

        <div className="relative">
          {/* Slide Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              width={800}
              height={600}
              className="mx-auto mb-8 shadow-2xl"
            />
            <h3 className="text-3xl font-bold mb-4 font-custom">
              {slides[currentSlide].title}
            </h3>
          </motion.div>

          {/* Slide Navigation Dots */}
          <div className="flex justify-center gap-4 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 transition-all duration-300 ${
                  currentSlide === index ? 'bg-red-600 w-12' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PresenceSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [showLocations, setShowLocations] = useState(false)

  // rotation state
  const phiRef = useRef(0)
  const thetaRef = useRef(0)

  // drag state
  const draggingRef = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const locations = [
    { city: "Kigali", address: "5th Floor, Wing B, Fairview Building, KG 622 Street, Kimihurura", country: "Rwanda", type: "HQ" },
    { city: "Musanze", address: "Northern Province Trading Center, Avenue de Tourisme", country: "Rwanda", type: "Showroom" },
    { city: "Muhanga", address: "Kavumu, Gitarama, Nyamabuye, Muhanga", country: "Rwanda", type: "Showroom" },
    { city: "Kayonza", address: "Mukarange, Kayonza (Opp. former Police Station)", country: "Rwanda", type: "Showroom" },
    { city: "Nyagatare", address: "Northern Eastern Region Office", country: "Rwanda", type: "Showroom" },
    { city: "Rusizi", address: "Western Province", country: "Rwanda", type: "Showroom" },
    { city: "Gisenyi", address: "Rubavu (Former KCB Bank, Opp GT Bank)", country: "Rwanda", type: "Showroom" }
  ]

  /* ------------------- CREATE GLOBE ------------------- */
  useEffect(() => {
    if (!canvasRef.current || !inView) return

    const canvas = canvasRef.current

    // AUTO-SCALE GLOBE size based on container width
    const resizeGlobe = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const size = Math.min(parent.clientWidth, 550) // keep perfect circle
      canvas.width = size * 2
      canvas.height = size * 2
    }

    resizeGlobe()
    window.addEventListener("resize", resizeGlobe)

    let slowSpeed = 0.0006

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvas.width,
      height: canvas.height,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      scale: 1.0,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.35, 0, 0],
      markerColor: [0.8, 0, 0],
      glowColor: [0.6, 0, 0],
      opacity: 1,

      markers: [
        { location: [-1.94, 30.06], size: 0.11 },
        { location: [-1.5, 29.63], size: 0.09 },
        { location: [-2.15, 29.78], size: 0.09 },
        { location: [-1.86, 30.67], size: 0.09 },
        { location: [-1.32, 30.32], size: 0.09 },
        { location: [-2.48, 28.90], size: 0.09 },
        { location: [-1.69, 29.26], size: 0.09 }
      ],

      onRender: (state) => {
        state.phi = phiRef.current
        state.theta = thetaRef.current
        if (!draggingRef.current) phiRef.current += slowSpeed
      }
    })

    return () => {
      globe.destroy()
      window.removeEventListener("resize", resizeGlobe)
    }
  }, [inView])

  /* ------------------- HANDLERS ------------------- */
  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return

    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y

    phiRef.current += dx * 0.004
    thetaRef.current += dy * 0.004

    lastPos.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerUp = () => {
    draggingRef.current = false
  }

  /* ------------------- JSX ------------------- */
  return (
    <section ref={ref} className="py-28 bg-black relative overflow-x-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-16 md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-custom font-bold mb-6">
            Our Presence <br /> Across Africa
          </h2>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
            At S.U.L E-Mobility, we're proud to have established branches in key regions
            across the continent, driving the future of e-mobility.
          </p>

          <button
            onClick={() => setShowLocations(!showLocations)}
            className="inline-flex items-center text-red-600 hover:text-red-500 text-lg font-semibold group transition-all mb-8"
          >
            {showLocations ? "Hide Locations" : "View Locations"}
            <ArrowRight
              className={`ml-2 h-5 w-5 transition-transform ${
                showLocations ? "rotate-90" : "group-hover:translate-x-1 -rotate-45"
              }`}
            />
          </button>

          <AnimatePresence>
            {showLocations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-3 max-w-lg"
              >
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-3 hover:border-red-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <h3 className="text-sm font-bold">{location.city}</h3>
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-2">{location.address}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={inView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 1 }}
  className="relative flex justify-center md:justify-end w-full overflow-hidden max-w-full"
>
  <div className="relative w-full flex justify-center overflow-hidden">
    {/* FINAL RESPONSIVE GLOBE SIZE — NO OVERFLOW */}
    <div className="w-[220px] h-[220px] 
                    sm:w-[260px] sm:h-[260px]
                    md:w-[300px] md:h-[300px]
                    lg:w-[340px] lg:h-[340px]
                    xl:w-[380px] xl:h-[380px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
    </div>
  </div>
</motion.div>

      </div>
    </section>
  )
}


function ScheduleVisitSection() {
  return (
    
    <section className="relative h-[500px] md:h-[600px] lg:h-[500px] w-full">
      {/* Background Image */}
      <Image
        src="/images/Gallery/image 30.jpg"
        alt="Schedule Visit Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center w-full">
        <div className="max-w-[1200px] w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center md:text-left max-w-full md:max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl font-custom font-bold mb-4">
              Schedule Your Visit
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Book a convenient time to experience our EV fleet up close. Meet our team, 
              explore our products, and discover the future of electric vehicles.
            </p>
          </motion.div>

          {/* Right Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end w-full md:w-auto"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
            >
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/70 to-transparent" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/community.JPG"
              alt="Community Impact"
              width={600}
              height={400}
              className="shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-custom font-bold mb-6">We empower<br />our community</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At SUL Mobility, we believe in empowering our community through sustainable transportation solutions. Our commitment goes beyond providing vehicles – we're building a future where clean mobility is accessible to all.
            </p>
            <Link
              href="/impact"
              className="inline-flex items-center text-red-600 hover:text-red-500 text-lg font-semibold"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TrainingSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/Traininghero.png"
        alt="Training Academy"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 " />
      <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-custom font-bold mb-6 text-red-600">
            Join SUL Mobility's Training<br />Academy today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Start your journey towards a sustainable and rewarding career in the e-mobility industry. Our comprehensive training programs are designed to equip you with the skills and knowledge needed to excel in this rapidly growing field.
          </p>
          <Link
            href="/training"
            className="inline-flex items-center px-8 py-4 text-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: 'Scheduled Maintenance',
      description: 'Scheduled ongoing maintenance will keep your motorcycle running in good condition with no breakdown surpriseson the road.',
    },
    {
      title: 'E-Motorcycle Service & Repair',
      description: 'Our trained factory motorcycle repair technicians will provide you with quality service at an affordable rate.',
    },
    {
      title: 'Roadside Assistance',
      description: 'Our roadside assistance services are positioned as value-added services that can be combined with other packages',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-custom font-bold mb-16 text-red-600">Our Services</h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex items-center justify-between border-b border-gray-800 pb-8 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg max-w-2xl">{service.description}</p>
              </div>
              <ArrowRight className="h-14 w-14 text-gray-100 transform group-hover:translate-x-2 transition-transform duration-300 -rotate-45 hover:rotate-0 hover:text-red-600" />
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 text-lg border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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

function ContactSection() {
  const Input = ({ type, placeholder, ...props }: { type: string; placeholder: string; [key: string]: any }) => (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-6 py-4 bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
      {...props}
    />
  );

  const Textarea = ({ placeholder, rows, ...props }: { placeholder: string; rows: number; [key: string]: any }) => (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full px-6 py-4 bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
      {...props}
    />
  );

  const Button = ({ type, children, ...props }: { type: 'submit' | 'button' | 'reset'; children: React.ReactNode; [key: string]: any }) => (
    <button
      type={type}
      className="w-full px-8 py-4 bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
      {...props}
    >
      {children}
    </button>
  );
  
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-custom font-bold mb-16">
          We're <span className="text-red-600">24/7</span> ready to<br />help you
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <form className="space-y-8">
              <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" rows={6} />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div className="h-[500px] relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4888!2d30.0596!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnMzguOCJTIDMwwrAwMyc0NC42IkU!5e0!3m2!1sen!2s!4v1639580000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mt-16 p-6 bg-gray-950 shadow-lg">
  <div className="text-center p-4 border border-gray-800 transition-transform transform hover:scale-105 bg-gray-900">
    <Phone className="mx-auto h-10 w-10 text-red-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-2 text-white">Phone</h3>
    <p className="text-gray-300 text-lg">6242</p>
  </div>
  <div className="text-center p-4 border border-gray-800 transition-transform transform hover:scale-105 bg-gray-900">
    <MapPin className="mx-auto h-10 w-10 text-red-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-2 text-white">Office</h3>
    <p className="text-gray-300 text-lg">5th Floor, Wing B, Fairview Building, KG 622 Street, Kimihurura, Kigali, Rwanda</p>
  </div>
  <div className="text-center p-4 border border-gray-800 transition-transform transform hover:scale-105 bg-gray-900">
    <Mail className="mx-auto h-10 w-10 text-red-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-2 text-white">Email</h3>
    <p className="text-gray-300 text-lg">info@sulmobility.com</p>
  </div>
</div>
      </div>
    </section>
  )
}

