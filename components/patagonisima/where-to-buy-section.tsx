"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function WhereToBuySection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title */}
          <div>
            {/* Label with line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-primary/30" />
              <span className="text-xs tracking-[0.3em] text-primary/65 font-light">
                {t.whereToBuy.label}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight mb-8">
              {t.whereToBuy.title}
              <br />
              <em className="italic text-primary/80">{t.whereToBuy.titleHighlight}</em>
              <br />
              <span className="text-primary">{t.whereToBuy.subtitle}</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary/75 leading-relaxed font-light max-w-md">
              {t.whereToBuy.description}
            </p>
          </div>

          {/* Right column - Links */}
          <div className="flex flex-col justify-center">
            {t.whereToBuy.links.map((link, index) => (
              <Link
                key={index}
                href="#"
                className="group flex items-center justify-between py-6 border-b border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div>
                  <span className="text-[11px] tracking-[0.25em] text-primary/60 font-light block mb-2">
                    {link.label}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary">
                    {link.title}{" "}
                    <em className="italic text-primary/80">{link.titleHighlight}</em>
                  </h3>
                </div>
                <ArrowRight 
                  size={20} 
                  className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
