'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail} from 'lucide-react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ email, message, agreed })
  }

  return (
    <main className="bg-black text-white">
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-custom font-bold mb-16 text-[#FF0000]"
          >
            Contact Us
          </motion.h1>

<div className="grid lg:grid-cols-4 gap-12 mb-20">

  {/* GENERAL INQUIRIES */}
  <Card className="bg-gray-900/50 border-gray-800">
    <CardContent className="p-6">
      <h2 className="text-lg text-gray-100 font-bold mb-6">General Inquiries</h2>

      <div className="space-y-4">
        <a
          href="mailto:info@sulmobility.com"
          className="w-full flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md text-gray-300 hover:text-[#FF0000] transition"
        >
          info@sulmobility.com <ArrowRight className="w-4 h-4 text-[#FF0000]" />
        </a>

        <a
          href="tel:+250784839049"
          className="w-full flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md text-gray-300 hover:text-[#FF0000] transition"
        >
          +(250) 78 6481520 <ArrowRight className="w-4 h-4 text-[#FF0000] -rotate-45" />
        </a>
      </div>
    </CardContent>
  </Card>

  {/* TECHNICAL SUPPORT */}
  <Card className="bg-gray-900/50 border-gray-800">
    <CardContent className="p-6">
      <h2 className="text-lg text-gray-100 font-bold mb-6">Technical Support</h2>

      <div className="space-y-4">
        <a
          href="mailto:info@sulmobility.com"
          className="w-full flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md text-gray-300 hover:text-[#FF0000] transition"
        >
          info@sulmobility.com <ArrowRight className="w-4 h-4 text-[#FF0000]" />
        </a>

        <a
          href="tel:+250784839049"
          className="w-full flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md text-gray-300 hover:text-[#FF0000] transition"
        >
          +(250) 78 6481520 <ArrowRight className="w-4 h-4 text-[#FF0000]" />
        </a>
      </div>
    </CardContent>
  </Card>

  {/* OFFICE ADDRESS */}
  <Card className="bg-gray-900/50 border-gray-800">
    <CardContent className="p-6">
      <h2 className="text-lg text-gray-100 font-bold mb-6">Our Office</h2>

      <p className="text-gray-400 leading-relaxed mb-6">
        Address: KG 622 ST FairView<br />
        Building, 3rd Floor, Wing B
      </p>

      <a className="w-full flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md text-gray-300 hover:text-[#FF0000] transition">
        Get Directions <ArrowRight className="w-4 h-4 text-[#FF0000]" />
      </a>
    </CardContent>
  </Card>

  {/* SOCIALS + CALL */}
  <Card className="bg-gray-900/50 border-gray-800">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-lg text-gray-100 font-bold mb-6">Connect with Us</h2>

        {/* SOCIAL ICONS GRID */}
        <div className="flex space-x-3 mb-8">
          <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-[#FF0000] transition">
            <FaTwitter className="text-white w-4 h-4" />
          </div>

          <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-[#FF0000] transition">
            <FaLinkedinIn className="text-white w-4 h-4" />
          </div>

          <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-[#FF0000] transition">
            <FaInstagram className="text-white w-4 h-4" />
          </div>

          <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-[#FF0000] transition">
            <FaFacebookF className="text-white w-4 h-4" />
          </div>

          <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-[#FF0000] transition">
            <FaYoutube className="text-white w-4 h-4" />
          </div>
        </div>
      </div>

      {/* CALL US BUTTON */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md mt-auto">
        <span className="text-gray-300">Call us on</span>
        <span className="text-red-600 font-bold text-xl tracking-wide">6242</span>
      </div>
    </CardContent>
  </Card>

</div>


          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
                We're <span className="text-[#FF0000]">24/7</span><br />
                ready to help<br />
                you at anytime
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
                />
                <Textarea
                  placeholder="MESSAGE"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500 min-h-[150px]"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree with{' '}
                    <a href="#" className="text-[#FF0000] hover:underline">Terms of Use</a>
                    {' '}and{' '}
                    <a href="#" className="text-[#FF0000] hover:underline">Privacy Policy</a>
                  </label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 transition-colors duration-300"
                >
                  Send message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
            <div className="relative h-[400px] overflow-hidden">
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
        </div>
      </section>
    


      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-custom font-bold mb-6">
            Get in touch with us today to explore how<br />
            SUL can empower your journey toward<br />
            sustainable transportation.
          </h2>
          <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 transition-colors duration-300">
            FIND OUT MORE
          </Button>
        </div>
      </section>
    </main>
  )
}

