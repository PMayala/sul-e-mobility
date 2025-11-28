'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

/* -------------------------------------------------------------
   TYPES
------------------------------------------------------------- */
type NavItem = {
  name: string
  href: string
}

/* -------------------------------------------------------------
   STATIC DATA
------------------------------------------------------------- */
const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Training', href: '/training' },
  { name: 'Impact', href: '/impact' },
]

const companyLinks: NavItem[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Assembly Line', href: '/assembly' },
  { name: 'Dealership Network', href: '/dealership' },
  { name: 'Sponsor Programs', href: '/sponsor' },
  { name: 'Blog / News', href: '/blog' },
]

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function Header() {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false)

  /* -------------------------------------------
     SCROLL EFFECT (header blur + close dropdown)
  -------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setCompanyMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* -------------------------------------------
     PREVENT BODY SCROLL ON MOBILE MENU OPEN
  -------------------------------------------- */
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [mobileMenuOpen])

  /* -------------------------------------------
     MEMOIZED ACTIVE CHECKER
  -------------------------------------------- */
  const isActive = useCallback(
    (href: string) => pathname === href,
    [pathname]
  )

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-black border-b border-gray-900 ${
        scrolled
          ? 'lg:bg-black/20 lg:backdrop-blur-lg shadow-lg'
          : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center -m-1.5 p-1.5">
            <Image
              src="/images/SUL_White_FULL_LOGO.png"
              alt="SUL Mobility"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="Open mobile menu"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-white hover:text-red-600 transition"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-semibold relative group hover:text-red-500 transition ${
                isActive(item.href) ? 'text-red-500' : 'text-white'
              }`}
            >
              {item.name}

              {/* bottom animated underline */}
              <span
                className={`absolute -bottom-2 left-1/2 w-12 h-0.5 bg-red-600 transform -translate-x-1/2 transition-all ${
                  isActive(item.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}

          {/* COMPANY DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setCompanyMenuOpen((prev) => !prev)}
              className="flex items-center gap-1 text-base font-semibold text-white hover:text-red-500 transition group"
            >
              Company
              <ChevronDown
                className={`h-4 w-4 transition transform ${
                  companyMenuOpen ? 'rotate-180 text-red-500' : 'text-white group-hover:text-red-500'
                }`}
              />
            </button>

            <div
              className={`absolute right-0 mt-3 w-64 bg-black/80 backdrop-blur-lg border border-gray-900 shadow-xl p-4 transition-all duration-300 ${
                companyMenuOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setCompanyMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                        isActive(link.href)
                          ? 'text-red-500 bg-red-600/10'
                          : 'text-white hover:text-red-500 hover:bg-red-600/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DESKTOP CONTACT BTN */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className={`inline-flex items-center px-8 py-3 text-lg font-semibold border-2 border-red-600 transition
            ${
              isActive('/contact')
                ? 'bg-red-600 text-white'
                : 'text-red-600 hover:bg-red-600 hover:text-white hover:duration-500'
            }
          `}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu
        open={mobileMenuOpen}
        close={() => setMobileMenuOpen(false)}
        navigation={navigation}
        companyLinks={companyLinks}
        pathname={pathname}
      />
    </header>
  )
}

/* -------------------------------------------------------------
   MOBILE MENU COMPONENT
------------------------------------------------------------- */

type MobileProps = {
  open: boolean
  close: () => void
  navigation: NavItem[]
  companyLinks: NavItem[]
  pathname: string
}

function MobileMenu({ open, close, navigation, companyLinks, pathname }: MobileProps) {
  const [dropdown, setDropdown] = useState(false)

  const isActive = useCallback((href: string) => pathname === href, [pathname])

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'visible' : 'invisible'}`}>
      {/* OVERLAY */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* SLIDE-IN PANEL */}
      <div
        className={`absolute inset-y-0 right-0 w-full max-w-sm bg-black/95 border-l border-gray-900 transform transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6">
          <Image
            src="/images/SUL_White_FULL_LOGO.png"
            alt="SUL Mobility"
            width={120}
            height={40}
          />
          <button onClick={close} className="text-white hover:text-red-500">
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* LINKS */}
        <div className="px-6">
          {/* Regular Nav */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={close}
              className={`block py-4 px-4 text-lg font-semibold transition ${
                isActive(item.href)
                  ? 'text-red-500 bg-red-600/20'
                  : 'text-white hover:text-red-500 hover:bg-red-600/10'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Company Dropdown */}
          <button
            onClick={() => setDropdown((prev) => !prev)}
            className="w-full flex items-center justify-between py-4 px-4 text-lg text-white font-semibold hover:text-red-500 transition"
          >
            Company
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                dropdown ? 'rotate-180 text-red-500' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              dropdown ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <ul className="pl-6 border-l border-gray-800">
              {companyLinks.map((link) => (
                <li key={link.href} className="py-2">
                  <Link
                    href={link.href}
                    onClick={() => {
                      close()
                      setDropdown(false)
                    }}
                    className={`block text-base px-2 transition ${
                      isActive(link.href) ? 'text-red-500' : 'text-white hover:text-red-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            onClick={close}
            className="block mt-6 px-8 py-4 text-center text-lg border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}