"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useCallback } from "react"
import { useLanguage } from "@/lib/language-context"

const navItems = [
  { labelKey: "products", href: "/productos" },
  { labelKey: "ourStory", href: "/historia" },
  { labelKey: "pairings", href: "/maridajes" },
  { labelKey: "elCalafate", href: "/calafate" },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-14 lg:w-52 lg:h-16 flex-shrink-0 transition-opacity hover:opacity-70">
            <Image
              src="/images/logo.png"
              alt="Patagonisima"
              fill
              sizes="208px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-12" aria-label="Main navigation">
            {navItems.map(({ labelKey, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] tracking-[0.35em] uppercase text-primary hover:text-primary transition-all duration-300 font-medium hover-line"
              >
                {t.nav[labelKey]}
              </Link>
            ))}
          </nav>

          {/* Language & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em]" role="group" aria-label="Language selector">
              <button
                onClick={() => setLang("es")}
                className={`transition-all duration-300 ${lang === "es" ? "text-primary font-medium" : "text-primary/40 hover:text-primary/70"}`}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
              <span className="text-primary/20" aria-hidden="true">/</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-all duration-300 ${lang === "en" ? "text-primary font-medium" : "text-primary/40 hover:text-primary/70"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <Link
              href="/productos"
              className="bg-primary text-primary-foreground px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-primary/90 transition-all duration-300 font-light border border-primary hover:shadow-lg"
            >
              {t.nav.shopNow}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary p-2 -mr-2 transition-transform duration-200 active:scale-95"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-8 border-t border-primary/10" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navItems.map(({ labelKey, href }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-xs tracking-[0.3em] uppercase text-primary hover:text-primary transition-all duration-300 py-4 font-semibold border-b border-primary/10"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t.nav[labelKey]}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.2em]">
                  <button
                    onClick={() => setLang("es")}
                    className={`transition-colors ${lang === "es" ? "text-primary font-medium" : "text-primary/40"}`}
                  >
                    ES
                  </button>
                  <span className="text-primary/20">/</span>
                  <button
                    onClick={() => setLang("en")}
                    className={`transition-colors ${lang === "en" ? "text-primary font-medium" : "text-primary/40"}`}
                  >
                    EN
                  </button>
                </div>
                <Link
                  href="/productos"
                  onClick={closeMenu}
                  className="bg-primary text-primary-foreground px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase font-light"
                >
                  {t.nav.shopNow}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
