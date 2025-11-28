'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/SUL_White_FULL_LOGO.png"
                alt="SUL Mobility"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Easing the Transition to E-Mobility with Africa's Best EV Products, Driving Sustainable Change
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Quick Links</h3>
            <ul role="list" className="space-y-2">
              {['Home', 'Products', 'Services', 'Impacts', 'Trainings'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm leading-6 text-gray-300 hover:text-red-600 duration-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Company</h3>
            <ul role="list" className="space-y-2">
              {['About Us', 'Blog', 'Careers', 'Contact', 'Partnerships', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm leading-6 text-gray-300 hover:text-red-600 duration-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Subscribe</h3>
            <p className="text-sm leading-6 text-gray-300 mb-4">
              Subscribe to stay tuned for new web-design and latest updates. Let's do it!
            </p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none border-0 bg-black px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email Address"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">&copy; 2023 All Rights Reserved</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Use', href: '/terms-of-use' },
                { name: 'Sales and Refunds', href: '/sales-and-refunds' },
                { name: 'Legal', href: '/legal' },
                { name: 'Site Map', href: '/site-map' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs leading-5 text-gray-400 hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-x-6">
              <Link href="#" className="text-gray-400 hover:text-red-600 duration-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 duration-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red- duration-500">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 duration-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

